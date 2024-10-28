import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
// Routers
import jobRouter from './routes/jobRouter.js';

const app = express();
dotenv.config(); // DotEnv config

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

// Call routers
app.use('/api/v1/jobs', jobRouter);

// Not found (Middleware)
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'no found' });
});
// Error route (Middleware)
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ smg: 'something went wrong' });
});

const port = process.env.PORT || 5100;

try {
  // Connect DB
  await mongoose.connect(process.env.MONGO_URL);
  // Listen port
  app.listen(port, () => {
    console.log(`Sever running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
