import { createContext,useContext } from "react";

export const TodoContext = createContext(({
    todos:[
        // {
        //     id:1,
        //     todo:"hello",
        //     completed:false
        // }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo) =>{},
    toggleComplete:(id)=>{}
}))

export const useTodo = () =>{  //here we create custom hook that name useTodo
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;