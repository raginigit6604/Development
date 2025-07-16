import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { connectDb } from './database/connection.js';
import productroutes from './routes/productroutes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/api/product",productroutes);

app.listen(port,()=>{
    connectDb();
    console.log(`server started on port no ${port}`);
})