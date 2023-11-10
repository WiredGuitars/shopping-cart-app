import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProductData } from "./Fetch";
const Store = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProductData();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const location = useLocation();
  const product = location.state ? location.state.product : null;
  if (!product) {
    
    return (
      <div>
      {products.map((product) => (
      <div key = {product.id}>Item: {product.title}</div>
      ))}  
      </div>
    );
    // const location = useLocation();
    // const product = location.state ? location.state.product : null;
    // if (!product){

    // while( i = 0, i < 20, i++){
    //   document
    // }
  }

  return (
    <div>
      {products.map((product) => (
      <div key = {product.id}>Item {product.title}</div>
      ))}  
      
    </div>
  );
};

export default Store;
