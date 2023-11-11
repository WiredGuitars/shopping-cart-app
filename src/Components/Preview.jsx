import React, { useEffect, useState } from "react";
import Styles from "../assets/Preview.module.css";
import { useNavigate } from 'react-router-dom';
import { fetchProductData } from "./Fetch";


export default function Preview() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProductData()
        const selectedProducts = [
          { ...data[0], itemPrice: `Satchel: $${data[0].price}` },
          { ...data[1], itemPrice: `Shirt: $${data[1].price.toFixed(2)}` },
          { ...data[4], itemPrice: `Choker: $${data[4].price}` },
        ];
        setProducts(selectedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  const handleImageClick = (product) => {
    const productId = product.id;
    navigate(`/Store/${productId}`, { state:  {product} });
  };

  return (
    <div className={Styles.title}>
      Featured Items
      <div className={Styles.mainContainer}>
        {products.map((product) => (
          <div className={Styles.previewBoxes} key={product.id} onClick={() => handleImageClick(product)}>
            <img
              className={Styles.previewImgs}
              src={product.image}
              alt={product.title}
            />
            <h1>{product.itemPrice}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
