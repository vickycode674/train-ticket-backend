import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/user.model';

export const signup = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, email, password } = req.body;
    console.log('📥 Signup data received:', { username, email });

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User alreadyssssss exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({ username, email, password: hashedPassword });
  
    console.log("here is the data with where we can use================",newUser);
    return res.status(201).json({ message: 'User created', user: newUser });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

    return res.status(200).json({ message: 'Login success', token, userId:user.id,name:user.username });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};
