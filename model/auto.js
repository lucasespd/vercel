class Auto {
  nombre = "";
  patente = "";
  precio = 0;

  constructor() {}

  toJson() {
    return JSON.stringify(this);
  }
}

module.exports = Auto;
