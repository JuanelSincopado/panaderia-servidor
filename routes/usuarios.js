  const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("cedula", "La cédula es obligatoria").not().isEmpty(),
    check("password", "El password debe ser mínimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  usuarioController.nuevoUsuario
);

module.exports = router;
