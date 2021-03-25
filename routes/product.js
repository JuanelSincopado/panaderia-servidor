const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { check } = require("express-validator");

router.post("/", [
    check("nombre", "El nombre es obligatorio"),
    check("peso", "El peso es obligatorio")
], productController.crearProducto);

router.get("/", productController.obtenerProductos);

router.get("/:id", productController.obtenerProducto);

router.get("/tipo/:tipo", productController.productoNombre);

router.put("/:id", productController.editarProducto);

router.delete("/:id", productController.eliminarProducto);

module.exports = router;