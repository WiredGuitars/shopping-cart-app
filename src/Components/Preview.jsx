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
            const selectedProducts = [
              { ...data[0], itemPrice: `Satchel: $${data[0].price}` }, 
              { ...data[1], itemPrice: `Shirt: $${data[1].price}` }, 
              { ...data[4], itemPrice: `Choker: $${data[4].price}` }]
            setProducts(selectedProducts)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
}, []);
const handleImageClick = (product) => {
  // Do something when an image is clicked, e.g., display a modal, navigate to a product page, etc.
  console.log(`Image clicked for product: ${product.title}`);
};

    


return (
    <div className={Styles.title}>Featured Items
      <div className={Styles.mainContainer}>
        {products.map((product) => (
          <div className={Styles.previewBoxes} key={product.id}>
            <img onClick={() => handleImageClick(product)} className={Styles.previewImgs} src={product.image} alt={product.title} />
            <h1>{product.itemPrice}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
