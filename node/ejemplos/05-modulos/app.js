// el ./ es importante porque es un modulo propio
// el .js es optativo

// este require retorna un objeto con funciones
const calculadora = require('./operaciones.js');
// este require retorna una funcion
const log = require('./funcion');
// este require retorna un objeto con datos
const datos = require('./constantes');

log( datos.apiKey ); // --> 123-asd-456-fgh
log( calculadora.sumar(2,3) ); // --> 5
log( calculadora.multiplicar(3,5) ); // --> 15