const listaAutos = require("./autos");
const concesionaria = require("./concesionaria");

let auto = concesionaria.buscarAuto("APL123");

//concesionaria.venderAuto("JJK116");
concesionaria.venderAuto("APL123");

autosNuevos = concesionaria.autosNuevos();

console.log(autosNuevos);