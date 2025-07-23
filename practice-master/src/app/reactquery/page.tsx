"use client"
import React, { useEffect } from 'react'
import { API_URL } from '@/definition';
import { useQuery } from '@tanstack/react-query';

interface Product{
  id:number;
  price:number;
  product_image:string;
  product_name:string;
  rating:number;
}

const ReactQueryExample = () => {

  const getAllProducts = async ()=>{
    const response = await fetch(`${API_URL}/get_products`);
    const data = await response.json();
    return data;
  }

  const {data:allProducts,isLoading,error} =useQuery({
    queryKey:['get_all_products'],
    queryFn: () => getAllProducts(),
  })

console.log(allProducts, "ALL PRODUCTS");


  // useEffect(()=>{
  //   fetch(`${API_URL}/get_products`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data, "PRODUCT DATA");
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // },[])

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>
  
  return (
    <div>
      {allProducts.map((product:Product)=>(
        <div key={product.id}>
          <h2>{product.product_name}</h2>
          <p>{product.price}</p>
          <p>{product.rating}</p>
          <img src={product.product_image} alt={product.product_name} />
        </div>
      ))}
    </div>
  )
}

export default ReactQueryExample;