const express = require("express");
const app = express();

// Deshabilitar cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

// Importante para variables de entorno
require("dotenv").config();

// Importante para tomar datos del body!
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Conexión DB
const sequelize = require("../db/sequelize.js");
// const autoSequelize = require("./entity/auto.entity.js");

const relacionarEntidades = require("../entity/relaciones.js");
relacionarEntidades();

// Inicio rutas

const autosRoutes = require("../routes/auto.routes.js");
app.use("/autos", autosRoutes);

const garageRoutes = require("../routes/garage.routes.js");
app.use("/garages", garageRoutes);

// Fin rutas

app.get("/", async (req, res) => {
  sequelize.sync({ force: true });
  res.send("Ruta por defecto");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App started");
});

module.exports = app;
