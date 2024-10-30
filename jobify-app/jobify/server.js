import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
// Routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
// Custom middlewares
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

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

// Call routers
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/auth', authRouter);

// Not found (Middleware)
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'no found' });
});

// Call custom middlewares
app.use(errorHandlerMiddleware);

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
