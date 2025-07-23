import React, { useState, useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
const App = () => {
  /* here todos is a variable and settodos is a function usestate is a buildin hook [] is a initial state */
  const [todos, setTodos] = useState( JSON.parse(localStorage.getItem('todos')) || []);

    //for localstorage i add this line


  const addTodo = (todo) => {
    //prev is to access prev value of state , Date.now () is to get current time, ...spread prev todo
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    // each is a object in array , prev ia a prev todos
    setTodos((prev) => prev.filter((each) => each.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((each) => (each.id === id ? todo : each)));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((each) =>
        each.id === id ? { ...each, completed: !each.completed } : each
      )
    );
  };
  console.log(todos, "---- todos----");



     useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
  //   useEffect(() => {
  //   const value = localStorage.getItem("todos");
  //   if (value) {
  //     // const todos = JSON.parse(localStorage.getItem("todos"));
  //     const todos = JSON.parse(value);
  //     if (todos && todos.length > 0) {
  //       setTodos(todos);
  //     }
  //   }
  // }, []);
  return (
    <div>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <TodoForm />
        <div>
          {/* {todos.map((each) => {
            <TodoItem todo={each} />;
          })} */}
          {todos.map((each) => (
            <TodoItem todo={each} key={each.id} />
          ))}
        </div>
      </TodoProvider>
    </div>
  );
};

export default App;
