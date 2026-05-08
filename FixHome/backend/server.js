const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.get('/servicos', (req, res) => {

    const sql = 'SELECT * FROM servicos';

    db.query(sql, (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.json(result);
        }

    });

});

app.post('/usuarios', (req, res) => {

    const { nome, email, senha } = req.body;

    const sql = `
        INSERT INTO usuarios(nome, email, senha)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [nome, email, senha], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send('Usuário cadastrado');
        }

    });

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});