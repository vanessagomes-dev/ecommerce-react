const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
  try {
    console.log('Tentando buscar produtos...'); // Log para depuração
    const products = await Product.find();  // Buscar todos os produtos no banco de dados
    console.log('Produtos encontrados:', products); // Log para depuração
    res.json(products);                     // Retornar produtos em formato JSON
  } catch (error) {
    console.error('Erro ao buscar produtos:', error); // Log do erro
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

// Rota para criar um novo produto
router.post('/', async (req, res) => {
  const { name, description, price, stock, imageUrl } = req.body;

  try {
    // Criar um novo produto com os dados recebidos
    const product = new Product({
      name,
      description,
      price,
      stock,
      imageUrl,
    });
    
    const savedProduct = await product.save();
    res.status(201).json(savedProduct); // Retorna o produto criado
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ message: 'Erro ao criar produto' });
  }
});

module.exports = router;


