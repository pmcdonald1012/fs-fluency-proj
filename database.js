
import pg from "pg";
export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      }
    // database: 'bankdb',
    // host: 'localhost',
    // port: 5432
})

