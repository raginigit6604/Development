const express = require ("express"); // to create server
const app = express(); // here we make an application

console.log("object");

app.get("/",(req,res)=>{
    res.send("helooo");
});

app.get("/user",(req,res)=>{
    // res.send("this is user request on /user");
    let user = {
        name: "Ragini",
        arr: [1,3,4,5]
    }
    res.json(user); // json is object inside object or chaining of object is said json hum single element ko bhi json bol skte hai
});

// jab bhi hum 1 application banate to usse access krne ke liye 1 path provide krna hota hai so usse hum app.listen port no de krte hai
const Port = 4000;
// listen is used to continuously run on the sever
app.listen(Port,()=>{
    console.log("server started at prot no ${Port}");
});