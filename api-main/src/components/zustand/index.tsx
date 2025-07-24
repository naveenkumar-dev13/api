import React from "react";
import { TodoList_UseState } from "./04-todo_list";
import ZustandTodo from "./04-todo_list/zustandTodo";
import Counter from "./01-counter/normalCounter";
import ThemeToggle from "./02-colorTheme";
import InputField from "./03-inputBox";
import CounterAsync from "./01-counter/counterAsync";

function Zustand() {
  return (
    <div className="flex flex-col gap-4">
      <CounterAsync />
    </div>
  );
}

export default Zustand;
