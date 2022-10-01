const listaAutos = require("./autos");

function Concesionaria(){
    this.autos = listaAutos;
}

const concesionaria = new Concesionaria();

module.exports = concesionaria;