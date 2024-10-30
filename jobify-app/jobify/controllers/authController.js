import { StatusCodes } from 'http-status-codes';
// Models
import User from '../models/UserModel.js';
// Errors
import { UnauthenticatedError } from '../errors/customErrors.js';
// Utils
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';

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
  const user = await User.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError('invalid credential');

  res.send('login');
};
