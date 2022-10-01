const listaAutos = require("./autos");

let concesionaria = {
    autos: listaAutos,

    buscarAuto: function(patente) {
        for(let i=0; i<this.autos.length;i++){
            if(this.autos[i].patente === patente){
                return this.autos[i];
            }  
        } return null;
    },

    venderAuto: function(patente) {
        if(this.buscarAuto(patente)!=null){
            this.buscarAuto(patente).vendido = true;
        }
    },

    autosParaLaVenta: function() {
        return listaAutos.filter((auto) => auto.vendido==false);
    },

    autosNuevos: function() {
       return this.autosParaLaVenta().filter((auto) => auto.km < 100);
    },

    listaDeVentas: function() {
        let autosVendidos = listaAutos.filter((auto) => auto.vendido==true);
        return autosVendidos.map((auto) => auto.precio);
    }

    
};

module.exports = concesionaria;