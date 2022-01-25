import { createPool } from 'mysql2/promise';
import {config} from 'dotenv'
export async function connect() {
    const env = config()
    const connection = await createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        connectionLimit: 10
    });
    
    return connection;

}