//Respuesta 1:
//Se usa let cuando una variable puede cambiar, mientras que const se usa cuando una variable no puede cambiar.

//Respuesta 2:
//El error es que se esta intentando reasignar un valor a una variable que es const, cuando debio ser asiganada con let si se quiera cambiar despues, el codigo correcto seria:

let puntosDeVida = 100;
console.log("Puntos iniciales:", puntosDeVida);

puntosDeVida = 80;
console.log("Puntos tras el ataque:", puntosDeVida);

//Respuesta 3:
const nombredemascota = "Terry";
let edad = 5;
let dormido = true;

console.log(nombredemascota, edad, dormido);

console.log(typeof dormido);