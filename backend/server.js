const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('MongoDB Atlas conectado!'))
.catch((err) => console.error('Erro ao conectar no MongoDB', err));

app.use(express.json());

// Rotas
app.use('/api/products', productRoutes);

// Rota inicial
app.get('/', (req, res) => res.send('API Rodando!'));

// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
