import express from 'express';
import { signup, login } from '../controllers/user.controller';

const router = express.Router();

console.log('📩 /signup route hit==========================='); // 🔍 Route hit confirmation

router.get('/test', (req, res) => {
    console.log('👋 /test GET route hit!');
    res.send('Test route works!');
  });
  

router.post('/signup', (req, res) => {
    console.log('📩 /signup route hit'); // 🔍 Route hit confirmation
    signup(req, res);
  });

  router.post('/login', (req, res) => {
    console.log('🔐 /login route hit'); // 🔍 Route hit confirmation
    login(req, res);
  });
export default router;
