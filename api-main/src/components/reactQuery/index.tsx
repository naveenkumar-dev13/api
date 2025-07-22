import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./01-home";
import RegularFetch from "./02-regularFetch";
import QueryFetch from "./03-queryFetch";
import QueryByClick from "./04-queryByClick";
import QueryById from "./04-queryById";
import QueryPage from "./05-QueryPage";
import InfiniteScroll from "./06-infiniteScrollByButton";
import QueryScroll from "./07-queryScroll";
import UseQueryies from "./08-useQueryies";
// import UseQueryies from "./useQueryies";

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
          Query Fetch By Click
        </NavLink>
        <NavLink
          to="/pagination"
          className="p-2 transition-colors duration-150"
        >
          Pagination
        </NavLink>
        <NavLink
          to="/infinite-scroll-button"
          className="p-2 transition-colors duration-150"
        >
          Infinite scroll by button
        </NavLink>
        <NavLink
          to="/infinite-scroll"
          className="p-2 transition-colors duration-150"
        >
          Infinite scroll
        </NavLink>
        <NavLink
          to="/useQueryies"
          className="p-2 transition-colors duration-150"
        >
          UseQueryies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regular" element={<RegularFetch />} />
        <Route path="/query" element={<QueryFetch />} />
        <Route path="/query/:id" element={<QueryById />} />
        <Route path="/queryClick" element={<QueryByClick />} />
        <Route path="/pagination" element={<QueryPage />} />
        <Route path="/infinite-scroll-button" element={<InfiniteScroll />} />
        <Route path="/infinite-scroll" element={<QueryScroll />} />
        <Route path="/useQueryies" element={<UseQueryies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactQuery;
