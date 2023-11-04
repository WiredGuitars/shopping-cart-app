import React from "react";
import Logo from "../assets/wlogo.png";
import Styles from "../assets/Navbar.module.css";
import Cart from "../assets/blackShoppingCart.png"

export default function Navbar() {
  const handleClick = () => {
    
  }
    return (
    <div className={Styles.navContainer}>
      <div className={Styles.leftLogo}>
        <img onClick={handleClick} className={Styles.logo} src={Logo} alt="Wired's Wares' Logo" />
        <>Wired's Wares'</>
      </div>
      <div className={Styles.rightLogo}>
        <button>About</button>
        <button>Shop</button>
        <img className={Styles.cart} src={Cart} alt="Black Shopping Cart Icon" />
      </div>
    </div>
  );
}
