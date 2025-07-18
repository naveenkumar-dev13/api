import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./home";
import RegularFetch from "./regularFetch";
import QueryFetch from "./queryFetch";
import QueryByClick from "./queryByClick";
import QueryById from "./queryById";

function ReactQuery() {
  return (
    <BrowserRouter>
      <nav className="w-full h-[50px] bg-[#333] flex items-center px-4 text-white gap-4">
        <NavLink to="/" className="p-2 transition-colors duration-150">
          Home
        </NavLink>
        <NavLink to="/regular" className="p-2 transition-colors duration-150">
          Regular Fetch
        </NavLink>
        <NavLink to="/query" className="p-2 transition-colors duration-150">
          Query Fetch
        </NavLink>
        <NavLink
          to="/queryClick"
          className="p-2 transition-colors duration-150"
        >
          Query Click by Fetch
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regular" element={<RegularFetch />} />
        <Route path="/query" element={<QueryFetch />} />
        <Route path="/query/:id" element={<QueryById />} />
        <Route path="/queryClick" element={<QueryByClick />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactQuery;
