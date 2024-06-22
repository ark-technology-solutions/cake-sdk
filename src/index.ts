import pg from 'pg'
const version = '1.0.0';
const { Client } = pg
let client = null
/**
 * @description Connect to the postgres database
 */
export async function connect(config: {
    user: string,
    password: string,
    host: string,
    port: number,
    database: string
}) {
    client = new Client({
        user: config.user,
        password: config.password,
        host: config.host,
        port: config.port,
        database: config.database
    })
    await client.connect()
    return client;
}

export function getVersion() {
    return version;
}

export async function createTables() {
    if (!client) {
        throw new Error('Database not connected')
    }
    const tables = [
        {
            name: 'local_logs',
            columns: [
                {
                    name: 'id',
                    type: 'bigserial'
                },
                {
                    name: 'message',
                    type: 'text'
                },
                {
                    name: 'created_at',
                    type: 'timestamp'
                },
                {
                    name: 'author',
                    // This is a foreign key, id type uuid
                    type: 'uuid'
                },
                {
                    name: 'type',
                    type: 'tinyint'
                }
            ]
        }
    ]

    for (const table of tables) {
        const columns = table.columns.map(column => {
            return `${column.name} ${column.type}`
        }).join(', ')
        await client.query(`CREATE TABLE IF NOT EXISTS ${table.name} (${columns})`)
    }

    return tables;
}

export async function log() {
}