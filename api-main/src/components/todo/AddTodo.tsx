import React, { useState } from "react";
import { Todo } from "../../type";
interface AddTodoProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const AddTodo: React.FC<AddTodoProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     if (!title.trim()) return;
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      const data = await res.json();
      setTodos([...todos, data]);
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Add a new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
