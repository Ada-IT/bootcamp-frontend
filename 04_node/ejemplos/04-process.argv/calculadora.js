// INSTRUCCIONES
// para ejecutar este proceso, tenemos que escribir en la consola:
// node calculadora sumar 2 3
// node calculadora restar 2 3
// node calculadora multiplicar 2 3
// node calculadora dividir 2 3

// el elemento 0 es node
console.log(process.argv[0]);
// el elemento 1 es el nombre de aplicación calculadora.js
console.log(process.argv[1]);

const operacion = process.argv[2];
const a = parseInt(process.argv[3]);
const b = parseInt(process.argv[4]);

switch (operacion) {
  case 'sumar':
    console.log( a + b );
    break;
  case 'restar':
    console.log( a - b );
    break;
  case 'dividir':
    console.log( a / b );
    break;
  case 'multiplicar':
    console.log( a * b );
    break;
  default:
    console.log('Para utilizar la calculadora tenés que escribir:');
    console.log('node calculadora [OPERACION] [NUMERO] [NUMERO]');
    console.log('');
    console.log('[OPERACION] puede ser sumar, restar, multiplicar o dividir');
    console.log('[NUMERO] puede ser un número cualquiera');
}

