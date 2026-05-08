const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {

    const sql = 'SELECT * FROM usuarios';

    db.query(sql, (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.json(result);
        }

    });

});

router.post('/', (req, res) => {

    const { nome, email, senha } = req.body;

    const sql = `
        INSERT INTO usuarios(nome, email, senha)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [nome, email, senha], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send('Usuário cadastrado com sucesso');
        }

    });

});

router.delete('/:id', (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM usuarios WHERE id = ?';

    db.query(sql, [id], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send('Usuário removido');
        }

    });

});

module.exports = router;