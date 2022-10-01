function Persona(nombre, capacidadDePagoEnCuotas, capacidadDePagoTotal){
    this.nombre = nombre;
    this.capacidadDePagoEnCuotas = capacidadDePagoEnCuotas;
    this.capacidadDePagoTotal = capacidadDePagoTotal;
}

let persona = new Persona("Juan",20000,100000);

module.exports = persona;