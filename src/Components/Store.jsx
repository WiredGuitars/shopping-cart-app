// Store.jsx
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Store = () => {
  const location = useLocation();
  const product = location.state.product;
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
