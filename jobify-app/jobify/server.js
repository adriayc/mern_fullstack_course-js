import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import { nanoid } from 'nanoid';

const app = express();
dotenv.config(); // DotEnv config

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
];

// Call middleware
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

// Get All Jobs
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs });
});
// Create Job
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    // return res.status(400).json({ msg: 'please provide company and position' });
    res.status(400).json({ msg: 'please provide company and position' });
    return;
  }

  const id = nanoid();
  const job = { id, company, position };

  jobs.push(job);

  res.status(200).json({ job });
});
// Get Single Job
app.get('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id: ${id} exist` });
  }

  res.status(200).json({ job });
});
// Update Job
app.patch('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({ msg: 'please provide company and position' });
  }

  const job = jobs.find((job) => (job.id = id));
  if (!job) {
    return res.status(404).json({ msg: `no job with id: ${id} exist` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ job });
});
// Delete Job
app.delete('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id: ${id} exist` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);

  jobs = newJobs;

  res.status(200).json({ msg: 'job deleted' });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`Sever running on PORT ${port}...`);
});
