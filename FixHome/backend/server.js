const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./src/config/database');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

// Rotas
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/servicos', require('./src/routes/servicos'));
app.use('/api/agendamentos', require('./src/routes/agendamentos'));

// Teste conexão DB
db.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar com MySQL:', err);
        return;
    }
    console.log('✅ MySQL conectado com sucesso!');
    connection.release();
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});