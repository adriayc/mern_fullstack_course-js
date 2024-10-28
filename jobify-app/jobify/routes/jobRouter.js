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
import { validateJobInput } from '../middleware/validationMiddleware.js';

const router = Router();

// router.get('/', getAllJobs);
// router.post('/', getAllJobs);

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router
  .route('/:id')
  .get(getSingleJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);

export default router;
