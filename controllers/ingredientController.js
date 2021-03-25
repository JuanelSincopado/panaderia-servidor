const Ingredient = require('../models/Ingredient');

exports.crearIngredientes = async (req, res) => {
	try {
		const ingredient = new Ingredient(req.body);

		await ingredient.save();

		res.json({ msg: 'El ingrediente se creó con exito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al crear' });
	}
};

exports.obtenerIngredientes = async (req, res) => {
	try {
		const ingredient = await Ingredient.find();

		res.json({ ingredient });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Hubo un error' });
	}
};

exports.editarIngrediente = async (req, res) => {
	try {
		//Actualizar masa
		const ingredient = await Ingredient.findByIdAndUpdate(
			{ _id: req.params.id },
			{ $set: req.body },
			{ new: true }
		);

		res.json({ ingredient });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al editar' });
	}
};

exports.eliminarIngrediente = async (req, res) => {
	try {
		await Ingredient.findByIdAndDelete({ _id: req.params.id });

		res.json({ msg: 'Eliminado con éxito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al eliminar' });
	}
};