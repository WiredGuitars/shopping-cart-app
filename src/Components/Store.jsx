// Store.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Store = () => {
  
  const location = useLocation();
  const product = location.state ? location.state.product : null;
  
  if (!product){ 
    const defaultProduct = {
    title: 'Default Product',
    description: 'This is the default product description.',
    price: 10, // Set your default price here
    }
    return (
      <div>
        <h2>{defaultProduct.title}</h2>
        <p>{defaultProduct.description}</p>
        <p>Price: ${defaultProduct.price}</p>
        {/* Add purchase options or form for the default product */}
      </div>
    );
  }

 
    
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add purchase options or form here */}
    </div>
  );
};

export default Store;
