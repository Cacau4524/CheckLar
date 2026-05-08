const db = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
    static async create(userData) {
        const hashedPassword = await bcrypt.hash(userData.senha, 10);
        const [result] = await db.execute(
            'INSERT INTO usuarios (nome, email, senha, telefone, tipo) VALUES (?, ?, ?, ?, ?)',
            [userData.nome, userData.email, hashedPassword, userData.telefone, userData.tipo]
        );
        return result.insertId;
    }

    static async findByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
        return rows[0];
    }

    static async verifyPassword(email, senha) {
        const user = await this.findByEmail(email);
        if (!user) return false;
        return bcrypt.compare(senha, user.senha);
    }
}

module.exports = User;