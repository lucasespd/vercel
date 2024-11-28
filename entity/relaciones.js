const Auto = require("./auto.entity");
const Garage = require("./garage.entity");

// UN GARAGE MUCHOS AUTOS
function relacionarEntidades() {
  Garage.hasMany(Auto); // Tiene MUCHOS autos
  Auto.belongsTo(Garage); // Pertenece a UN garage
}

module.exports = relacionarEntidades;

// UN GARAGE UN AUTO
/*
Garage.hasOne(Auto);
Auto.belongsTo(Garage);
*/

// MUCHOS GARAGE MUCHOS AUTOS
/*
Garage.hasMany(Auto);
Auto.belongsToMany(Garage);
*/
