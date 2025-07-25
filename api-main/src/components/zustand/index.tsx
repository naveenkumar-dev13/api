import React from "react";
import BankDashboard from "./05-bank_app";
import Counter from "./01-counter/normalCounter";
import CounterAsync from "./01-counter/counterAsync";
import ThemeToggle from "./02-colorTheme";


function Zustand() {
  return (
    <div className="">
      <div className="">
        {/* <Counter />
        <CounterAsync />
        <ThemeToggle /> */}
        <BankDashboard />
       
      </div>
    </div>
  );
}

export default Zustand;
