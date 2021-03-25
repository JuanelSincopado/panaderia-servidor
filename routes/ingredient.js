const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");

router.post( "/", ingredientController.crearIngredientes );
router.get( "/", ingredientController.obtenerIngredientes );
router.put("/:id", ingredientController.editarIngrediente );
router.delete("/:id", ingredientController.eliminarIngrediente);

module.exports = router;