import React, { useState } from "react";
import ReactQuery from "./components/reactQuery";
import Zustand from "./components/zustand";

const App: React.FC = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <Zustand />
      {/* <ReactQuery /> */}
    </div>
  );
};

export default App;
