const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('MongoDB Atlas conectado!'))
.catch((err) => console.error('Erro ao conectar no MongoDB', err));

app.use(express.json());

// Importa e usa as rotas de produtos
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
