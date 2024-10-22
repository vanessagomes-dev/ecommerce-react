import React from 'react';
import Navbar from './components/Navbar';   // Importe a Navbar, se houver
import ProductList from './components/ProductList'; // Importe a lista de produtos

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Bem-vindo ao E-commerce!</h1>
      <ProductList /> {/* Renderiza a lista de produtos */}
    </div>
  );
}

export default App;

