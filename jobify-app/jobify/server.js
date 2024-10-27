import express from 'express';

const app = express();

// Call middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

app.listen(5100, () => {
  console.log('Sever running...');
});
