import { Router } from 'express';
// Controllers
import {
  getAllJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
} from '../controllers/jobControllers.js';

const router = Router();

// router.get('/', getAllJobs);
// router.post('/', getAllJobs);

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getSingleJob).patch(updateJob).delete(deleteJob);

export default router;
