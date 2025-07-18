import React, { useState } from "react";
import { Product } from "../../type";
type Props = {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};
const AddProductForm: React.FC<Props> = ({ setProducts }) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newProdut = {
        title,
        price,
        image: "https://picsum.dev/300/200",
      };
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newProdut),
      });
      const data = await res.json();
      setProducts((prev) => [...prev, data]);
      setMessage("Product added successfully");
      setTitle("");
      setPrice(0);
      setMessage("");
    } catch (error) {
      setMessage("Error adding product");
      console.error(error);
    }
  };
  return (
    <form
      className="p-4 border border-gray-300 rounded-md shadow-md w-[300px] mx-auto mt-8 "
      onSubmit={handleSubmit}
    >
      <h2 className="text-center mb-4 text-lg font-semibold">
        Add New Product
      </h2>

      <div>
        <input
          type="text"
          placeholder="Product Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Price"
          required
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Submit
      </button>
      <p>{message}</p>
    </form>
  );
};

export default AddProductForm;
