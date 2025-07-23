import React,{useState} from 'react'
import {useTodo} from "../context/TodoContext"

const TodoItem = ({todo}) => {
    // [{id: 1,messge:"hello", completed: false}]
    console.log(todo,'------------------')
    const {updateTodo,deleteTodo,toggleComplete} = useTodo();
    const [todoMsg,setTodoMsg] = React.useState(todo.todo);
    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const toggleTodo=()=>{
        toggleComplete(todo.id);
    }

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }
  return (
     
    <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 mb-3 max-w-xl mx-auto">
     <input type='checkbox' checked={todo.completed} onChange={toggleTodo}  className="w-5 h-5 accent-green-500"></input>
     <input type='text' value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} 
      className={`flex-1 px-3 py-1 rounded-md border ${
      isTodoEditable ? 'border-blue-400 bg-white' : 'border-transparent bg-transparent'
    } focus:outline-none`}></input>
     <button onClick={()=>{
         if(todo.completed) return;
         if(isTodoEditable){
            editTodo()
         }else{
            setIsTodoEditable((prev)=>!prev)
         }
     }}
      className={`px-3 py-1 rounded-md font-medium text-sm transition ${
      isTodoEditable
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-yellow-400 text-black hover:bg-yellow-500'
    }`}>{isTodoEditable ? "Save" : "Edit"}</button>
     <button onClick={()=>deleteTodo(todo.id)} className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition">Delete</button>
    </div>
  )
}

export default TodoItem;