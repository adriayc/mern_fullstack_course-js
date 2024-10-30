import { StatusCodes } from 'http-status-codes';
// Models
import User from '../models/UserModel.js';

// Register user
export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;

  req.body.role = isFirstAccount ? 'admin' : 'user';
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

// Login user
export const login = async (req, res) => {
  res.send('login');
};
