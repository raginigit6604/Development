const express = require ("express");
const app = express();
const port = 5000;
const path = require("path");
const {v4: uuidv4} = require ("uuid");
require("dotenv").config();
const todoconnect = require(./databse/connection)

//Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true})); // this middleware is used for form
app.use(express.json());

let todos = [
    // {    
    //     id: "",
    //     task:"something",
    //     completed:false
    // }
]

app.post("/taskmaster",(req,res)=>{
    const task = req.body.task;
    todos.push({task:task,completed:false,id:uuidv4()});
    res.status(201).json({todos});
})
app.get("/taskmaster",(req,res)=>{
    res.status(200).json({todos});
})
app.get("/taskmaster/filter",(req,res)=>{
    const filter = req.query.filter;
    console.log(req.query);
    if(filter=="active"){
        const filtertodos = todos.filter(todo=>{
             return todo.completed == false;
        })
        return res.status(200).json({todos:filtertodos});
    }
    if(filter =="completed"){
        const filtertodos = todos.filter(todo=>{
            return todo.completed == true;
        })
        return res.status(200).json({todos:filtertodos});
    }
    if(filter == "all"){
        return res.status(200).json({todos});
    }

})

app.delete("/taskmaster/:id",(req,res)=>{
    const id = req.params.id;
    todos = todos.filter((todo)=>{
        return todo.id != id;
    })
    res.status(200).json({todos});
})

app.delete("/clearcompleted",(req,res)=>{
    todos = todos.filter((todo) =>{ 
         return todo.completed == false;
    });
    res.status(200).json({todos});
})

app.put("/taskmaster/:id",(req,res)=>{
    const id = req.params.id;
    todos = todos.map((todo)=>{
        if(todo.id== id){
            return{
                ...todo,
                completed:!(todo.completed)
            }
        }else{
           return todo;
        }
    })
    res.status(200).json({todos});
})

app.listen(port,()=>{
    console.log(`server is started on port no ${port}`);
})