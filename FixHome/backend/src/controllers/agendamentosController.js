const Agendamento = require('../models/Agendamento');

exports.criar = async (req, res) => {
    try {
        const agendamentoId = await Agendamento.create(req.body);
        res.status(201).json({ mensagem: 'Agendamento criado!', id: agendamentoId });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao criar agendamento' });
    }
};

exports.listarCliente = async (req, res) => {
    try {
        const agendamentos = await Agendamento.findByCliente(req.userId);
        res.json(agendamentos);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao listar agendamentos' });
    }
};