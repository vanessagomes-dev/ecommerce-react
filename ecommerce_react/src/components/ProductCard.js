import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
  );
}

export default ProductCard;
