// Checkout.jsx
import React from "react";
import { useCart } from "./CartProvider";
import Styles from "../assets/Checkout.module.css";

const Checkout = () => {
  const { cartItems, getTotalCost, clearCart } = useCart();

  const handleCheckout = () => {
    // Implement logic for finalizing the payment
    // This is where you might integrate with a payment gateway, etc.
    console.log("Payment finalized!");
    clearCart(); // Clear the cart after successful checkout
  };

  return (
    <div className={Styles.checkoutContainer}>
      <h2>Your Order</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} x {item.quantity} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${getTotalCost().toFixed(2)}</p>
      <button onClick={handleCheckout}>Finalize Payment</button>
    </div>
  );
};

export default Checkout;
