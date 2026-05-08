const express = require('express');
const router = express.Router();
const db = require('../db');

    router.post('/', (req, res) => {

    const { nome, descricao, preco } = req.body;

    const sql = `
        INSERT INTO servicos(nome, descricao, preco)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [nome, descricao, preco], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send('Serviço cadastrado');
        }

    });

});

router.put('/:id', (req, res) => {

    const { id } = req.params;
    const { nome, descricao, preco } = req.body;

    const sql = `
        UPDATE servicos
        SET nome = ?, descricao = ?, preco = ?
        WHERE id = ?
    `;

    db.query(sql, [nome, descricao, preco, id], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send('Serviço atualizado');
        }

    });

});

router.delete('/:id', (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM servicos WHERE id = ?';

    db.query(sql, [id], (err, result) => {

        if(err){
            res.send(err);
        } else {
            res.send('Serviço removido');
        }

    });

});

module.exports = router;