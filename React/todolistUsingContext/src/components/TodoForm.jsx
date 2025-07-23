import React,{useState} from 'react'
import {useTodo} from '../context/TodoContext'

const TodoForm = () =>{
    const {addTodo} = useTodo();
    const [todo,setTodo] = useState("");
    const add = (e)=>{
        e.preventDefault();
        if(!todo) return
        addTodo({todo,completed:false})
        setTodo("");
    }
    return(
        <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-600 mt-8 mb-6">ToDo List App</h1>
        <form onSubmit={add}  className="flex items-center justify-center gap-4 mt-6 w-full max-w-xl mx-auto">  
            <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}
            placeholder="Add a new task..." className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"></input>
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200"> Add</button>
        </form>
        </div>
    )
}

export default TodoForm;