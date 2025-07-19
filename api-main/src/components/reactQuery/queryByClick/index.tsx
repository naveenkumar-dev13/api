import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const QueryByClick = () => {
  interface Post {
    id: number;
    title: string;
    body: string;
  }
  const fetchPost = async () => {
    const data = axios.get("http://localhost:3001/posts");
    return data;
  };
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost(),
    enabled: false,
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p className="text-2xl">Loading...</p>;
  if (isError) return <p>{isError}</p>;
  return (
    <div className="p-5 container mx-auto">
      <h1 className="text-2xl font-medium mb-4">Query Fetch</h1>
      {data?.data.map((post: Post) => (
        <ul className="p-2 bg-teal-50" key={post.id}>
        
            <li className="hover:bg-red-50 transition-all duration-300 cursor-pointer p-1">
              {post.title}
            </li>
        </ul>
      ))}
      <button
        onClick={() => refetch()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        refresh
      </button>
    </div>
  );
};

export default QueryByClick;
