## HTML5
La gran diferencia para el modelado de un documento HTML es el correcto uso de las etiquetas semánticas. **HTML5** introduce una serie de elementos estrucuturales que facilitan tanto el desarrollo de las páginas como también el análisis de las mismas por buscadores.  
Mejoras en HTML5:
  * **Semántica:** Un elemento semántico describe el contexto de su contenido tanto al browser como al desarrollador.
  * **Conectividad:** Permite comunicarse con el servidor de formas nuevas e innovadoras.
  * **Sin conexión y almacenamiento:** Permite a las páginas web almacenar datos localmente en el lado del cliente y operar sin conexión de manera más eficiente.
  * **Multimedia:** Nos otorga un excelente soporte para utilizar contenido multimedia como lo son audio y video nativamente.
  * **Gráficos y efectos 2D/3D:** Proporciona una amplia gama de nuevas características que se ocupan de los gráficos en la web como lo son canvas 2D, WebGL, SVG, etc.
  * **Rendimiento e Integración:** Proporciona una mayor optimización de la velocidad y un mejor uso del hardware.
  * **Acceso al dispositivo:** Proporciona APIs para el uso de varios compomentes internos de entrada y salida de nuestro dispositivo.
  * **CSS3:** Nos ofrece una nueva gran variedad de opciones para hacer diseños más sofisticados.

#### ¿Cuáles son los elementos semánticos?  
**Elementos no semánticos**: ```<div>``` y ```<span>```, los cuáles no dan información sobre su contenido.  
**Elementos semánticos**: ```<form>```, ```<table>``` y ```<article>``` definen claramente su contenido.

### Viewport
El viewport es el área visible del usuario de una página web. Éste varía con el dispositivo y será menor en un teléfono móvil que en una pantalla de computadora.


### Nuevos elementos
[img]

### Etiquetas
| Etiqueta           | Descripción  |
| ------------------ | -------------|
| ```<header>```     | Encabezado    |
| ```<nav>```        | Barra de navegación    |
| ```<aside>```      | Contenido en otra posición del documento   |
| ```<section>```    | Contenedor   |
| ```<footer>```     | Pie de la página   | 
| ```<figure>```     | Contenedor   |
| ```<figcaption>``` | Contenedor   |

**Ejemplo:**
```html
<body>
  <header>
    <h1>Encabezado de nuestro sitio</h1>
  </header>

  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="bio.html">Bio</a></li>
    </ul>
  </nav>

  <aside>
    <p>Texto de la barra de costado del sitio</p>
  </aside>

  <section>
    <h2>Nueva sección de nuestro sitio</h2>
    <p>Contenido de nuestro sitio</p>
  </section>

  <footer>
    <p>Pie de nuestro sitio</p>
  </footer>
</body>
```


* Para describir un artículo, post o item de un foro podemos utilizar la etiqueta **article**
* Si queremos tener direcciónes del autor como contenido utilizamos la etiqueta **address**
* En caso de necesitar tener alguna fecha como contenido podemos utilizar la etiqueta **time**

**Ejemplo:**
```html
<body>
  <article>
    <p>Autor: Nombre del Autor</p>
    <time>Fecha de la publicación</time>
    <address>
      Datos sobre las direcciones del auto, tanto físicas como online
    </address>
  </article>
</body>
```

