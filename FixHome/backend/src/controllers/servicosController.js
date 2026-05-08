const Servico = require('../models/Servico');

exports.listar = async (req, res) => {
    try {
        const servicos = await Servico.findAll();
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao listar serviços' });
    }
};

exports.criar = async (req, res) => {
    try {
        const servicoId = await Servico.create(req.body);
        res.status(201).json({ mensagem: 'Serviço criado!', id: servicoId });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao criar serviço' });
    }
};