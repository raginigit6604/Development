import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connect.js";
const app = express();
dotenv.config();

const port = process.env.port || 4000;
app.listen(port,()=>{
    connectDB();
    console.log("Server Connected");
})
