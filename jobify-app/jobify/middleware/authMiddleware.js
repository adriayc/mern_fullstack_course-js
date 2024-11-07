// Utils
import { verifyJWT } from '../utils/tokenUtils.js';
// Errors
import {
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authenticate invalid');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('unauthorized to access this route');
    }
    next();
  };
};
