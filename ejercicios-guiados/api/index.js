let tareas = [];

fetch('http://localhost:4000/api/todos')
  .then(function (res) {
    return res.json();
  })
  .then(function (listaDeTareas) {
    tareas = listaDeTareas;



    const lis = listaDeTareas.map( function (t) {
      return `<li id="${t.id}">
        ${t.texto} <span class="estado">${t.completada}</span>
        <button class="remove">eliminar</button>
        <button onclick="completar(${t.id}, this)"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1024px-Yes_Check_Circle.svg.png" /></button>
        <button onclick="editar(${t.id}, this)"><img src="https://image.flaticon.com/icons/svg/61/61456.svg" /></button>
      </li>`;
    });

    document.querySelector('ul').innerHTML = lis.join('');

    document
      .querySelectorAll('li button.remove')
      .forEach(function (button) {
        button.onclick = eliminar;
      })
  })

function editar (id, button) {
  tareas.forEach(tarea => {
    if (tarea.id === id) {
      document
        .querySelector('#nueva-tarea')
        .value = tarea.texto;
      document
        .querySelector('#nueva-tarea-btn')
        .style.display = 'none';
      document
        .querySelector('#editar-tarea-btn')
        .style.display = 'block';
    }
  })
}

function completar (id, button) {
  console.log(id, button);

  fetch(`http://localhost:4000/api/todos/${id}/complete`, {
    method: 'put'
  })
  .then(res => res.json())
  .then(todo => {
    const li = document
      .getElementById(`${id}`)
    // console.log(li)
    li
      .querySelector(`span.estado`)
      .innerHTML = todo.completada;
  })
}

function eliminar (e) {
  const id = e.target.parentNode.id;

  fetch(`http://localhost:4000/api/todos/${id}`, {
    method: 'delete'
  }).then(res => {
    document.getElementById(id).remove();
  });
}

document
  .querySelector('#nueva-tarea-btn')
  .onclick = function () {
  const texto = document.querySelector('#nueva-tarea').value;

  // { texto: '...', completada: false }

  const todo = {
    texto: texto,
    completada: false
  };

  fetch('http://localhost:4000/api/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  // .then(res => res.json())
  .then(res => {
    // si el servidor no me respondio con un 200
    if (!res.ok) {
      // alert('salio todo mal');
      // throw 'se fue todo al carajo!';
      throw {
        status: res.status,
        message: 'se fue todo el carajo por tu pedido mal armado!'
      };
      // throw new Error('Se fue todo al carajo!');
      // vamos a agregar algo más
    } else {
      return res.json();
    }
  })
  .then(todo => {
    const nuevaTarea = `
      <li id="${todo.id}">
        ${texto} <span>${todo.completada}</span>
        <button>eliminar</button>
      </li>
    `;

    document.querySelector('ul').innerHTML += nuevaTarea;
  })
  .catch( function (err) {
    // console.log(err);
    const cartel = document.querySelector('.notificacion.error');
    cartel.innerHTML = `${err.status}: ${err.message}`;
    cartel.style.display = 'block';
  } );
}