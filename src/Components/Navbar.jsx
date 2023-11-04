import React from "react";
import images from "../assets/wlogo.png";
import Styles from "../assets/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={Styles.navContainer}>
      <div className={Styles.leftLogo}>
        <img className={Styles.logo} src={images} alt="Wired's Wares' logo" />
        <>Wired's Wares'</>
      </div>
    </div>
  );
}
