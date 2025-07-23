"use client";

import React, { useState } from "react";
import { useStore } from "@/store/useStore";

const ZustandExample = () => {
  const { count, setCount,setDecrementCount } = useStore();
//   const [userCount, setUserCount] = useState(0);

//   const handleIncrementCount = () => {
//     setUserCount(userCount + 1);
//   };

//   const handleDecrementCount = () => {
//    if(userCount < 0) return;
//     setUserCount(userCount - 1);
//   };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={setCount}>Increment</button>
      <button onClick={setDecrementCount}>Decrement</button>
    </div>
  );
};

export default ZustandExample;
