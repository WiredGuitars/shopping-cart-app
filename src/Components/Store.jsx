import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProductData } from "./Fetch";
import Styles from "../assets/Preview.module.css";
import { useCart } from "./CartProvider";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [userInput, setUserInput] = useState('1')
  const navigate = useNavigate();
  const { addToCart } = useCart();


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

  const handleAddToCart = (prevInfo) => {
    // Some logic to get product and quantity
    const product = prevInfo
    const quantity = userInput;

    // Add to cart using the addToCart function from context
    addToCart(product, quantity);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUserInput(Math.max(1, Math.floor(Number(value))));
  }

  function handleImageClick(product) {
    const productId = product.id;
    navigate(`/Store/${productId}`, { state: { product } });
  }

  const handleSubmit = (event, prevInfo) => {
    event.preventDefault();

    const itemPrice = prevInfo.price;
    const userQuant = userInput;
    const userPrice = parseFloat(itemPrice) * userQuant;

    // Log the result for now; you can modify this part as needed
    console.log(`You want to buy ${userQuant} of ${prevInfo.title} for $${userPrice.toFixed(2)}`);
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
        <form onSubmit={(e) => handleSubmit(e, prevInfo)}>
          <input
            type="number"
            min="1"
            placeholder="How many do you want?"
            className={Styles.inputField}
            onChange={handleInputChange}
          />
        <button onClick={() => handleAddToCart(prevInfo)} type="submit" className={Styles.addToCart}>Add To Cart</button>
        <div className={Styles.confirmationWindow}></div>
        </form>
      </div>
    );
  }
};

export default Store;
