# TP JavaScript 2: ABM (alta-baja-modificación) de Personas

## ⚙️ **Ejercicio**

- Se debe crear una aplicación web con los siguientes requerimientos:

1. Respetar el diseño propuesto en: https://ada-tp-js-2.surge.sh/


2. La URL de la API a utilizar es: https://tp-js-2-api-wjfqxquokl.now.sh

    Los endpoints que permite la misma son:

    - **`GET /users?search=:q`**

      Retorna un array de personas guardadas en el servidor. Las mismas se pueden filtrar utilizando el queryParam search


    - **`POST /users`**

      Crea un nuevo registro en el servidor. Si la operación terminó satisfactoriamente, devuelve el nuevo registro creado.

    - **`PUT /users/:id`**

      Modifica los datos del usuario. El parámetro :id es la propiedad id del registro que queremos modificar.

    - **`DELETE /users/:id`**

      Elimina un registro de la base de datos. El parámetro :id es la propiedad id del registro que queremos eliminar.


3. Al renderizar la web, mostrar un listado con los siguientes datos:
    - Nombre
    - Email
    - Dirección
    - Teléfono

    Los datos a mostrar en el listado se deben obtener haciendo un HTTP GET a la ruta `/users` de nuestro servidor. En esta ruta es donde se obtendrá y devolverá el array de elementos.

4. Al hacer click en el botón `Nuevo`, mostrar en un modal un formulario con los siguientes datos y un botón de guardar:
    - Nombre (Máximo 50 carácteres)
    - Dirección (Máximo 60 carácteres)
    - Telefono (Solo números, espacios y/o guiones medios. Validar el formato utilizando expresiones regulares)
    - Email (Validar el formato utilizando expresiones regulares)

    Al hacer click en el botón guardar, primero se debe validar que los campos sean válidos. En caso afirmativo, hacer un POST a la ruta `/users` enviando el objeto con las 4 propiedades (fullname, email, address, phone).

5. El listado de los usuarios debe poder filtrarse. El filtro funciona de la siguiente manera:
    - Se tendrá un solo input text y un botón filtrar
    - Cuando escribimos algo en el input y clickeamos el botón filtrar, tenemos que hacer un GET a la ruta `/users` pasando un queryParam `search` con el valor ingresado en el input.
    - Una vez que obtuvimos el array, volvemos a renderizar la tabla de users.

6. Cada elemento en la tabla contará la acción eliminar. Al hacer click en eliminar, vamos a mostrar un modal para que la persona confirme si quiere seguir o no con la acción eliminar. En caso afirmativo se debe hacer un DELETE a la ruta `/users/:id`.

7. Cada elemento en la tabla tendrá la acción editar. Al hacer click en editar, mostrar en un modal un formulario con los mismos campos (y validaciones) que el fomulario nuevo, con todos los datos pre-cargados. Al finalizar la edición, debemos validar que todos los datos ingresados sean correctos (al igual que en la creación). Si los datos son correctos, haremos un PUT a la ruta `/users/:id`.

<br>

### 💡**Consideraciones generales:**

- Fuente

  - HTML:
  ```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"/>
  ```

  - CSS:
  ```css
    font-family: 'Varela Round', sans-serif;
  ```


- Iconos
  - HTML:
  ```js
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  ```

  - Editar: `<i class="material-icons" title="Edit">&#xE254;</i>`
  - Borrar: `<i class="material-icons" title="Delete">&#xE872;</i>`
  - Nuevo: `<i class="material-icons">&#xE147;</i>`

<br>

### 📋 **Requisitos:**

- Se debe respetar el diseño
- Todos los campos deben validar que los datos sean correctos y no estén vacíos
- Buena tabulación del código
- Usar nombres claros para las variables
- Utilizar sólo let o const
- Utilizar arrow functions
- Todas las funciones que lo permitan, deben tener tests unitarios utilizando Jest, para verificar el correcto funcionamiento