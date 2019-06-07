const express = require('express');
const router = express.Router();

// creo un array, donde voy a ir almacenando las peliculas
// de esta forma la informacion no esta escrita en la web, sino que la guardamos en un servidor, en un lugar central
// y cada vez que entremos a nuestra app web, vamos a poder consultar esa info mediante la API
const movies = [
  { id: 1, title: 'Batman Begins', summary: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.', year: 2005 },
  { id: 2, title: 'The Dark Knight', summary: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.', year: 2008 },
  { id: 3, title: 'The Dark Knight Rises', summary: 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.', year: 2012 }
];

// creo una ruta que devuelve el array de emails
router.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Configuramos la url para que espere un id
// la agregamos antes del module.exports
router.get('/api/movies/:id', (req, res) => {
  const id = req.params.id;

  // Usamos el id para buscar en el array el objeto que tenga ese mismo id
  const movie = movies.find(function (pelicula) {
    return pelicula.id == id;
  });

  // si no encontré ninguna pelicula, le devolvemos un estado 404 not found y un mensaje
  if (!movie) {
    return res.status(404).send(`La pelicula con id ${id} no existe.`);
  }

  // respondemos a quien nos pidio la pelicula con el objeto json que encontramos
  res.json(movie);
});

router.post('/api/movies', (req, res) => {
  // me guardo todas las propiedades que me llegaron desde un cliente
  const title = req.body.title;
  const summary = req.body.summary;
  const year = req.body.year;

  // es necesario que cada película nueva, tenga una propiedad ID, para identificarla univocamente
  // esta propiedad por lo general es numérica
  // para eso, lo que hacemos es buscar al última película, y le sumamos 1 a ese ID
  let nextId = 1;
  if (movies.length > 0) {
    nextId = movies.slice(-1)[0].id;
  }

  // creamos el nuevo objeto a pushear en el array
  const movieToPush = {
    id: nextId,
    title: title,
    summary: summary,
    year: year
  };

  // agregamos la nueva película a nuestro array de películas (que sería nuestra "base de datos")
  movies.push(movieToPush);

  // y le respondemos al cliente con el objeto de la película recién creado
  res.json(movieToPush);
});

router.delete('/api/movies/:id', (req, res) => {
  const id = req.params.id

  // Usamos el id para buscar en el array el objeto que tenga ese mismo id
  const movieIndex = movies.findIndex(function (movie) {
    return movie.id == id
  })

  // si no encontré ninguna pelicula, le devolvemos un estado 404 not found y un mensaje
  if (!movieIndex) {
    return res.status(404).send(`La pelicula con id ${id} no existe.`);
  } else {
    movies.splice(movieIndex, 1);
    // pudimos eliminar la pelicula, le contesto al cliente con el nuevo listado de peliculas
    res.json(movies);
  }
});

module.exports = router