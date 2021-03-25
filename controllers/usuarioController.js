const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.nuevoUsuario = async (req, res) => {
  //mostrar mensajes de error de Express-validator
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  //Verificar si el usuario existe
  const { cedula, password } = req.body;

  let usuario = await Usuario.findOne({ cedula });

  if (usuario) {
    return res.status(400).json({ msg: "El usuario ya existe" });
  }

  usuario = new Usuario(req.body);

  //Hashear password
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(password, salt);

  try {
    await usuario.save();

    res.json({ msg: "El usuario ha sido creado Existosamente" });
  } catch (error) {
    console.log(error);
  }
};
