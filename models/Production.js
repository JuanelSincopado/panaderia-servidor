const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        trim: true,
        require: true
    },
    productos: [{
        type: mongoose.Schema.Types.Map
    }],
    pesoTotal: {
        type: Number,
        required: true,
    },
    estado: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model("production", productionSchema);