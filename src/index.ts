import express, { Application } from 'express';
require('dotenv').config();

const ApiId = process.env.API_ID;
const ApiKey = process.env.API_KEY;

const app: Application = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(5000, () => {
  console.log('Server running on prot 5000');
});
