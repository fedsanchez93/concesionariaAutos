const listaAutos = require("./autos");
const concesionaria = require("./concesionaria");
const persona = require("./persona");

let auto = concesionaria.buscarAuto("JJK116");

//concesionaria.venderAuto("JJK116");
//concesionaria.venderAuto("APL123");

console.log(concesionaria.puedeComprar(auto,persona));