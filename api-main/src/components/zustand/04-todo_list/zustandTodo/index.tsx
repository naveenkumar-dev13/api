import { useState } from "react";
import { useTodoStore } from "../../store/todo_list";

const ZustandTodo = () => {
  const [input, setInput] = useState("");
  const { todos, addTodo, removeTodo,toggleTodo } = useTodoStore();

  const handleAdd = () => {
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div className="p-4 space-y-4 bg-gray-100 rounded max-w-md mx-auto mt-4">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Enter a todo"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
          >
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-200"
              />
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZustandTodo;
