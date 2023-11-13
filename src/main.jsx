import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Store from "./Components/Store";
import "./index.css";
import Navbar from "./Components/Navbar";
import { CartProvider } from "./Components/CartProvider";
import Checkout from "./Components/Checkout";

const Root = () => {
  const [cartItemCount, setCartItemCount] = useState(0);



  return (
    <React.StrictMode>
      <CartProvider>
        <Router>
          <Navbar cartItemCount={cartItemCount} />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Store/:productId" element={<Store />} />
            <Route path="/Checkout" element = {<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
