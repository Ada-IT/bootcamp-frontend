const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'bank.txt');

function total () {
  fs.readFile(filename, function (err, data) {
    const extractos = data.toString().split(",");
    // console.log(extractos);
    let saldo = 0;
    for (let i = 0; i < extractos.length; i++) {
      // if (extractos[i] != '') { PARCHE
        const valor = parseInt(extractos[i]);
        saldo = saldo + valor;
      // }
    }

    console.log('tu saldo es ' + saldo);
  });
}

function guardarMovimiento (monto) {
  // fs.appendFile del nuevo monto
  // fs.appendFile(filename, `, ${monto}`, function (err) {
  //   if (err) {
  //     console.log('exploto todo');
  //     return;
  //   }

  //   console.log('todo bien!')
  // });

  fs.readFile(filename, function (err, data) {
    let extractos = data.toString();
    extractos += extractos !== '' ? `, ${monto}` : monto;

    fs.writeFile(filename, extractos, function (err) {
      if (err) {
        console.log('exploto todo');
        return;
      }

      console.log('todo bien!')
    });
  });
}

module.exports = {
  total: total,
  guardarMovimiento: guardarMovimiento
};