const db = require('../config/database');

class Servico {
    static async findAll() {
        const [rows] = await db.execute(`
            SELECT s.*, u.nome as prestador_nome 
            FROM servicos s 
            LEFT JOIN usuarios u ON s.prestador_id = u.id
        `);
        return rows;
    }

    static async create(servicoData) {
        const [result] = await db.execute(
            'INSERT INTO servicos (titulo, descricao, preco, categoria, prestador_id) VALUES (?, ?, ?, ?, ?)',
            [servicoData.titulo, servicoData.descricao, servicoData.preco, servicoData.categoria, servicoData.prestador_id]
        );
        return result.insertId;
    }
}

module.exports = Servico;