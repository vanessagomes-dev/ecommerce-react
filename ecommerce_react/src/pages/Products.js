import React from 'react';
import ProductList from '../components/ProductList';

function Products() {
  // Lista de produtos
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of product 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description of product 3', price: 300 }
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Products;
