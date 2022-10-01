const listaAutos = require("./autos");

let concesionaria = {
    autos: listaAutos,

    buscarAuto: function(patente) {
        for(let i=0; i<listaAutos.length;i++){
            if(listaAutos[i].patente === patente)
                return listaAutos[i];
            else return null;
        }
    }
};

module.exports = concesionaria;