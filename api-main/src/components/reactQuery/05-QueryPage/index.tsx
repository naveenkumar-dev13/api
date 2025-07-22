import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

function QueryPage() {
  const [page, setPage] = useState(1);
  const fetchPage = (page: number) => {
    return axios.get(`http://localhost:3001/items?_limit=10&_page=${page}`);
  };
  const { data } = useQuery({
    queryKey: ["page", page],
    queryFn: () => fetchPage(page),
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <div className="mt-6 container mx-auto">
        {data?.data.map((item: any) => (
          <div key={item.id} className=" p-2  bg-teal-50">
            <p className="hover:bg-red-50 transition-all duration-300 cursor-pointer p-1">
              {item.id} - {item.name}
            </p>
          </div>
        ))}
        <div className="flex gap-4 mt-6">
          <button
            className="bg-green-500  text-white font-bold py-2 px-4 rounded"
            onClick={() => setPage((pre) => pre - 1)}
            disabled={page === 0 ? true : false}
          >
            previous
          </button>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
            <button
              key={i}
              className={`bg-blue-500    text-white font-bold py-2 px-4 rounded ${
                page === i ? "bg-red-500 " : ""
              }`}
              onClick={() => setPage(i)}
            >
              {i}
            </button>
          ))}
          <button
            className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
            onClick={() => setPage((pre) => pre + 1)}
            disabled={page === 5 ? true : false}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default QueryPage;
