const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    cedula: {
        type: String,
        required: true,
        trime: true,
        unique: true,
    },
    
    nombre: {
        type: String,
        required: true, 
        trime: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

})

module.exports = mongoose.model("Usuarios", usuariosSchema );
