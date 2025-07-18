import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function QueryFetch() {
  const fetchPost = async () => {
    const data = axios.get("http://localhost:3001/posts");
    return data;
  };
  const { data, isLoading, isError, error ,} = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost(),
    // staleTime: 5000,
    // refetchInterval: 1000,
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p className="text-2xl" >Loading...</p>;
  if (isError) return <p>{isError}</p>;
  return (
    <div className="p-5 container mx-auto">
      <h1 className="text-2xl font-medium mb-4">Query Fetch</h1>
      {data.data.map((post) => (
        <ul className="p-2 bg-teal-50" key={post.id}>
          <li className="hover:bg-red-50 transition-all duration-300 cursor-pointer p-1">
            {post.title}
          </li>
        </ul>
      ))}
        
    </div>
  );
}

export default QueryFetch;
