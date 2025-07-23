import React from "react";
import useBearStore from "../store/useStore";

function Counter() {
  const { count, inc, dec, reset } = useBearStore();
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h1 className="text-xl font-bold">Count: {count}</h1>
      <button
        onClick={inc}
        className="mt-2 bg-green-500 px-4 py-2 text-white rounded"
      >
        Add Bear {}
      </button>
      <button
        onClick={dec}
        className="mt-2 ml-2 bg-red-500 px-4 py-2 text-white rounded"
      >
        Remove
      </button>
      <button
        onClick={reset}
        className="mt-2 ml-2 bg-blue-500 px-4 py-2 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
