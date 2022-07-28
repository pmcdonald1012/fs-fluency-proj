
import pg from "pg";
export const pool = new pg.Pool({
    database: 'bankdb',
    host: 'localhost',
    port: 5432
})

