const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
    nombre: {
        type: String,
        trime: true,
        require: true
    }
});

module.exports = mongoose.model("ingredient", ingredientSchema);