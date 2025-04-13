import { Request, Response } from 'express';
import { createBookings, getAllBookedSeats,deleteSeatByUserAndSeatNumber } from '../models/booking.model';

export const createBookingController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, seatList } = req.body;

    console.log('📥 Booking request received:', { userId, seatList });

    if (!userId || !Array.isArray(seatList) || seatList.length === 0) {
      return res.status(400).json({ message: 'Invalid booking data' });
    }

    const newBookings = await createBookings(userId, seatList);

    return res.status(201).json({ message: 'Seats booked successfully', bookings: newBookings });
  } catch (error) {
    console.error('❌ Booking failed:', error);
    return res.status(500).json({ message: 'Server error during booking' });
  }
};

export const getAllBookingsController = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const seats = await getAllBookedSeats();
    return res.status(200).json(seats);
  } catch (error) {
    console.error('❌ Failed to fetch bookings:', error);
    return res.status(500).json({ message: 'Server error while fetching bookings' });
  }
};

export const deleteSeatController = async (req:Request,res:Response): Promise<Response> =>{
    const { userId, seatNumber } = req.body;

    if(!userId || !seatNumber){
        return res.status(400).json({ message: 'Missing userId or seatNumber' });
    }

    try {
        await deleteSeatByUserAndSeatNumber(userId, seatNumber);
        return res.status(200).json({ message: 'Seats has been  removed successfully' });
      } catch (error) {
        console.error('❌ Delete error:', error);
        return res.status(500).json({ message: 'Server error' });
      }

}
