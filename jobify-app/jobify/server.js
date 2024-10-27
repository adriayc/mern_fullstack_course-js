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

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`Sever running on PORT ${port}...`);
});
