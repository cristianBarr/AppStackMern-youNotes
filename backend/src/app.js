//el codigo del servidor o del framework
const express = require("express");
const cors = require("cors");
const app = express();

/*settings--> configuracion de servidor, 
nombre, motor de plantilla, puesto definido--> 
variables que toda nuestra aplicacion puede 
tener acceso */
app.set("port", process.env.PORT || 4000);

/*middlewares -> funciones que se ejecutan antes de
 que lleguen a las rutas o url*/
app.use(cors());
app.use(express.json());

/*routes --> definimos url que el usuario va a poder visitar */
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
