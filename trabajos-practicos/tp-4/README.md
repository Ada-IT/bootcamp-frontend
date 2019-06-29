# TP Node/Express

_Tiempo de entrega: **2 semanas**_

### Enunciado

Se debe crear una aplicación cliente / servidor, __con Express__, con los siguientes requerimientos:

1. Seguir el diseño propuesto en: http://salty-learning.surge.sh/

2. Al renderizar la home, mostrar un listado con los siguientes datos:
    - Nombre
    - Email
    - Dirección
    - Teléfono

    Los datos a mostrar en el listado se deben obtener haciendo un **HTTP GET** a la ruta `/api/users` de nuestro servidor. En esta ruta (en el servidor) es donde se obtendrá y devolverá el array de elementos.

3.  Al hacer click en el botón `Nuevo`, mostrar en un modal  un formulario con los siguientes datos y un botón de guardar:
    * Nombre (Máximo 30 carácteres)
    * Apellido (Máximo 30 carácteres)
    * Telefono (Solo números)
    * Email (Validar el formato utilizando expresiones regulares)

    Al hacer click en el botón guardar, primero se debe validar que los campos sean válidos. En caso afirmativo, hacer un POST a la ruta `/api/users`. En la ruta (en el lado del servidor) se deberán validar los datos nuevamente y guardarlos en el array. En caso que sean incorrectos, responder con un error `400`.

4. El listado de los usuarios debe poder filtrarse. El filtro funciona de la siguiente manera:
    * Se tendrá un solo input text y un botón filtrar
    * Cuando escribimos algo en el input y clickeamos el botón filtrar, tenemos que hacer un GET a la ruta `/api/users` pasando un queryParam `search` con el valor ingresado en el input.
    * En la ruta (en el servidor), con el queryParam `search` que nos llega, vamos a obtener los datos del array y filtramos los objetos en los que el nombre, apellido, telefono o email coincidan con el texto ingresado en search. Finalmente, devolveremos al cliente el listado resultante.

      *Ejemplo:*
      ```js
      // Tenemos el siguiente array de users
      [{
        nombre: 'Ada',
        apellido: 'Lovelace',
        telefono: '1234567890',
        email: 'contacto@gmail.com'
      }, {
        nombre: 'Grace',
        apellido: 'Hopper',
        telefono: '087654321',
        email: 'contacto@hotmail.com'
      }]
      ```
      Si ingresamos en el input la palabra `ada`, el listado resultante va a contener un solo elemento (user Ada Lovelace).

      Si ingresamos la palabra `contacto`, el listado resultante va a tener 2 elementos, ya que cada user tiene en el email la palabra buscada.
    * Una vez que obtuvimos el array, volvemos a renderizar la tabla de users.

5. Cada elemento en la tabla contará la acción eliminar. Al hacer click en eliminar, vamos a mostrar un modal para que la persona confirme si quiere seguir o no con la acción eliminar. En caso afirmativo se debe hacer un **DELETE** a la ruta `/api/users/:id`. En la ruta (el servidor) vamos a eliminar el registro del array. Una vez eliminado del servidor, eliminamos la línea de nuestra web.

6. Cada elemento en la tabla contará la acción editar. Al hacer click en editar, mostrar en un modal un formulario con los mismos campos (y validaciones) que el fomulario nuevo, con todos los datos pre-cargados. Al finalizar la edición, y hacer click en el botón editar, haremos un PUT a la ruta `/api/users/:id`. En la ruta (en el servidor), tenemos que buscar el elemento en el array y modificar la nueva información. Una vez guardado en el servidor, volvemos a actualizar el listado de nuestra web.

### **Fuente**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"/>
```

```css
font-family: 'Varela Round', sans-serif;
```

### **Iconos**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

- Editar: `<i class="material-icons" title="Edit">&#xE254;</i>`
- Borrar: `<i class="material-icons" title="Delete">&#xE872;</i>`
- Nuevo: `<i class="material-icons">&#xE147;</i>`