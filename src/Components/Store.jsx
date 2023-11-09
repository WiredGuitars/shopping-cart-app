// Store.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProductData } from "./Fetch";
const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProductData();
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
    const defaultProduct = {
      title: "Default Product",
      description: "This is the default product description.",
      price: 10, // Set your default price here
    };
    return (
      <div>
        <h2>{defaultProduct.title}</h2>
        <p>{defaultProduct.description}</p>
        <p>Price: ${defaultProduct.price}</p>
        {/* Add purchase options or form for the default product */}
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
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add purchase options or form here */}
    </div>
  );
};

export default Store;
