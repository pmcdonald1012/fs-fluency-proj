
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

// const dbConfig = {
//     connectionString: process.env.DATABASE_URL,
//     ...pg(process.env.NODE_ENV === "production")
//     ? {
//         ssl: {
//             rejectUnauthorized: false, 
//         },
//     } :
//     }
// }