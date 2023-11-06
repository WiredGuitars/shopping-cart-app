import React, { useEffect, useState } from "react";
import Styles from "../assets/Preview.module.css";

export default function Preview() {

const [products, setProducts] = useState([])


useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=5');
            const data = await response.json();
            console.log(data);
            const selectedProducts = [data[0], data[1], data[4]]
            setProducts(selectedProducts)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
}, []);

    


return (
    <div className={Styles.mainContainer}>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
}
