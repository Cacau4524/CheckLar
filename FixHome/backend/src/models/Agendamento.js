const db = require('../config/database');

class Agendamento {
    static async create(agendamentoData) {
        const [result] = await db.execute(
            'INSERT INTO agendamentos (cliente_id, servico_id, prestador_id, data_hora, endereco) VALUES (?, ?, ?, ?, ?)',
            [agendamentoData.cliente_id, agendamentoData.servico_id, agendamentoData.prestador_id, agendamentoData.data_hora, agendamentoData.endereco]
        );
        return result.insertId;
    }

    static async findByCliente(cliente_id) {
        const [rows] = await db.execute(
            'SELECT a.*, s.titulo, u.nome as prestador_nome FROM agendamentos a JOIN servicos s ON a.servico_id = s.id JOIN usuarios u ON a.prestador_id = u.id WHERE a.cliente_id = ?',
            [cliente_id]
        );
        return rows;
    }
}

module.exports = Agendamento;