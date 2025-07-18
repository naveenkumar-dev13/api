import React, { useEffect, useState } from "react";
import { Product } from "../../type";
import AddProductForm from "../addProductForm";

function DemoApi() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const BASE_URL = "https://fakestoreapi.com/products";
  const fetchApi = async () => {
    // GET METHOD      
    const res = await fetch(BASE_URL);
    const data: Product[] = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  if (loading)
    return (
      <p className="flex justify-center text-2xl font-semibold text-blue-600">
        Loading...
      </p>
    );
  const handleDelete = async (id: number) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };
  
  return (
    <div className="grid grid-cols-4 justify-center items-center bg-gray-100 p-8">
      <AddProductForm setProducts={setProducts} />
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md p-6 mb-4 w-80  text-center "
        >
          <div className="mb-4 w-40 h-40 mx-auto">
            <img src={product.image} alt="" className="w-full h-full" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {product.title}
          </h2>
          <p className="text-blue-600 font-bold text-md">${product.price}</p>
          <div className="flex justify-between ">
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DemoApi;
