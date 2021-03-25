const mongoose = require("mongoose");
// require("dotenv").config({ path: "varibles.env" }); mongoose.connect resive un string como primer parámetro, no acepta variables.env

const conectarDB = async () => {

    try {
        await mongoose.connect( 'mongodb://localhost:27017/panaderia', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });   
        
        console.log("DB conectada");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;