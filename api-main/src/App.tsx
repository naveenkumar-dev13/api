import React, { useState } from "react";
import TodoList from "./components/todo/TodoList";
import AddTodo from "./components/todo/AddTodo";
import { Todo } from "./type";
import ReactQuery from "./components/reactQuery";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
     

      <ReactQuery />
    </div>
  );
};

export default App;
