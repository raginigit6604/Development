const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require('dotenv').config();

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

console.log(process.env.MONGO_URI);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})