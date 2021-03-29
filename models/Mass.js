const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const massSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    harina: {
      type: mongoose.Schema.Types.Map
    },
    ingredientes: [
        {
            type: mongoose.Schema.Types.Map,
        },
    ],  
    tipo: {
        type: String,
        trim: true,
        required: true,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    produccion: {
      type: mongoose.Schema.Types.Map
    },
    pesoMasa: {
      type: Number,
      required: true
    }
});

module.exports = mongoose.model("mass", massSchema);
