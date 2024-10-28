import { StatusCodes } from 'http-status-codes';
// Models
import Job from '../models/JobModel.js';
// Errors
import { NotFoundError } from '../errors/customErrors.js';

// Get All Jobs
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

// Create Job
export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// Get Single Job
export const getSingleJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id);
  if (!job) throw new NotFoundError(`no job with id: ${id} exist`);

  res.status(StatusCodes.OK).json({ job });
};

// Update Job
export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    // runValidators: true,
  });
  if (!updatedJob) throw new NotFoundError(`no job with id: ${id} exist`);

  res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob });
};

// Delete Job
export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const removedJob = await Job.findByIdAndDelete(id);
  if (!removedJob) throw new NotFoundError(`no job with id: ${id} exist`);

  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob });
};
