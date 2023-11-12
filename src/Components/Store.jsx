import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProductData } from "./Fetch";
import Styles from "../assets/Preview.module.css";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [userInput, setUserInput] = useState('')
  const navigate = useNavigate();

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

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  function handleImageClick(product) {
    const productId = product.id;
    navigate(`/Store/${productId}`, { state: { product } });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User input:", userInput);
  };

  const location = useLocation();
  const prevInfo = location.state ? location.state.product : null;
  if (!prevInfo) {
    return (
      <div className={Styles.itemBoxes}>
        {products.map((product) => (
          <div
            className={`${Styles.previewBoxes}`}
            style={{ maxWidth: "fit-content" }}
            key={product.id}
            onClick={() => handleImageClick(product)}
          >
            <img
              className={Styles.previewImgs}
              src={product.image}
              style={{ maxWidth: "250px", maxHeight: "150px" }}
              alt={product.title}
            />
            <h1>${product.price.toFixed(2)}</h1>
          </div>
        ))}
      </div>
    );
  } else if (prevInfo) {
    return (
      <div>
        <div
          className={Styles.previewBoxes}
          onClick={() => console.log(prevInfo)}
          style={{ width: "fit-content" }}
          key={prevInfo.id}
        >
          <img
            className={Styles.previewImgs}
            src={prevInfo.image}
            alt={prevInfo.title}
          />
          <h1>${prevInfo.price.toFixed(2)}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="How many do you want?"
            className={Styles.inputField}
            onChange={handleInputChange}
          />
        </form>
        <button className={Styles.addToCart}>Add To Cart</button>
      </div>
    );
  }
};

export default Store;
