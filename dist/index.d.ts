export declare function connect(db_url: string): Promise<any>;
export declare function getVersion(): string;
export declare function createTables(): Promise<{
    name: string;
    columns: {
        name: string;
        type: string;
    }[];
}[]>;
export declare function log(): Promise<void>;
