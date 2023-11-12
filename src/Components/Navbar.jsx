import React, { useState } from "react";
import Logo from "../assets/wlogo.png";
import Styles from "../assets/Navbar.module.css";
import Cart from "../assets/blackShoppingCart.png";
import { Link } from "react-router-dom";

export default function Navbar({ cartItemCount }) {
  

  return (
    <div className={Styles.navContainer}>
        <div className={Styles.leftLogo}>
      <Link to="/">
        <img className={Styles.logo} src={Logo} alt="Wired's Wares' Logo" />
      </Link>
        <>Wired's Wares'</>
      </div>
      <div className={Styles.rightLogo}>
        <Link to="/">
          <button className={Styles.buttons}>About</button>
        </Link>
        <Link to="/Store">
          <button className={Styles.buttons}>Store</button>
        </Link>
        <div className={Styles.cartContainer}>
          <img
            className={Styles.cart}
            src={Cart}
            alt="Black Shopping Cart Icon"
          />
          <div className={Styles.cartCount}>{cartItemCount}</div>
        </div>
      </div>
    </div>
  );
}
