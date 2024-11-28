const express = require("express");
const router = express.Router();
const Auto = require("../model/auto.js");
const AutoSequelize = require("../entity/auto.entity.js");

router.post("/", async (req, res) => {
  const nombre = req.body.nombre;
  const patente = req.body.patente;
  const precio = req.body.precio;
  const garageId = req.body.garageId;

  const auto = new Auto();
  auto.nombre = nombre;
  auto.patente = patente;
  auto.precio = precio;

  const resultado = await AutoSequelize.create({
    ...auto,
    GarageId: garageId,
  });

  res.send(resultado);
});

router.get("/", async (req, res) => {
  const resultado = await AutoSequelize.findAll({
    where: { eliminado: false },
  });
  res.send(resultado);
});

router.get("/:id", async (req, res) => {
  // const resultado = await AutoSequelize.findByPk(req.params.id);
  /*
  if(resultado.eliminado){
    // está elimado!
  }
  */
  const resultado = await AutoSequelize.findOne({
    where: { id: req.params.id, eliminado: false },
  });
  res.send(resultado);
});

router.put("/:id", async (req, res) => {
  const resultado = await AutoSequelize.update(
    {
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
        eliminado: false,
      },
    }
  );
  res.send(resultado);
});

// Baja total
/*
router.delete("/:id", async (req, res) => {
  const resultado = AutoSequelize.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send(resultado);
});
*/
// Baja lógica
router.delete("/:id", async (req, res) => {
  const resultado = AutoSequelize.update(
    { eliminado: true },
    { where: { id: req.params.id } }
  );
  res.send(resultado);
});

module.exports = router;
