import pg from 'pg'
const version = '1.0.0';
const { Client } = pg
const client = new Client()
/**
 * @description Connect to the postgres database
 */
export async function connect(connection_options: {
    user: string,
    password: string,
    host: string,
    port: number,
    database: string
}) {
    client.user = connection_options.user
    client.password = connection_options.password
    client.host = connection_options.host
    client.port = connection_options.port
    client.database = connection_options.database

    await client.connect()
    return client;
}

export function getVersion() {
    return version;
}

export async function log() {
    
}