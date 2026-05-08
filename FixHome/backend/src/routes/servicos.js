const express = require('express');
const servicosController = require('../controllers/servicosController');
const router = express.Router();

router.get('/', servicosController.listar);
router.post('/', servicosController.criar);

module.exports = router;