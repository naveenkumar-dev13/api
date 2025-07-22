import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { Form } from "react-router-dom";

const Home = () => {
  const BASE_URL = "http://localhost:3001/crud";
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const querClient = useQueryClient();
  const [editId, setEditId] = useState(null);

  // fetch data
  const fetchPost = async () => {
    const data = await axios.get(BASE_URL);
    return data;
  };
  // create data
  const createPost = async (newdata: any) => {
    const data = await axios.post(BASE_URL, newdata);
    return data;
  };
  // delete data

  const deletePost = async (id: Number) => {
    const data = await axios.delete(`${BASE_URL}/${id}`);
    return data;
  };

  const editPost = async (updateData: any) => {
    const data = await axios.put(`${BASE_URL}/${updateData.id}`, updateData);
    return data;
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", "crud"],
    queryFn: () => fetchPost(),
  });
  // post Mutation
  const createMuation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log(data);
      querClient.invalidateQueries({ queryKey: ["posts", "crud"] });
    },
  });

  const deleteMuation = useMutation({
    mutationFn: deletePost,
    onSuccess: (data) => {
      querClient.invalidateQueries({ queryKey: ["posts", "crud"] });
    },
  });

  const editMutation = useMutation({
    mutationFn: editPost,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries({ queryKey: ["posts", "crud"] });
    },
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p className="text-2xl">Loading...</p>;
  if (isError) return <p>{isError}</p>;

  const handeleCreate = (e: React.FormEvent) => {
    if (!title || !body) return;
    e.preventDefault();
    createMuation.mutate({ title, body });
    setTitle("");
    setBody("");
  };

  const handeleUpdate = (e: React.FormEvent) => {
    editMutation.mutate({ id: editId, title, body });
    setEditId(null);
    setTitle("");
    setBody("");
  };
  return (
    <div className="p-5">
      <h3 className="text-2xl font-medium mb-4">CRUD Operation</h3>
      <form action="" className="flex gap-2 " onSubmit={handeleCreate}>
        <input
          type="text"
          placeholder="title"
          className="border border-gray-400 p-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          className="border border-gray-400 p-1"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <div>
        {post?.data.map((post: any) => (
          <ul className="p-4 bg-teal-100 my-3 max-w-3xl " key={post.id}>
            {editId === post.id ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="title"
                  className="border border-gray-400 p-1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="editbody"
                  className="border border-gray-400 p-1"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <div className="flex gap-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={handeleUpdate}
                  >
                    save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => setEditId(null)}
                  >
                    cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <li className=" p-1 font-bold text-2xl">{post.title}</li>
                <li className=" p-1">{post.body}</li>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => setEditId(post.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => deleteMuation.mutate(post.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
