import React from "react";
import Styles from "../assets/About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.mainText}>
        Hello, and welcome to Wired's Wares'! <br /> An emporium of the latest
        tech <br /> and hottest attire
      </div>
      <div className={Styles.mainDescrip}>
        In actuality, this web-app is meant to demonstrate WiredGuitars@github's
        proficiency using React. The images below (and on the store page) are fetched
        from a fake store api (<a target="_blank" href="https://fakestoreapi.com">fakestoreapi.com</a>).  
        This app performs that function and renders everything through react functional components to create a 
        single-page application (SPA) that's seamless to navigate through. 
      </div>
      <Link to="/Store">
        <button className={Styles.shopButton}>Shop Now!</button>
      </Link>
    </div>
  );
}