* Para más información podes leer la siguiente guía de [HTML5 en el MDN](https://developer.mozilla.org/es/docs/Sections_and_Outlines_of_an_HTML5_document)

#### Práctica
[Ejercicio 35](../ejercicios_html/ej35.md)

[Ejercicio 36](../ejercicios_html/ej36.md)

[Ejercicio 37](../ejercicios_html/ej37.md)

[Ejercicio 38](../ejercicios_html/ej38.md)

[Ejercicio 39](../ejercicios_html/ej39.md)

## Iframe
* La etiqueta **iframe** nos permite embeber un documento dentro de otro
* A diferencia el hipervínculo este elemento renderiza el contenido del documento en lugar de solo vincularlo
* El atributo **src** especifíca la ruta del documento que queremos embeber, esta ruta puede ser relativa o absoluta, interna o externa a nuestro sitio
* Con el atributo **height** podemos establecer el alto de la ventana y acepta un valor numérico
* Con el atributo **width** podemos establecer el ancho de la ventana y acepta un valor numérico

**Ejemplo:**
```html
<body>
  <iframe src="documento.html" height="200" width="200"></iframe>
</body>
```

* En HTML5 se incorpora el atributo **seamless** que le dice al browser que debe mostrar este iframe como si fuera contenido del documento donde está siendo embebido

**Ejemplo:**
```html
<body>
  <iframe src="documento.html" height="200" width="200" seamless></iframe>
  <iframe src="documento.html" height="200" width="200" seamless="seamless"></iframe>
</body>
```

#### Práctica
[Ejercicio 40](../ejercicios_html/ej40.md)

## Audio y video
* En la última versión de HTML se incorporan etiquetas para poder tener video y audio en nuestros documentos
* Existe todavía un problema con los [tipos de encoding que soporta cada browser](http://caniuse.com/#search=video)

* Para incorporar video utilizamos la etiqueta **video**
* No todos los browsers soportan el mismo formato de video
* Existen diferentes formatos que se pueden utilizar:
  * H264: Internet Explorer y Safari
  * WebM: Android, Chrome, Firefox y Opera
* Cada browser va a mostrar el reproductor de una forma particular y podemos controlarlo utilizando JavaScript
* Existe la opción de utilizar flash y un plugin para llegar a más usuarios con distintos browsers
* Si el browser no soporta el tag **video** va a renderizar el contenido que este entre la etiqueta de apertura y cierre

**Ejemplo:**
```html
<body>
  <video>
    <p>Este video es sobre..</p>
  </video>
</body>
```

* La etiqueta video tiene varios atributos que nos permite controlar la forma en la que funciona el reproductor
* Estos atributos funcionan como prendido/apagado, es decir que si figura el nombre del atributo el reproductor va a utilizar esa funcionalidad
  * **src:** especifíca la ruta al video
  * **width:** establece el ancho del reproductor en pixeles
  * **height:** establece el alto del reproductor en pixeles
  * **poster:** podemos establecer una imagen que se va a ver mientras se descarga el video o hasta que el usuario le de play
  * **controls:** con este atributo le decimos al browser que utilice sus propios controles para este reproductor
  * **autoplay:** establecemos que el video tiene que comenzar automáticamente
  * **loop:** repite el video al finalizar
  * **preload:** permite establecer como se debe comportar el reproductor para cargar el video
    * **none:** no debe hacer nada hasta que el usuario haga click en play
    * **auto:** el reproductor debe descargar el video ni bien se renderiza el documento
    * **metadata:** sólo descarga información sobre el video como puede ser el tamaño, duración, etc
* Para más información sobre los atributos de esta etiqueta podemos [leer la documentación](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/video)
* [Guía de formatos](https://developer.mozilla.org/es/docs/Formatos_multimedia_admitidos_por_los_elementos_de_video_y_audio)

**Ejemplo:**
```html
<body>
  <video
    src="ejemplo.mp4"
    poster="ejemplo.jpg"
    width="600"
    height="400"
    controls
  >
    <p>Este video es sobre..</p>
  </video>
</body>
```

* Para soportar múltiples formatos podemos utilizar la etiqueta **source**
* Si utilizamos este tipo de elemento no vamos a utilizar el atributo **src** en el elemento video
* Este elemento soporta los siguientes atributos:
  * **src:** fuente del video
  * **type:** establece el tipo de video es así el browser sabe cual descargar
    * **codecs:** este atributo lo podemos poner dentro del atributo **type** para especificar que tipo de codec utilizamos para codificar el video

**Ejemplo:**
```html
<body>
  <video poster="ejemplo.jpg" controls>
    <source src="ejemplo.mp4" type="video/mp4">
    <source src="ejemplo.webm" type="video/webm">
    <source src="ejemplo.ogv" type="video/ogg">
    <source src="ejemplo.3gp" type="video/3gp">
    <p>Este video es sobre..</p>
  </video>
</body>
```

#### Práctica
[Ejercicio 41](../ejercicios_html/ej41.md)

* También podemos agregar audio a nuestros documentos
* Para incorporar audio utilizamos la etiqueta **audio**
* Funciona de manera similar que el elemento **video**
* Utiliza los siguientes atributos:
  * **src:** fuente del audio
  * **controls:** al igual que en video especifíca si el reproductor tiene controles
  * **autoplay:** el audio comienza automaticamente
  * **preload:** utiliza las mismas opciones que **video**
  * **loop:** nos permite repetir el audio
* Al igual que con los videos no todos los browsers soportan el mismo formato
  * **MP3:** Safari 5+, Chrome 6+ e IE9
  * **Ogg Vorbis:** Firefox 3.6, Chome 6, Opera 1.5 e IE9
* Al igual que con el video, si el browser no sabe renderizar la etiqueta audio va a mostrar el contenido de la misma

**Ejemplo:**
```html
<body>
  <audio src="ejemplo-audio.ogg" autoplay controls>
    <p>Este browser no soporta la etiqueta audio.</p>
  </audio>
</body>
```

* Al igual que los videos utiliza la etiqueta source
* Si utilizamos la etiqueta source no debemos especificar el atribtu **src** en la etiqueta audio

**Ejemplo:**
```html
<body>
  <audio autoplay controls>
    <source src="ejemplo-audio.mp3" />
    <source src="ejemplo-audio.ogg" />
    <p>Este browser no soporta la etiqueta audio.</p>
  </audio>
</body>
```

#### Práctica
[Ejercicio 42](../ejercicios_html/ej42.md)

## Metadata
* La etiqueta **meta** nos permite agregar metadata a nuestros documentos
* Vamos a crear estas etiquetas dentro del **head** de nuestro documento
* Este tipo de datos no son visibles pero ayudan a otros programas que leen nuestros documentos como pueden ser los bots de google, etc.
* Podemos establecer datos sobre el autor del documento, datos sobre el contenido para mostrar como resultado de busquedas, etc
* En este caso el atributo **name** tiene significado especial según el contenido. Hasta ahora este atributo tenía ese significado para nosotros y podíamos utilizar el contenido que queríamos. Ahora tenemos que usar nombres especiales asociados a una funcionalidad específica
* Lo mismo pasa con el atributo **content** que nos permite especificar el valor de una etiqueta **meta**

* Podemos establecer el tipo de codificación de caracteres que utiliza nuestro documento
* Esta etiqueta va debajo de la declaración del **head** del documento

**Ejemplo:**
```html
<head>
  <meta charset="UTF-8">
</head>
```

* Pueden leer más sobre [codificación de caracteres y como funciona](https://es.wikipedia.org/wiki/Codificaci%C3%B3n_de_caracteres)

* Para describir nuestro sitio utilizamos el atributo **name** con el valor **description** y el atributo **content** con el texto que queremos
* Esta bueno que la descripción no sea más larga que un twit (140 caractéres más o menos)
* Este texto lo utilizan los motores de búsqueda como google y lo muestra en los resultados como descripción de nuestro sitio

**Ejemplo:**
```html
<head>
  <meta name="description" content="Gran sitio sobre HTML5, CSS3 y JavaScript">
</head>
```

* También podemos asociar nuestro sitio/documento utilizando palabras clave
* Utilizamos el atributo **name** con el valor **keywords** y el atributo **content** con un listado de palabras separadas por comas como valor

**Ejemplo:**
```html
<head>
  <meta name="keywords" content="html, css, js, JavaScript, css3, css2, html4, html5" />
</head>
```

* Una buena práctica es describir quien es el autor del documento
* Utilizamos el atributo **name** con el valor **author** y el atributo **content** con el nombre del autor

**Ejemplo:**
```html
<head>
  <meta name="author" content="Grace Hopper" />
</head>
```

## Caracteres especiales
* En HTML algunos caracteres tienen que estar codificados
* Si establecemos que el documento esta encodeado en UTF-8 podemos utilizar los caracteres especiales para los acentos, la letra ñ sin codificar ya que son parte del encoding
* Para ver un listado más completo de caracteres pueden visitar el siguiente [sitio](http://ascii.cl/es/codigos-html.htm)
* Utilizamos el caracter **&** para establecer que es un caracter especial

**Ejemplo:**
```html
<body>
  <p>&lt; Esto representa el caracter menor que (<)</p>
  <p>&gt; Esto representa el caracter mayor que (>)</p>
  <p>&amp; Esto representa el caracter ampersand (&)</p>
  <p>&copy; Esto representa el símbolo de Copyright</p>
  <p>&reg; Esto representa el símbolo de trademark registrado</p>
  <p>&trade; Esto representa el símbolo de trademark</p>
</body>
```

#### Práctica
[Ejercicio 43](../ejercicios_html/ej43.md)

## Extra:
[Specs de HTML5 - super técnico](https://dev.w3.org/html5/spec-preview/Overview.html)
