const listaAutos = require("./autos");

let concesionaria = {
    autos: listaAutos,

    buscarAuto: function(patente) {
        for(let i=0; i<listaAutos.length;i++){
            if(listaAutos[i].patente === patente)
                return listaAutos[i];
            else return null;
        }
    },

    venderAuto: function(patente) {
        if(this.buscarAuto(patente)!=null){
            listaAutos[0].vendido = true;
        }
    }
};

module.exports = concesionaria;