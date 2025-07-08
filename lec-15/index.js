// const express = require ('express');
// const { connection } = require('mongoose');
// const app = express();
// const port = 3000;
// require("dotenv").config();
import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {connectDb} from "./database/connection.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
app.use(express.json()); // allows us to parse incoming requests : req.body
app.use(cookieParser());
const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello express222s")
})

app.use("/api/auth",authRoutes); // common routes

app.listen(port,()=>{
    connectDb();
    console.log(`Server run on port ${port}`);
});