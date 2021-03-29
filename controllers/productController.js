const Product = require('../models/Product');
const { validationResult } = require('express-validator');

exports.crearProducto = async (req, res) => {
	//mostrar mensajes de error de Express-validator
	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}

	try {
		const product = new Product(req.body);

		await product.save();

		res.json({ msg: 'Creado con Éxito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al crear' });
	}
};

exports.obtenerProductos = async (req, res) => {
	try {
		const product = await Product.find();

		res.json({ product });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Hubo un error' });
	}
};

exports.obtenerProducto = async (req, res) => {
	try {
		const producto = await Product.findById(req.params.id);

		res.json({ producto });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Hubo un error' });
	}
};


exports.productoNombre = async (req, res) => {
	try {
		const producto = await Product.find(
			{ tipo: req.params.tipo },
			(error, producto) => {
				if (error) {
					return console.log(error);
				}

				res.json({ producto });
			}
		);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Hubo un error' });
	}
};

exports.editarProducto = async (req, res) => {
	try {
		//Actualizar masa
		const product = await Product.findByIdAndUpdate(
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

exports.eliminarProducto = async (req, res) => {
	try {
		await Product.findByIdAndDelete({ _id: req.params.id });

		res.json({ msg: 'Eliminado con éxito' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Error al eliminar' });
	}
};
