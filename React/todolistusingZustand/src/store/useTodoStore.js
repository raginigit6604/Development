import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),

  addTodo: (todo) => {
    set((state) => ({
      todos: [{ id: Date.now(), ...todo }, ...state.todos],
    }));
  },

  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((each) => each.id !== id),
    }));
  },

  updateTodo: (id, todo) => {
    set((state) => ({
      todos: state.todos.map((each) => (each.id === id ? todo : each)),
    }));
  },

  toggleComplete: (id) => {
    set((state) => ({
      todos: state.todos.map((each) =>
        each.id === id ? { ...each, completed: !each.completed } : each
      ),
    }));
  },
}));

export default useTodoStore;
