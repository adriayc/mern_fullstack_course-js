import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config(); // DotEnv config

// Fetch API
fetch('https://www.course-api.com/react-useReducer-cart-project')
  .then((res) => res.json())
  .then((data) => console.log(data));

// Global await
const getData = async () => {
  const response = await fetch(
    'https://www.course-api.com/react-useReducer-cart-project'
  );
  const cartData = await response.json();
  console.log(cartData);
};
getData();

// Global await (Try/Catch)
try {
  const response = await fetch(
    'https://www.course-api.com/react-useReducer-cart-project'
  );
  const cartData = await response.json();
  console.log(cartData);
} catch (error) {
  console.log(error);
}

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
