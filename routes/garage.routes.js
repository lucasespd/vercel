const express = require("express");
const router = express.Router();
const Garage = require("../entity/garage.entity.js");
const Auto = require("../entity/auto.entity.js");
const sequelize = require("../db/sequelize.js");

router.post("/", async (req, res) => {
  const nombre = req.body.nombre;

  const resultado = await Garage.create({
    nombre: nombre,
  });

  res.send(resultado);
});

router.post("/garageYAuto", async (req, res) => {
  const nombre = req.body.nombre;

  const resultado = await Garage.create({
    nombre: nombre,
  });

  const garageId = resultado.id;

  const resultadoAuto = await Auto.create({
    GarageId: garageId,
  });

  res.send(resultadoAuto);
});

router.get("/traerPorNombre", async (req, res) => {
  //  const respuesta = await Garage.findOne({ where: { nombre: "x"} });
  const [respuesta, metadata] = await sequelize.query(
    "SELECT * FROM garages WHERE nombre = 'Garage de Agus' LIMIT 1"
  );

  res.send(respuesta[0]);
});

module.exports = router;
