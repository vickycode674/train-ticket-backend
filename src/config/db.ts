import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

pool.query('SELECT current_database()', (err, res) => {
    console.log('Connected to DB:', res?.rows[0]?.current_database);
  });
  
