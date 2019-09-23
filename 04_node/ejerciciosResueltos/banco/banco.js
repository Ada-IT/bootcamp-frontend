const operacionesBancarias = require('./operaciones');

const accion = process.argv[2];
const elMonto = process.argv[3];

if (accion === 'total') {
  operacionesBancarias.total();
} else if (accion === 'deposito') {
  operacionesBancarias.guardarMovimiento(elMonto);
} else if (accion === 'extraccion') {
  // guardarMovimiento(elMonto * -1);
  operacionesBancarias.guardarMovimiento(`-${elMonto}`);
} else {
  console.log('le pifiaste a la accion');
}