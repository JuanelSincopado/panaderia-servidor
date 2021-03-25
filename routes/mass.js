const express = require("express");
const router = express.Router();
const massController = require("../controllers/massController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("nombre", "El nombre de la masa es obligatorio").not().isEmpty(),
    check("tipo", "El peso de la masa es obligatorio").not().isEmpty(),
  ],
  massController.crearMasa
);
router.get("/", massController.obtenerMasas);
router.get("/:id", massController.obtenerMasa);
router.put("/:id", massController.editarMasa);
router.delete("/:id", massController.eliminarMasa);

module.exports = router;
