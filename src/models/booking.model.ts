// lib/booking.model.ts
import { pool } from '../config/db';

export interface Booking {
  id: number;
  user_id: number;
  seat_number: number;
  row_number: number;
  col_number: number;
  booked_at: string;
}

// Create bookings for a user
export const createBookings = async (
  userId: number,
  seatList: { seatNumber: number; row: number; col: number }[]
): Promise<Booking[]> => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const inserted: Booking[] = [];

    for (const seat of seatList) {
      const result = await client.query(
        `INSERT INTO bookings (user_id, seat_number, row_number, col_number)
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [userId, seat.seatNumber, seat.row, seat.col]
      );
      inserted.push(result.rows[0]);
    }

    await client.query('COMMIT');
    return inserted;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

// Get all booked seats
export const getAllBookedSeats = async (): Promise<Booking[]> => {
  const result = await pool.query('SELECT * FROM bookings ORDER BY seat_number');
  return result.rows;
};

export const deleteSeatByUserAndSeatNumber = async (userId: number, seatNumber: number): Promise<void> => {
  await pool.query(
    'DELETE FROM bookings WHERE user_id = $1 AND seat_number = $2',
    [userId, seatNumber]
  );
};
