const listaAutos = require("./autos");
const concesionaria = require("./concesionaria");

let auto = concesionaria.buscarAuto("APL123");

concesionaria.venderAuto("APL123");

console.log(auto);