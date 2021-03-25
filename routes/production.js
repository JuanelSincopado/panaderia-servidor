const express = require('express');
const router = express.Router();
const productionController = require('../controllers/productionController');
const { check } = require('express-validator');

router.post(
	'/',
	[
		check('nombre', 'El nombre es obligatorio'),
		check('peso', 'El peso es obligatorio'),
	],
	productionController.crearProduction
);

router.get('/', productionController.obtenerProductions);

router.get('/activos', productionController.obtenerProductionActive);

router.get('/:id', productionController.obtenerProduction);


router.put('/:id', productionController.editarProduction);

router.delete('/:id', productionController.eliminarProduction);

module.exports = router;
