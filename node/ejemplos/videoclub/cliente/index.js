const makeMovie = movie => {
  return `
    <div class="movie" id="${movie.id}">
      <span class="title">${movie.title}</span>
      <span class="year">${movie.year}</span>

      <button class="trigger-view">Ver detalle</button>
      <button class="trigger-delete">Eliminar</button>
    </div>
  `;
}

const addMovie = movie => {
  document.querySelector('#movies').innerHTML += makeMovie(movie);
}

fetch('http://localhost:3000/api/movies')
  .then(res => res.json())
  .then(function (movies) {
    // el parametro respuesta es lo que nos contesta el servidor (en este caso el array de las peliculas)
    movies.forEach((movie) => {
      addMovie(movie);
    });

    configureEvents();
  });

const configureEvents = () => {
  // configuro el boton para abril el modal con la información de la pelicula
  const triggersEdit = document.querySelectorAll(".trigger-view");
  triggersEdit.forEach(trigger => trigger.addEventListener("click", openModal));

  // configuro el boton para eliminar una pelicula
  const triggersDelete = document.querySelectorAll(".trigger-delete");
  triggersDelete.forEach(trigger => trigger.addEventListener("click", deleteMovie));
}

// esta función la ejecutamos cuando hacemos click en el boton para ver el detalle de una película
const openModal = e => {
  // buscamos el id de la película, que lo dejamos en un atributo del elemento
  const movieId = e.target.closest('.movie').id;

  // hacemos un pedido a la API para traernos los datos específicos de esa película
  fetch(`http://localhost:3000/api/movies/${movieId}`)
    .then(res => res.json())
    .then(movie => {
      // modificas todos los elementos del modal con la información de la película
      document.querySelector('.modal .title').innerText = movie.title;
      document.querySelector('.modal .summary').innerText = movie.summary;
      document.querySelector('.modal .year').innerText = movie.year;

      // muestro el modal
      toggleModal();
    });
}

const saveMovie = () => {
  // obtenemos todos los datos de los inputs en el html
  const title = document.querySelector('input[name="title"]').value;
  const summary = document.querySelector('textarea[name="summary"]').value;
  const year = document.querySelector('input[name="year"]').value;

  // creamos el objeto que estamos creando y le vamos a mandar al servidor para que guarde
  const newMovie = {
    title: title,
    summary: summary,
    year: year
  }

  // finalmente, con ajax, le enviamos un HTTP POST al servidor para que guarde el objeto
  // y le pasamos como data el nuevo objeto
  fetch('http://localhost:3000/api/movies', {
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMovie)
  })
  .then(res => res.json())
  .then(newMovie => {
    // agrego la película al DOM
    addMovie(newMovie);
    // configuro el onclick del modal
    configureModals();
  })
}

const saveButton = document.querySelector("#new-movie button");
saveButton.addEventListener('click', saveMovie);

const deleteMovie = e => {
  const movieId = e.target.closest('.movie').id;

  fetch(`http://localhost:3000/api/movies/${movieId}`, {
    method: 'delete',
  });

  e.target.closest('.movie').remove();
}

// configuro el botón para cerrar el modal
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", toggleModal);

// esta función muestra/oculta el modal
const toggleModal = () => document.querySelector(".modal").classList.toggle("show-modal");