import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const Zustand = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  // const addTodo = () => {
  //   if (!input.trim()) return;
  //   const newTodo: Todo = {
  //     id: Date.now(),
  //     title: input,
  //     completed: false,
  //   };
  //   setTodos([...todos, newTodo]);
  //   setInput("");
  // };

  // const toggleComplete = (id: number) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  // const deleteTodo = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">📝 To-Do List</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            <span
              className={`flex-1 cursor-pointer ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.title}
            </span>
            <button   className="ml-4 text-red-500 hover:text-red-700">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Zustand;
