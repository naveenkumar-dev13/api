import axios from "axios";
import React, { useEffect, useState } from "react";

const RegularFetch = () => {
  interface Post {
    id: number;
    title: string;
    body: string;
  }
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("http://localhost:3001/posts");

        setPosts(res.data);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="p-5 container mx-auto">
      <h3 className="text-2xl font-medium mb-4">Regular Fetch</h3>

      {posts.map((post) => (
        <ul className="p-2 bg-teal-50">
          <li
            key={post.id}
            className="hover:bg-red-50 transition-all duration-300 cursor-pointer p-1"
          >
            {post.title}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RegularFetch;
