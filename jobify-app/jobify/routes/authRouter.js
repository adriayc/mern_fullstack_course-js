import { Router } from 'express';
// Middlewares
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';
// Controllers
import { register, login } from '../controllers/authController.js';

const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);

export default router;
