import 'dotenv/config';
import express, { Application } from 'express';
import { getInvoices } from './services/getInvoices';

const ApiId = process.env.API_ID;
const ApiKey = process.env.API_KEY;

const app: Application = express();

console.log(ApiId);
console.log(ApiKey);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(5000, () => {
  console.log('Server running on prot 5000');
});

// getInvoices(ApiId, ApiKey, '20220101', '20220131');
getInvoices(
  '901cd0d5-a472-4f41-8755-35c337af86b2',
  'AnVt1hg4uns6Ew+5tAb9OnEN/TB7APDC+ZwKoz+X8ao=',
  '20220101',
  '20220131'
);
