const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");
const auth = require("../middleware/auth");

router.post(
    "/",
    check("cedula", "Agregue una cédula válida").not().isEmpty(),
    check("password", "Agregue un password válido").not().isEmpty(),
    authController.autenticarUsuario
);

router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;