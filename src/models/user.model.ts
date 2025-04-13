import { pool } from '../config/db';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const result = await pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [user.username, user.email, user.password]
  );
  return result.rows[0];
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows.length ? result.rows[0] : null;
};
