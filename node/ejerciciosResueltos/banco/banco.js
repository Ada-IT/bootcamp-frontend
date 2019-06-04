const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'bank.txt');

function total () {
  fs.readFile(filename, function (err, data) {
    const extractos = data.toString().split(",");
    // console.log(extractos);
    let saldo = 0;
    for (let i = 0; i < extractos.length; i++) {
      const valor = parseInt(extractos[i]);
      saldo = saldo + valor;
    }

    console.log('tu saldo es ' + saldo);
  });
}

function deposito (monto) {
  // fs.appendFile del nuevo monto


  // fs.readFile
  //      let elStringDeLosMovimientos
  //      concatenamos el nuevo monto
  //      fs.writeFile de elStringDeLosMovimientos mas el nuevo monto
}

const accion = process.argv[2];
const elMonto = process.argv[3];

if (accion === 'total') {
  total();
}
if (accion === 'deposito') {
  deposito(elMonto);
}