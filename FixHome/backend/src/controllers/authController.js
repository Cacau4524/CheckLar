const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.cadastro = async (req, res) => {
    try {
        const { nome, email, senha, telefone, tipo } = req.body;
        
        const userExists = await User.findByEmail(email);
        if (userExists) {
            return res.status(400).json({ erro: 'Email já cadastrado' });
        }

        const userId = await User.create({ nome, email, senha, telefone, tipo });
        res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', id: userId });
    } catch (error) {
        res.status(500).json({ erro: 'Erro no cadastro' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        
        const isValid = await User.verifyPassword(email, senha);
        if (!isValid) {
            return res.status(401).json({ erro: 'Credenciais inválidas' });
        }

        const user = await User.findByEmail(email);
        const token = jwt.sign({ id: user.id, tipo: user.tipo }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({
            token,
            usuario: { id: user.id, nome: user.nome, tipo: user.tipo }
        });
    } catch (error) {
        res.status(500).json({ erro: 'Erro no login' });
    }
};