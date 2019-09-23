const calc = require('./operaciones');

const a = parseInt(process.argv[3]);
const b = parseInt(process.argv[4]);

switch (process.argv[2]) {
  case 'sumar':
    console.log( calc.sumar(a, b) );
    break;
  case 'restar':
    console.log( calc.restar(a, b) );
    break;
  case 'dividir':
    console.log( calc.dividir(a, b) );
    break;
  case 'multiplicar':
    console.log( calc.multiplicar(a, b) );
    break;
}

// console.log( calc.sumar(2, 3) ); // 5
// console.log( calc.restar(2, 3) ); // -1
// console.log( calc.dividir(4, 2) ); // 2
// console.log( calc.multiplicar(2, 3) ); // 6
// console.log( calc.dividir(4, 0) ); // no se puede dividir por cero
