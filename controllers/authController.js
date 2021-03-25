const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

exports.autenticarUsuario = async (req, res, next) => {
  //mostrar mensajes de error de Express-validator
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { cedula, password } = req.body;

  const usuario = await Usuario.findOne({ cedula });

  if (!usuario) {
    res.status(401).json({ msg: "El usuario no existe" });
    return next();
  }

  //Verificar que el password sea correcto
  if (bcrypt.compareSync(password, usuario.password)) {
    //Crear jwt

    const token = jwt.sign(
      {
        id: usuario._id,
        nombre: usuario.nombre,
        cedula: usuario.cedula
      },
      "secreta",
      {
        expiresIn: "3h",
      }
    );
    res.json({ token });
  } else {
    res.status(401).json({ msg: "Password Incorrecto" });
    return next();
  }
};

exports.usuarioAutenticado = (req, res, next) => {
  
  res.json({usuario: req.usuario});
};
