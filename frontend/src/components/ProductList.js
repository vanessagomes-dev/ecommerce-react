import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importando axios para fazer a requisição HTTP

const ProductList = () => {
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null);     // Estado de erro

  // Função para buscar os produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products'); // Requisição ao backend
        setProducts(response.data); // Armazena os produtos no estado
        setLoading(false);          // Finaliza o carregamento
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setError('Erro ao carregar produtos');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // O [] faz o useEffect rodar apenas uma vez após o primeiro render

  // Renderizando o conteúdo baseado no estado
  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
