# Estructura del proyecto

Es bastante usual que un proyecto de React conste de varias decenas (e incluso centenas) de archivos, por lo que tener una buena organización de los mismos es fundamental. React no nos dice ni nos obliga a ordernarlos de cierta manera, por lo que, en proyectos personales, tenemos que buscar un criterio con el que nos sintamos cómodas. Hay una sugerencia bastante conocidad en el ámbito que dice: *mueve cosas hasta que se sientan bien*.

De todas formas, hay un par de sugerencias a tener en cuenta. Los lineamientos principales o que deberíamos tener presentes son básicamente dos:
  - la estructura del proyecto debería informarmos inmediatamente de las cosas que contiene con solo mirarlo (esto se conoce como "screaming architectura").
  - no debería haber carpetas anidadas con muchos niveles de profundidad (es decir, muchas carpetas dentro de carpetas dentro de carpetas). Es preferible una estructura más horizontal (todo a un mismo nivel) que vertical (o jerárquica).
  
Todos los archivos con los que trabajemos van a ir dentro de la carpeta **src**. Dentro de esta, una estructura mínima podría tener las carpetas:
  
  - components
  - assets
  - styles
  
En `components` van a ir todos nuestros componentes, en `assets` aquellos archivos como ímagenes, íconos, fuentes, etc (podemos subdividirlos en categorías, y si tenemos muchas, subdivir estas) y en `styles` todos aquellos estilos genéricos que no pertenezcan a un componente en particular.

Dentro de `components` vamos a crear una carpeta por cada componente, con nombre en `PascalCase`, como el mismo nombre del componente, y dentro de esto vamos a crear al menos un archivo `.js` para el componente, y un archivo `.scss` para los estilos, también con el mismo nombre. Por ejemplo, si nuestro componente se llama `Comment`, nos quedaría:

 - src
    - components
        - Comment
            - Comment.js
            - Comment.scss
  
En primera instancia ponemos todos los componentes bajo la carpeta `components`, a un mismo nivel. En caso de que luego la cantidad de componentes empiece a crecer, podemos empezar a agruparlos dentro de subcarpetas. Básicamente, los criterios para agrupar componentes son dos:

  - Componentes de un mismo tipo: buttons, modals, popups, menus
  - Componentes que pertenezcan a una misma unidad o componente mayor: CommentText, CommentDate, CommentUsername, etc
  
Dentro de `styles` vamos a incluir archivos `.scss` que van a ser luego importados en los archivos `.scss` de los componentes. Estos archivos tienen por lo general estilos generales o variables que se utilizan en todo el proyecto. Como tienen que ser importados, son *archivos parciales*, por lo que tienen que comenzar su nombre con guión bajo. Es preferible tener varios archivos (por ejemplo, uno para variables de colores, otro para variables de fuentes, etc), a un único archivo gigante. A su vez, en el caso de tener varios, también podemos agruparlos en subcarpetas si lo consideramos necesario.   
