const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
    const authHeader = req.get("Authorization");

  if(authHeader){
    //Obtener el Token
    const token = authHeader.split(" ")[1];

    //Comprobar el JWT
    try {
      const usuario = jwt.verify(token, "secreta");
      req.usuario = usuario;
    } catch (error) {
      console.log(error);
      console.log("JWT no válido");
    }
    
  } 
    return next();
}