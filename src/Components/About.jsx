import React from "react";
import Styles from "../assets/About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.mainText}>
        Hello, and welcome to Wired's Wares'! <br /> An emporium of the latest
        and hottest attire
      </div>
      <div className={Styles.mainDescrip}>
        In actuality, this web-app is meant to demonstrate WiredGuitars@github's
        proficiency using React. Concepts such as: writing tests, fetching and
        receiving data, and utilizing routing to create a
        single-page-application (SPA) are just some of the goals of this
        assignment. Feel free to browse around. If you see anything that looks
        out of place, be sure to let me know!
      </div>
      <Link to="/Store">
        <button className={Styles.shopButton}>Shop Now!</button>
      </Link>
    </div>
  );
}
