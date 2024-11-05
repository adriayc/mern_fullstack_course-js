import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';
// Public
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// Routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
// Custom middlewares
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

const app = express();
dotenv.config(); // DotEnv config

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

// Call middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './public'))); // File upload (directory)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

// Call routers
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authenticateUser, userRouter);

// Response file 'index.html' (Client)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

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
