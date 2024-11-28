const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const GarageSequelize = sequelize.define(
  "Garage",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false, // NOT NULL
    },
    eliminado: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "creado_en",
  }
);

module.exports = GarageSequelize;
