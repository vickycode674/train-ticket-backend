import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import seatRoutes from './routes/seat.routes';
import cors from 'cors';
const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


dotenv.config();

app.use(express.json());
console.log("welcome to the world of backend dude..............")
app.use('/api/auth', authRoutes);
app.use('/api/seat', seatRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
