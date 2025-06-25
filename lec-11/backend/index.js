const express = require('express');
const app = express();
const path = require("path");
const port = 5000;

app.use(express.static(path.join(__dirname,"public"))); //this line is used to serve static files from the public folder
app.use(express.urlencoded({extended:true})) // ye line isliye use kr rhe hai kyunki jo post ko data hoga vo kis type ka data hoga taki undefined na show ho aaur data jis format hai like string number ussi format me show ho
app.use(express.json()); // this middleware is used to convert form-data into json
// app.use(()=>{
//     console.log("generic middleware");  // request will stuck here
// })

app.use((req,res,next)=>{
    console.log("generic middleware");
    next(); // here i am telling request that it go forward (down)
})

app.use("/user",(req,res,next)=>{
     console.log("Path specific Middleware");
     next();
})


app.get("/",(req,res)=>{
    res.send("Server is running")
})


// app.get("/user",(req,res)=>{
//     // res.send("server is running for user");
//     res.json({name: "Ragini"});
// })

app.get("/user",(req,res)=>{
    // res.send("welocme again for user");
    return res.json({name: "Ragini Sharma"});
    res.json({name:"Ragini Sharma"}); // here it generates error on backend not on frontend that's we use return statement kyunki finction me return statement ke baad code nhi chalta hai, so this will not work as function returnned
})

app.post("/user",(req,res)=>{
    console.log("Form Submittted");
    console.log(req.body);
    res.send("Form submitted successfully");
})

app.get("/contact",(req,res)=>{
    console.log("api hit");
    res.redirect("/contact.html");
});

app.get("/test",(req,res)=>{
    console.log(req.query);
    // res.status(201).send("ok"); or we can write
    res.status(201).json({
        data: req.query
    })  
})

app.post("/test",(req,res)=>{
    console.log(req.body);
    res.send("submitted");
})

app.listen(port,()=>{
    console.log(`server is live on port ${port}`);
});

