const express = require('express');
const conectarDB = require("./config/db");
const cors = require("cors");
process.env.TZ = 'America/Caracas';

const app = express();

conectarDB();

//Habilitar cors
app.use(cors());

const port = process.env.PORT || 4000;

//Leer valores desde un body
app.use(express.json());


//Puertos API
app.use("/usuarios", require("./routes/usuarios"));
app.use("/auth", require("./routes/auth"));
app.use("/mass", require("./routes/mass"));
app.use("/product", require("./routes/product"));
app.use("/production", require("./routes/production"));
app.use("/ingredient", require("./routes/ingredient"));

app.listen(port, '0.0.0.0', () => {
    console.log(`Corriendo en el puerto ${port}`);
})