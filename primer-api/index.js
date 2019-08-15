const express = require('express');
const cors = require('cors');

// CORS
// http://localhost:4000/api/todos

const todos = [
  { id: 1, texto: 'tarea 1', completada: false },
  { id: 2, texto: 'tarea 2', completada: true },
  { id: 3, texto: 'tarea 3', completada: false }
];

let ID = 4;

// crear el servidor de express
const app = express();
app.use( cors() );

app.use( express.json() );

app.get('/api/todos', function (req, res) {
  // res.send(todos);
  res.json(todos);
});


// http://localhost:4000/api/todos/1
// http://localhost:4000/api/todos/2
// http://localhost:4000/api/todos/3

app.delete('/api/todos/:todoId', function (req, res) {
  console.log(req.params.todoId);
  const id = parseInt(req.params.todoId);

  // todos = todos.filter(todo => todo.id !== id)
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1);
    }
  }

  res.json(todos);
});

app.post('/api/todos', function (req, res) {
  // obtener los datos que me llegaron del cliente
  const nuevoTodo = req.body;

  // nuevoTodo es el objeto que me llega de la web
  // { texto: '..', completada: false }
  // validar que el texto no esté vacio, no sean espacios y/o no sean solo números
  // validar que tenga las propiedades texto y completada
  // validar que solo tenga las props que necesito (texto y completada)

  // si no existe la propiedad texto de nuevoTodo
  // O
  // si la propiedad texto es un string vacio
  if (!nuevoTodo.texto || nuevoTodo.texto.trim().length === 0) {
    // un aviso
    // un res
    // return
    // return res.status(400).end();
    return res.status(400).send('salió todo mal');
  }

  nuevoTodo.id = ID++;

  // pushear esos datos al array
  todos.push(nuevoTodo);

  res.json(nuevoTodo);
});

app.put('/api/todos/:todoId/complete', function (req, res) {
  const id = req.params.todoId;

  todos.forEach(function (todo) {
    if (id == todo.id) {
      todo.completada = true;
      return res.json(todo);
    }
  });
});

app.put('/api/todos/:id', function (req, res) {
  const todoId = req.params.id;
  const todoEditado = req.body; // pueden no llegar todas las propiedades del obj

  // si no existe la propiedad texto de nuevoTodo
  // O
  // si la propiedad texto es un string vacio
  if (!todoEditado.texto || todoEditado.texto.trim().length === 0) {
    // un aviso
    // un res
    // return
    // return res.status(400).end();
    return res.status(400).send('salió todo mal');
  }

  todos.forEach(function (todo) {
    if (todoId == todo.id) {
      todo.texto = todoEditado.texto;
      todo.completada = todoEditado.completada;

      return res.json(todo);
    }
  });
});

app.listen(4000);