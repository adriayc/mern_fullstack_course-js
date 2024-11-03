import mongoose from 'mongoose';
import { readFile } from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();
// Models
import User from './models/UserModel.js';
import Job from './models/JobModel.js';

try {
  // Connect DB
  await mongoose.connect(process.env.MONGO_URL);
  // Get User
  // const user = await User.findOne({ email: 'adriano@mail.com' });
  const user = await User.findOne({ email: 'test@test.com' });
  // Read file
  const jsonJobs = JSON.parse(
    await readFile(new URL('./data/jobs_mock_data.json', import.meta.url))
  );
  // Add createBy
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  // Delete all documents
  await Job.deleteMany({ createdBy: user._id });
  // Create jobs
  await Job.create(jobs);
  console.log('Success!!!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
