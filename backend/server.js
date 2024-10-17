const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Carregar variáveis de ambiente do arquivo .env
const app = express();
const PORT = process.env.PORT || 5000;

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.error('Erro ao conectar no MongoDB', err));


// Rota inicial de teste
app.get('/', (req, res) => res.send('API Rodando!'));

// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
