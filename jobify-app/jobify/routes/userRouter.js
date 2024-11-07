import { Router } from 'express';
// Controllers
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controllers/userController.js';
// Middlewares
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getApplicationStats,
]);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;
