import { Router } from 'express';
// Controllers
import {
  getAllJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
} from '../controllers/jobControllers.js';
// Middlewares
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';

const router = Router();

// router.get('/', getAllJobs);
// router.post('/', getAllJobs);

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router
  .route('/:id')
  .get(validateIdParam, getSingleJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
