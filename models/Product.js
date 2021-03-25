const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    peso: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("product", productSchema);