// import { create } from "zustand";

import { create } from "zustand";

// interface todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// interface TodoState {
//   todos: todo[];
//   addTodo: (text: string) => void;
//   removeTodo: (id: number) => void;
//   toggleTodo: (id: number) => void;
// }

// export const useTodoStore = create<TodoState>((set, get) => ({
//   todos: [],
//   addTodo: (txt) => {
//     const { todos } = get();
//     set({ todos: [...todos, { id: Date.now(), text: txt, completed: false }] });
//   },
//   removeTodo: (id) => {
//     const { todos } = get();
//     set({ todos: todos.filter((todo) => todo.id !== id) });
//   },
//   toggleTodo: (id) => {
//     const { todos } = get();
//     set({
//       todos: todos.map((todo) =>
//         id === todo.id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     });
//   },
// }));

interface todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoList {
  todos: todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
export const useTodoStore = create<TodoList>((set, get) => ({
  todos: [],
  addTodo(text: string) {
    const { todos } = get();
    set({
      todos: [...todos, { id: Date.now(), text: text, completed: false }],
    });
  },
  removeTodo(id: Number) {
    const { todos } = get();
    set({ todos: todos.filter((todo) => todo.id !== id) });
  },
  toggleTodo(id: Number) {
    const { todos } = get();
    set({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  },
}));
