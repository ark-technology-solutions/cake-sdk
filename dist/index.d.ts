import pg from 'pg';
export declare function connect(connection_options: {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
}): Promise<pg.Client>;
export declare function getVersion(): string;
