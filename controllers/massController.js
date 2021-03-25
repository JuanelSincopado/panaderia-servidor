const { validationResult } = require('express-validator');
const Mass = require('../models/Mass');

exports.crearMasa = async (req, res) => {
	//mostrar mensajes de error de Express-validator
	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}

	console.log(req.body);
	try {
		const mass = new Mass(req.body);

		await mass.save();

		res.json({ msg: 'La masa se creó con exito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al crear' });
	}
};

exports.obtenerMasas = async (req, res) => {
	try {
		const masas = await Mass.find();

		res.json({ masas });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Hubo un error' });
	}
};

exports.obtenerMasa = async (req, res) => {
	try {
		const masas = await Mass.findById(req.params.id);

		res.json({ masas });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Hubo un error' });
	}
};

exports.editarMasa = async (req, res) => {
	try {
		//Actualizar masa
		const masses = await Mass.findByIdAndUpdate(
			{ _id: req.params.id },
			{ $set: req.body },
			{ new: true }
		);

		res.json({ masses });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al editar' });
	}
};

exports.eliminarMasa = async (req, res) => {
	try {
		await Mass.findByIdAndDelete({ _id: req.params.id });

		res.json({ msg: 'Eliminado con éxito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al eliminar' });
	}
};
