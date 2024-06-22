import pg from 'pg'
const version = '1.0.0';
const { Client } = pg
const client = new Client()
/**
 * @description Connect to the postgres database
 */
export async function connect() {
    await client.connect()
    return client;
}

export function getVersion() {
    return version;
}

export async function createTables() {
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