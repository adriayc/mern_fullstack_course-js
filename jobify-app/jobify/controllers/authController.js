import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
// Models
import User from '../models/UserModel.js';

// Register user
export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;

  req.body.role = isFirstAccount ? 'admin' : 'user';
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

// Login user
export const login = async (req, res) => {
  res.send('login');
};
