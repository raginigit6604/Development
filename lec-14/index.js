const express = require ("express");
const app = express();
const port = 4000;
const path = require("path");
require("dotenv").config();
const connectTodb = require("./database/connection");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
const userRouter = require("./routes/user.routes");
app.use("/user",userRouter); //path specfic middleware

app.listen(port,async ()=>{
    await connectTodb();
    console.log(`Server is started on port no ${port}`);
})