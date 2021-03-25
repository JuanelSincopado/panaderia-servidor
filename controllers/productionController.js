const Production = require('../models/Production');

exports.crearProduction = async (req, res) => {
	try {
		const production = new Production(req.body);

		await production.save();

		res.json({ msg: 'El producto se creó con exito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al crear' });
	}
};

//produccion en general
exports.obtenerProductions = async (req, res) => {
	try {
		const production = await Production.find();

		res.json({ production });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Hubo un error' });
	}
};

//Produccion por activos
exports.obtenerProductionActive = async (req, res) => {
	try {
		const respuesta = await Production.find({ estado: true});

		res.json({ respuesta });
	} catch (error) {
		console.log(error);

	}
}

//produccion por id
exports.obtenerProduction = async (req, res) => {
	try {
		const production = await Production.findById(req.params.id);

		return res.json({ production });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Hubo un error' });
	}
};


exports.editarProduction = async (req, res) => {
	try {
		//Actualizar masa
		const production = await Production.findByIdAndUpdate(
			{ _id: req.params.id },
			{ $set: req.body },
			{ new: true }
		);

		res.json({ msg: 'Editado con éxito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al editar' });
	}
};

exports.eliminarProduction = async (req, res) => {
	try {
		await Production.findByIdAndDelete({ _id: req.params.id });

		res.json({ msg: 'Eliminado con éxito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al eliminar' });
	}
};
