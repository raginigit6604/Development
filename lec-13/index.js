const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const { type } = require("os");
require('dotenv').config();

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log(error);
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    age:{
        type:Number,
        min:0,
        max:100
    },
    available:{
        type:Boolean,
        dafault: false
    },
    arr:[{
        type:String
    }]
})

const User = mongoose.model("User",userSchema); // this User name first letter is always capital
app.get("/create",async(req,res)=>{
    try{ // try catch block is uesd to handle that prevent to crash the server
    let newuser = await User.create({
        name:"ragini",
        email:"priyasharma@gmail.com",
        arr:["hi","hello"]
    })
    console.log(newuser);
    res.json(newuser);
}catch(error){
    res.status(400).json({message:error.message});
    console.log(error);
}
})

app.get("/users",async(req,res)=>{
    try{
       let users = await User.find(); // find all users
       res.status(200).json({users})
    }catch(error){
       res.status(400).json({message :error.message})
       console.log(error);
       
    }
})
app.get("/update/:id",async(req,res)=>{
    try{
        const id= req.params.id;
        await User.updateOne({_id:id,name:"RAgini Sharma"})
        res.status(200).json({message: "user upadated succesfully"})
    }catch(error){
        res.status(400).json({message :error.message})
       console.log(error);
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})