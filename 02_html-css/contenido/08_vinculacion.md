## ¿Cómo agregar CSS?
* Existen diferentes formas de aplicar CSS
  * Se puede aplicar a nivel elemento utilizando el atributo **style** de HTML
  * En un documento por medio de la etiqueta **style** en el head
  * Compartido entre varios documentos utilizando la etiqueta **link** en el head de nuestros documentos que queremos vincular

### Agregar hoja de estilo en un elemento (atributo style)
* La forma más particular e individual que tenemos de utilizar css es utilizando el atributo **style** que tienen los elementos HTML
* Dentro del atributo style escribimos las propiedades visuales separadas por punto y coma

**Ejemplo:**
```html
<span style="color: white;">Texto en color blanco!!</span>
```

* De esta forma establecemos que **un** elemento span en particular va a tener el color de texto blanco
* Si quiero que **dos** o más elementos tengan el mismo color lo hacemos de la siguiente manera:

**Ejemplo:**
```html
<span style="color: white;">Texto en color blanco!!</span>
<span style="color: white;">Otro texto en color blanco!!</span>
```

* Geníal, ya tenemos 2 span con texto en blanco, ahora me pregunto, si tengo 50 span en el documento, los tengo que modificar uno a uno?, La respuesta es **NO** y ya vamos a ver cómo lo hacemos
* Cuando definimos estilos a nivel elementos lo estamos haciendo de forma individual
* Esta es una buena opción cuando necesitamos que si o si un elemento se vea de una determinada forma
* Utilizando esta definición de css se hace más difícil mantener o modificar nuestros elementos ya que para cambiar el color de una tipografía (como en el ejemplo) vamos a tener que modificar uno a uno todos los elementos (mucho trabajo)
* Si tenemos tan solo un documento puede ser una tarea relativamente simple pero si tenemos 300 documentos se hace más complicado
* Para evitar este problema necesitamos otra alternativa que nos permita definir los atributos visuales de nuestros elementos a nivel documento

#### Práctica
[Ejercicio 1](../ejercicios_css/ej1.md)

### Agregar hoja de estilo en un documento (style)
* Por medio de la etiqueta **style** podemos definir los estilos que queremos para nuestros elementos a nivel documento
* Utilizando selectores podemos cambiar la forma que se ve uno o muchos elementos del mismo tipo
* Para definir que el texto que estamos escribiendo dentro de la etiqueta **style** es css, utilizamos el atributo **type** con el valor "text/css"
* Si bien podemos omitir este atributo ya que HTML5 no lo require dejamos en manos del browser como interpretar el contenido de esta etiqueta
* Para estar más seguro y lograr mejor compatibilidad con browsers anteriores definimos el atributo **type** del elemento **style**

**Ejemplo:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Usando CSS</title>
    <style type="text/css">
      span {
        color: white;
      }
    </style>
  </head>
  <body>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
  </body>
</html>
```

* Con tan solo un cambio podemos establecer que todos nuestros elementos span se vean de otro color

**Ejemplo:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Usando CSS</title>
    <style type="text/css">
      span {
        color: red;
      }
    </style>
  </head>
  <body>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
  </body>
</html>
```

#### Práctica
[Ejercicio 2](../ejercicios_css/ej2.md)

* Esta forma de utilizar los estilos está buena cuando necesitamos definir estilos para un documento
* Si bien esta forma es más general que definir los estilos en cada elemento, sigue siendo una individual a nivel documento
* Un sitio va a tener más de un documento y si queremos mantenerlo necesitamos una forma de poder unificar todos los estilos para todos nuestros documentos

### Agregar hoja de estilo en un documento externo (link)
* Utilizando la etiqueta **link** podemos vincular un documento HTML con uno de CSS
* Todas las reglas que definamos en el documento CSS van a ser aplicadas en todos los documentos vinculados
* Esta es la mejor forma de unificar los estilos para nuestro sitio y es una forma más general de hacerlo
* La etiqueta **link** tiene los siguientes atributos y valores:
  * **href:** establece el path al documento CSS
  * **type:** al igual que en la definición de la etiqueta **style** especificamos que el contenido de este documento vinculado es "text/css"
  * **rel:** establece la relación con el otro documento y utilizamos el valor "stylesheet"

**Ejemplo:**

Archivo: styles.css
```css
span {
  color: white
}
```

Archivo: index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Index</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
  </body>
</html>
```

Archivo: contact.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
    <span>Texto en color Blanco</span>
  </body>
</html>
```

* Con tan solo un cambio en la hoja de estilo podemos modificar todos los documentos vinculados

**Ejemplo:**

Archivo: styles.css
```css
span {
  color: red
}
```

Archivo: index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Index</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
  </body>
</html>
```

Archivo: contact.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
    <span>Texto en color Rojo</span>
  </body>
</html>
```

#### Práctica
[Ejercicio 3](../ejercicios_css/ej3.md)

* CSS se llama Hoja de estilo en cascada ya que los elementos pueden **heredar** propiedades visuales de padre a hijo
* Si establecemos estilos al **body** todos los elementos que esten en el documento van a heredar esos atributos
* No todos los elementos son heredables
* Una buena forma de ver esto es utilizando la barra de [developer tools](https://developer.chrome.com/devtools/docs/elements-styles)
* Los estilos que definimos en un archivo externos pueden ser sobrescritos utilizando la etiqueta **styles**
* Los estilos definidos en style pueden ser sobrescritos utilizando el atributo **style** de los elementos
* De esta forma podemos ver que utilizamos conceptos generales y son pisados por los más individuales
* Este mismo concepto se da entre elementos
* Si definimos atributos visuales para el **body** podemos sobrescribir como se ven los **párrafos** por ejemplo dejando que el resto de los elementos hereden las propiedades declaradas en el **body**

**Ejemplo:**

styles.css
```css
 p {
   color: red;
 }
```

```html
<link href="styles.css" type="text/css" rel="stylesheet" />

<style type="text/css">
  p {
    color: blue;
  }
</style>

<p style="color: black;">Texto en color negro!!</p>
```

* Como podemos ver en este ejemplo el estilo que establecemos en el elemento va a ser el que quede definido finalmente
* El estilo definido en el documento (etiqueta style) pisa el que esta definido en el archivo general. En este caso importa el orden en que fueron llamados los estilos
* Como regla podemos decir que siempre ponemos los estilos más generales primero y después sobrescribimos lo que necesitamos

#### Práctica
[Ejercicio 4](../ejercicios_css/ej4.md)
