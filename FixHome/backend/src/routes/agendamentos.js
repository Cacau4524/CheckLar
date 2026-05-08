const express = require('express');
const agendamentosController = require('../controllers/agendamentosController');
const router = express.Router();

router.post('/', agendamentosController.criar);
router.get('/meus', agendamentosController.listarCliente);

module.exports = router;