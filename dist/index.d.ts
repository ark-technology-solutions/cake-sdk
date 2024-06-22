import pg from 'pg';
export declare function connect(): Promise<pg.Client>;
export declare function getVersion(): string;
export declare function createTables(): Promise<{
    name: string;
    columns: {
        name: string;
        type: string;
    }[];
}[]>;
export declare function log(): Promise<void>;
