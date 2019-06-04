// fs: file system
// path: manejo de las rutas de archivos y carpetas
// http: nos permite crear servidores web

const fs = require('fs');
const path = require('path');

// ./texto.txt
// console.log(__dirname + '/texto.txt');
// __dirname y __filename
const filename = path.join(__dirname, 'texto.txt');
// callback

fs.readFile(filename, function (err, data) {
  console.log(err);
  console.log( data.toString() );
});

fs.writeFile(filename, 'adios mundo cruel', function (err) {
  if (err) {
    console.log('salio todo mal');
  } else {
    console.log('todo bien');
  }
});