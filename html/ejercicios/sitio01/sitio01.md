# Ejercicio Sitio 1

Crear una carpeta:
* Nombre: sitio01

Crear las siguientes carpetas dentro de la carpeta sitio_1:
  * profile
    * Nombre de archivo: index.html
  * network
    * Nombre de archivo: index.html
  * topic
    * Nombre de archivo: programacion.html
    * Nombre de archivo: tecnologia.html
    * Nombre de archivo: educacion.html

## index.html

Crear el inidice de nuestro sitio:
* Nombre: index.html
* Title: Medium - Noticias

### Sección header
* Crear un contenedor genérico div con el id header
  * Crear un span con el texto 'Logo'
  * Crear un span
    * Crear un hipervinculo para vincular con la carpeta profile
    * Agregar el texto 'Perfil' al hipervinculo
  * Crear una linea
  * Crear un título H1 con el text 'Medium'

### Nuevo desde tu red
* Crear un contenedor genérico div con el id network
  * Crear un título h3 con el texto 'Nuevo desde tu red'
  * Crear un hipervinculo con el texto 'MAS' que apunte a la carpeta network
  * Crear una lista desordenada con 6 items de lista
    * En cada item agregar el siguiente contenido:
      * Título h4 con un texto autogenerado
        * Crear un hipervinculo dentro del título que apunte al punto de anclaje de cada notica de la sección Tu Red (ej: #noticia-1, 2, 3, etc)
      * Párrafo para el nombre autogenerado
      * Parrafo para fecha y tiempo de lectura
        * Crear un span con la fecha DD/MMM
        * Crear un span con un guión medio y un espacio antes y después para distanciar la fecha y tiempo de lectura
        * Crear un span con el texto 'tiempo de lectura'

### Título
* Crear un título h2 con el texto 'Tu edición matutina'
* Crear una línea

### Sección JavaScript
* Crear un div con el atributo id javascript y el siguiente contenido:
  * Crear un título h3 con el texto 'JavaScript'
  * Crear un span con el texto SUGERIDO
  * Crear una linea
  * Crear 4 items con el siguiente contenido:
    * Div con el siguiente formato: '%SU_NOMBRE% and %CANTIDAD_DE_USUARIOS% others'
    * Título h4 con un texto generado
    * Párrafo con el nombre del autor en negrita
    * Parrafo para fecha y tiempo de lectura
      * Crear un span con la fecha DD/MMM
      * Crear un span con un guión medio y un espacio antes y después para distanciar la fecha y tiempo de lectura
      * Crear un span con el texto 'tiempo de lectura'

### Sección Sugerencias
* Crear un div con el atributo id sugerencias y el siguiente contenido:
  * Crear un título h3 con el texto 'Sugerencias'
  * Crear una linea
  * Crear una lista desordenada con el siguiente contenido:
    * Crear 3 items con el siguiente contenido:
      * Hipervinculo con el texto 'Programación +' y que apunte al archivo programacion dentro de la carpeta topic.
      * Hipervinculo con el texto 'Tecnología +' y que apunte al archivo tecnologia dentro de la carpeta topic.
      * Hipervinculo con el texto 'Educación +' y que apunte al archivo educacion dentro de la carpeta topic.

### Pie del sitio
* Crear un div con el atributo id pie y el siguiente contenido:
  * Crear una línea
  * Crear una lista desordenada con los siguientes items:
    * Crear 8 items con los siguientes elementos:
      * Hipervinculo:
        * Texto: ¿Cómo arrancar? 
        * url: https://medium.com/m/getting-started 
        * Abrir en nuevo tab
      * Hipervinculo:
        * Texto: Ayuda 
        * url: https://help.medium.com/
        * Abrir en nuevo tab
      * Hipervinculo:
        * Texto: Estado
        * url: https://medium.statuspage.io/
        * Abrir en nuevo tab
      * Hipervinculo:
        * Texto: Blog
        * url: https://medium.com/3minread
        * Abrir en nuevo tab
      * Hipervinculo:
        * Texto: Carreras
        * url: https://jobs.medium.com/
        * Abrir en nuevo tab
      * Hipervinculo:
        * Texto: Privacidad
        * url: https://medium.com/policy/f03bf92035c9
        * Abrir en nuevo tab
      * Hipervinculo:
        * Texto: Términos y condiciones
        * url: https://medium.com/policy/9db0094a1e0f
        * Abrir en nuevo tab
      * Hipervinculo:
        * Texto: Sobre Medium
        * url: https://about.medium.com/
        * Abrir en nuevo tab

## Perfil
  * Nombre: index.html
  * Title: Medium - Perfil
  * Crear un div con el siguiente contenido:
    * Hipervínculo con el texto volver y que vuelva a la home.
    * Crear una línea
  * Crear un título h1 con tu nombre y apellido
  * Crear un párrafo con una pequeña descripción tuya (si hay que escribirla)
  * Crear un div con el siguiente contenido:
    * Crear un span con el siguiente formato y texto '%NRO_SIGUIENDOS% Siguiendo'
    * Crear un span con ' - '
    * Crear un span con el siguiente formato y texto '%NRO_SEGUIDORES% Seguidores'
    * Crear un span con ' - '
    * Crar un span con el siguiente hipervínculo:
      * Texto y formato: '%TU_HANDLER_DE_TWITTER%' (ej: @isnardi)
      * Url: La dirección de twitter de tu usuario. (ej: https://twitter.com/isnardi)>
    * Crear un span con ' - '
      * Crar un span con el siguiente hipervínculo:
        * Texto: '%TU_MAIL%' (ej: pepe@gmail.com)
        * Url: tiene que madnar un mail a la dirección que pusiste de contacto
  * Crear un comentario multilinea que diga 'Acá va el formulario de contacto'
  * Crear una lista ordenada con 5 items de tecnologías que saben o van a aprender (html, css, node, javascript, mongo, etc)
  * Copiar la sección pie de la home

## Tu red
  * Carpeta: network
  * Nombre de archivo: index.html
  * Title: Medium - Tu Red
  * Crear un div con el siguiente contenido:
    * Hipervínculo con el texto volver y que vuelva a la home.
    * Crear una línea
  * Crear un título h1 con el texto 'Tu Red'
  * Crear un div con el siguiente contenido por cada noticia en la sección Nuevo desde tu red:
    * Hipervinculo para hacer un punto de anclaje con el nombre noticia-NRO_DE_NOTICIA (ejemplo: noticia-1)
    * Título h2 con el mismo contenido que tiene la noticia en el index.
    * Crear 5 párrafos con el contenido autogenerado
    * Copiar la sección pie de la home

## Sugerencias
  * Carpeta: topic

### Programación
  * Nombre de archivo: programacion.html
  * Title: Medium - Programación
  * Agregar un comentario de una linea que diga: 'Sección de Programación'
  * Crear un div con el siguiente contenido:
    * Hipervínculo con el texto volver y que vuelva a la home.
    * Crear una línea
  * Crear un título h1 con el texto 'Programación'
  * Crear 10 párrafos autogenerados
  * Copiar la sección pie de la home

### Tecnología
  * Nombre de archivo: tecnologia.html
  * Title: Medium - Tecnología
  * Agregar un comentario de una linea que diga: 'Sección de Tecnología'
  * Crear un div con el siguiente contenido:
    * Hipervínculo con el texto volver y que vuelva a la home.
    * Crear una línea
  * Crear un título h1 con el texto 'Tecnología'
  * Crear 10 párrafos autogenerados
  * Copiar la sección pie de la home

### Educación
  * Nombre de archivo: educacion.html
  * Title: Medium - Educación
  * Agregar un comentario de una linea que diga: 'Sección de Educación'
  * Crear un div con el siguiente contenido:
    * Hipervínculo con el texto volver y que vuelva a la home.
    * Crear una línea
  * Crear un título h1 con el texto 'Educación'
  * Crear 10 párrafos autogenerados
  * Copiar la sección pie de la home
