import React, { useEffect, useState } from "react";
import { Todo } from "../../type";
interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  
  const fetchTodo = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const data: Todo[] = await res.json();
    setTodos(data);
  };
  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <div>
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded shadow-sm"
          >
            <span className={todo.completed ? "line-through " : ""}>
              {todo.title}
            </span>
            <span className="text-2xl cursor-pointer">
              {todo.completed ? "✅" : "❌"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
