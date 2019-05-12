# Trabajo Práctico 3 - JS / DOM 1

El Trabajo Práctico consiste en desarrollar una aplicación ToDo list.

Para construir la aplicación es necesario utilizar:
  * HTML
  * CSS (Utilizando **SASS**)
  * JS

Dentro de la carpeta **assets** van a encontrar todas las imagenes necesarias.

La app tiene una única pantalla con un campo de texto, una lista de tareas a completar y una lista de tareas completadas.

![Ejemplo de la App](https://tp-js-dom-imgs-bszqofzpjo.now.sh/screencapture-file-Users-ezgonzalez-Downloads-todo-master-index-html-2019-05-12-18_57_51.png)

### **Requerimientos**

- Respetar el diseño de las imagenes.
  - **App sin tareas pendientes ni completadas**
  ![App sin tareas pendientes ni completadas](https://tp-js-dom-imgs-bszqofzpjo.now.sh/screencapture-file-Users-ezgonzalez-Downloads-todo-master-index-html-2019-05-12-18_56_39.png)
  - **App con tareas pendientes y sin tareas completadas**
  ![App con tareas pendientes y sin tareas completadas](https://tp-js-dom-imgs-bszqofzpjo.now.sh/screencapture-file-Users-ezgonzalez-Downloads-todo-master-index-html-2019-05-12-18_57_31.png)
  - **App con tareas pendientes y también tareas completadas**
  ![](https://files-qasekspeju.now.sh)
- La app tiene que permitirnos ingresar, mediante un formulario, una lista de tareas.
- El formulario debe consistir en un campo de texto para escribir el título de la tarea, y un botón para guardar esa tarea. _También debe ser posible guardarla presionando la tecla **enter**_.
- Cuando se agrega una tarea, esta queda en estado `pendiente` hasta que se la marca como completa y se muestra en el listado de la parte superior.
- Cada tarea del listado cuenta con dos acciones: borrar y el toggle del estado.
  - Cuando hacemos click en el botón `borrar`, eliminamos esa tarea de la lista.
  - Cuando hacemos click en el botón para realizar el toggle del estado:
    1) si estamos en el listado de tareas pendientes, la movemos al listado de las tareas completadas, la lista de la parte inferior. _Y debemos cambiar el ícono de esta acción_
    2) si estamos en el listado de las tareas completadas, debemos moverla al listado de las tareas pendientes. _Y debemos cambiar el ícono de esta acción_.
- **(opcional)** Guardar el listado de tareas pendientes y completas utilizando el `local storage`, logrando que si refrescamos o si cerramos y volvemos a abrir la app, sigamos teniendo toda la historia de tareas cargadas.

### **Colores**
- Fondo de la app: #edf0f1
- Fondo de la barra principal: #BC3B69
- Barra que divide tareas pendientes de completadas: #d8e5e0
- Fuente dentro del listado de tareas: #444

### **Fuente**
```css
font-family: 'Roboto', sans-serif;
```
```html
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=cyrillic" rel="stylesheet">
```