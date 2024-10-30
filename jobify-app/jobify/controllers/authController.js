import { StatusCodes } from 'http-status-codes';
// Models
import User from '../models/UserModel.js';
// Utils
import { hashPassword } from '../utils/passwordUtils.js';

// Register user
export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;

  req.body.role = isFirstAccount ? 'admin' : 'user';
  // Hash password
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

// Login user
export const login = async (req, res) => {
  res.send('login');
};
