import express from 'express';
import mongoose from 'mongoose';
import {connect} from './database/connection.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
// app.use(cookieParser());
const port = 4000;

app.listen(port,()=>{
    connect();
    console.log(`Server connected on port no ${port}`);
})