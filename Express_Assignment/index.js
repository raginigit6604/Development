// index.js
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './Database/connection.js';
import router from '../Router/router.js';   

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  connectDB();
  console.log(`Server Connected on port no ${port}`);
});
