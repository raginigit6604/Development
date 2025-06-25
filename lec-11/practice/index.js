const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

const todos = [{
     task: "this is task 1",
     completed: false
}]

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/add-todo",(req,res)=>{
    res.redirect("addtodos.html");
})

app.post("/add-todo",(req,res)=>{
    console.log(req.body);
    const task = req.body.task;
    todos.push({
        task:task,
        completed:false
    })
    res.redirect('/all-todos');
})

app.get("/all-todos",(req,res)=>{
    // res.status(200).json(todos);
    res.status(200).json({todos}); // here we make todo as a object
});


app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})