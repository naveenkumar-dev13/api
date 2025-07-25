import React from "react";
import BankDashboard from "./05-bank_app/bank_app";
import Counter from "./01-counter/normalCounter";
import CounterAsync from "./01-counter/counterAsync";
import ThemeToggle from "./02-colorTheme";

function Zustand() {
  return (
    <div className="flex flex-col gap-4 ">
      <Counter />
      <CounterAsync />
      <ThemeToggle />
      <BankDashboard />
    </div>
  );
}

export default Zustand;
