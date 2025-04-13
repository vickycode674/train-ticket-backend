
import express from 'express';
import { createBookingController, getAllBookingsController,deleteSeatController } from '../controllers/booking.controller';

const router = express.Router();

console.log('🪑 Seat booking routes loaded...');

router.get('/test', (req, res) => {
  console.log('🚦 /booking/test GET route hit!');
  res.send('Booking route working!');
});

router.get('/get-all', (req, res) => {
  console.log('📥 /booking/get-all route hit');
  getAllBookingsController(req, res);
});

router.post('/create', (req, res) => {
  console.log('🎯 /booking/create POST route hit');
  createBookingController(req, res);
});

router.delete('/delete',(req,res)=>{
    deleteSeatController (req,res)
})

export default router;
