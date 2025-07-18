import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function QueryById() {
  const { id } = useParams();

  const fetchById = async (id: string) => {
    const res = await axios.get(`http://localhost:3001/posts/${id}`);
    return res.data; 
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchById(id as string),
    enabled: !!id, 
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading post!</div>;
  if (!data) return <div>No data found.</div>;

  const { title, body } = data;

  return (
    <div className="p-5 container mx-auto">
      <h1 className="text-2xl font-medium mb-4">Query By Id</h1>
      <ul className="p-2 bg-teal-50">
        <li className="hover:bg-red-50 transition-all duration-300 cursor-pointer p-1">
          <strong>{title}</strong>
          <br />
          {body}
        </li>
      </ul>
    </div>
  );
}

export default QueryById;
