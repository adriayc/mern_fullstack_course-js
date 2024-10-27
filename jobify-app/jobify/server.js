import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

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

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`Sever running on PORT ${port}...`);
});
