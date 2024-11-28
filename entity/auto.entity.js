const sequelize = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const AutoSequelize = sequelize.define(
  "Auto",
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
    patente: {
      type: DataTypes.STRING,
      allowNull: false, // NOT NULL
    },
    precio: {
      type: DataTypes.FLOAT,
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

module.exports = AutoSequelize;
