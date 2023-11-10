import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProductData } from "./Fetch";
import Styles from "../assets/Preview.module.css"


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

  function handleImageClick(product) {
    console.log(`Clicked on ${product.title}`)
  } 

  const location = useLocation();
  const product = location.state ? location.state.product : null;
  if (!product) {
    
    return (
      <div className={Styles.itemBoxes}>
      {products.map((product) => (
      <div className={`${Styles.previewBoxes}`} style = {{width: 'fit-content' }} key={product.id} onClick={() => handleImageClick(product)}>
            <img
              className={Styles.previewImgs}
              src={product.image}
              alt={product.title}/>
            <h1>{product.price}</h1>
          </div>
      ))}  
      </div>
    );
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
