import { Router } from 'express';
// Security packages
import rateLimit from 'express-rate-limit';
// Middlewares
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';
// Controllers
import { register, login, logout } from '../controllers/authController.js';

const router = Router();

// Rate limiter config
const apiLimiter = rateLimit({
  windowMs: 1000 * 60 * 15, // 15 minutes
  max: 15,
  message: { msg: 'IP rate limit exceeded, retry in 15 minutes' },
});

router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
router.get('/logout', logout);

export default router;
