// importo el modulo de express
const express = require('express');
// creamos una nueva instancia de nuestro servidor
const app = express();

// configuramos un endpoint HTTP GET con la URL /productos
app.get('/productos', (req, res) => {
  res.send('Mostramos una lista de productos');
});

// configuramos un endpoint HTTP POST con la URL /productos
app.post('/productos', (req, res) => {
  res.send('Creamos un Producto');
});

// configuramos un endpoint HTTP PUT con la URL /productos/:id
// el :id es un parametro de la ruta
app.put('/productos/:id', (req, res) => {
  res.send('Actualizamos un Producto');
});

// configuramos un endpoint HTTP DELETE con la URL /productos/:id
// el :id es un parametro de la ruta
app.delete('/productos/:id', (req, res) => {
  res.send('Borramos un Producto');
});

// ponemos el servidor a la escucha
app.listen(3000, () => console.log('servidor a la escucha en el puerto 3000'));