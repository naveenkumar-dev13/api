import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
const fetchPost = async (id: Number) => {
  const res = await axios.get(`http://localhost:3001/posts/${id}`);
  return res.data;
};
const MultplePost = ({ postIds }: any) => {
  const PostQueries = useQueries({
    queries: postIds.map((id: Number) => ({
      queryKey: ["posts", id],
      queryFn: () => fetchPost(id),
    })),
  });
  console.log(PostQueries);
  const isLoading = PostQueries.some((query) => query.isLoading);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {PostQueries.map((query: any) => (
        <ul className="p-4 bg-teal-50">
          <li key={query.data.id}>
            {query.data.id} - {query.data.title}
          </li>
          <li>{query.data.body}</li>
        </ul>
      ))}
    </div>
  );
};
function UseQueryies() {
  const postIds = [1, 2, 3, 5];
  return (
    <div className="p-5 container mx-auto">
      <h1 className="text-2xl font-medium mb-4">Infinite Scroll by button</h1>
      <MultplePost postIds={postIds} />
    </div>
  );
}

export default UseQueryies;
