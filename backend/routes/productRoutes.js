const express = require('express');
const Product = require('../models/Product'); // Importe o modelo Product
const router = express.Router();

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();  // Buscar todos os produtos no banco de dados
    res.json(products);                     // Retornar produtos em formato JSON
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

module.exports = router;
