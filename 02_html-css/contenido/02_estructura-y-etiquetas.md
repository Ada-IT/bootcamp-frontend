### Estructura
```html
<html>
    <!-- Esta etiqueta es el elemento padre de todo nuestro documento. Establecemos que estamos armando  
    una estructura en HTML. -->
</html>
```
```html
<html>
    <head>
        <title>Título de nuestro documento y se ve en la pestaña del navegador.</title>
        <!-- Todo lo que no vemos en el navegador.  
            Incluye información sobre nuestro documento, como el título (<title>), enlaces a  
            sripts y hojas de estilos. -->
    </head>

    <body>
        <!-- Todo lo que sí vemos en el navegador.  
            Incluye todo el contenido que queremos mostrar en nuestra página. -->
    </body>
</html>
```
#### Práctica
[Ejercicio 1](./ejercicios_html/ej01.md)

### Etiquetas
| Etiqueta      | Descripción       |
| ------------- | ----------------- |
| ```<h1>, <h2>, <h3>, <h4>, <h5>, <h6>```  | Encabezados / Títulos |
| ```<p>```     | Parrafo           |
| ```<span>```  | Contenedor genérico en línea |
| ```<div>```   | Contendedor genérico n bloque|
| ```<!-- -->```| Comentario        |
| ```<br>```    | Salto de línea    |
| ```<hr>```    | Línea horizontal  |
| ```<strong>```| Texto resaltado   |
| ```<ol>```    | Lista ordenada    |
| ```<ul>```    | Lista sin orden   |
| ```<li>```    | Item de una lista |
| ```<dl>```    | Lista de definición|
| ```<a>```     | Hipervínculo      |

### Títulos H1/H6
* En HTML tenemos 6 niveles de etiquetas para los títulos de nuestro documento o secciones.
* Los títulos utilizan la etiqueta **h** y el número de tipo de título.
* El browser por defecto muestra la diferencia entre los títulos utilizando una tipografía más grande para el H1 y la más pequeña para el H6.
* Más adelante nosotros vamos a definir como se ven los títulos de nuestro documento.
* Conceptualmente debemos utilizar los títulos en orden respetando su gerarquía. (primero el h1, después el 2, etc)

**Ejemplos:**
```html
<h1>Título Principal del documento</h1>
<h2>Título secundario</h2>
<h3>Título 3</h3>
<h4>Título 4</h4>
<h5>Título 5</h5>
<h6>Título 6</h6>
```
### Etiqueta párrafo
* Por medio de la etiqueta **p** creamos un párrafo.
* Establecemos el contenido entre la etiqueta de apertura y cierre.
* El párrafo es un **elemento en bloque** y es por esto que el browser por defecto nos va a mostrar un párrafo por linea.
* El browser sólo renderiza un espacio en blanco e ignora el resto.

**Ejemplo**
```html
<p>Contenido de mi párrafo.</p>
<p>Contenido de          mi párrafo.</p> (sólo va a mostrar un espacio)
<p>Contenido de mi          párrafo.</p> (sólo va a mostrar un espacio)
```

#### Práctica
[Ejercicio 2](../ejercicios_html/ej02.md)

[Ejercicio 3](../ejercicios_html/ej03.md)
### Contenedores genéricos
#### Div
* Existe un contenedor genérico llamado **div** que nos permite agrupar contenido y separarlo en secciones.
* El div es un **elemento bloque** por defecto.

**Ejemplo:**
```html
<div>
  <h1>Noticia</h1>
  <p>Contenido de la noticia.</p>
</div>
```

#### Span
* Existe un contenedor genérico llamado **span** que nos permite agrupar contenido.
* El span es un **elemento en linea (inline)** por defecto y esto significa que se va a ver un elemento junto al otro sin ocupar todo el lugar disponible.
* Por default normalmente el browser no aplica ningún estilo especial a este tipo de elementos pero nos va a permitir hacerlo desde css.
* Podemos utilizar estos contenedores genéricos inline como parte de un elemento en bloque (como puede ser un div o párrafo).

**Ejemplo:**
```html
<span>Elemento en linea</span>
<span>Elemento en linea</span> (Estos dos spans se van a ver en la misma linea)
<p>Este párrafo tiene un <span>sector especial</span></p>
```

### Comentarios
* En los lenguajes de programación existe siempre alguna forma de comentar nuestro código ya sea porque no queremos que se ejecute o por la necesidad de dejar documentada alguna funcionalidad.
* Podemos utilizar comentarios de una o muchas líneas (multilinea).
* El browser no renderiza los comentarios en la vista de nuestro documento
* Cualquiera puede ver nuestros comentarios en el código fuente de nuestro documento.
* HTML utiliza la siguiente sintáxis para los comentarios

**Ejemplo:**
```html
<!-- Comentario en una sola línea -->
<!--
  Comentario con varias líneas
  Comentario con varias líneas
  Comentario con varias líneas
  Comentario con varias líneas
-->
```
### Salto de línea (br)
* Utilizando al etiqueta **br** forzamos un salto de línea

**Ejemplo:**
```html
<p>Contenido de nuestro párrafo en una línea <br />
Contenido de nuestro párrafo en otra línea</p>
<br />
<br />
Podemos utilizar el salto de linea <br />
en cualquier lado de nuestro documento.
```

### Línea divisora (hr)
* Por medio de la etiqueta **hr** dibujamos una linea divisora

**Ejemplo:**
```html
<h1>Título principal de nuestro documento</h1>
<h2>Título secundario</h2>
<hr />
<p>Contenido de nuestro documento</p>
```

#### Práctica
[Ejercicio 4](../ejercicios_html/ej04.md)

### Formato de texto
* Existen algunas etiquetas de HTML que nos permiten describir como es el texto del documento
* Podemos utilizar la etiqueta **strong** para resaltar un texto.
* Queda a criterio del browser como mostrar el contenido de esta etiqueta. En general lo hace con formato de negrita.
* Para efectos visuales vamos a utilizar CSS.

**Ejemplo:**
```html
<strong>Texto resaltado o remarcado!!</strong>
```

## Listas
* Existen muchos casos en los que podemos utilizar listas
* En HTML hay 3 tipos de listas:
  * Desordenadas:
  * Ordenadas
  * Definición

### Lista desordenada (ul)
* Las listas desordenadas tienen como detalle un bullet
* Dado que son desordenadas no importa el orden de sus elementos
* Se utiliza la etiqueta **ul** para establecer que es una lista del tipo desordenada o **U**nordered **L**ist.
* Este tipo de listas tienen elementos **li** del tipo elemento de lista o **l**ist **i**tem

**Ejemplo:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### Práctica
[Ejercicio 5](../ejercicios_html/ej05.md)

### Lista ordenada (ol)
* Las listas ordenadas tienen como detalle números ordenados (1, 2, 3, etc)
* Dado que son ordenadas importa el orden de sus elementos
* Se utiliza la etiqueta **ol** para establecer que es una lista del tipo ordenada o **O**rdered **L**ist.
* Al igual que la lista desordenada, esta lista tiene elementos **li** del tipo elemento de lista o **l**ist **i**tem

**Ejemplo:**
```html
<ol>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ol>
```

#### Práctica
[Ejercicio 6](../ejercicios_html/ej06.md)

### Lista de definición
* Este tipo de lista se utiliza para mostrar un término y definiciones (glosario)
* Definimos este tipo de lista con la etiqueta **dl** de lista de definición o **D**efinition **L**ist
* Utilizamos la etiqueta **dt** para establecer el término
* Por medio de la etiqueta **dd** establecemos cual es la definición del término anterior

**Ejemplo:**
```html
<dl>
  <dt>Término</dt>
  <dd>Definición</dd>
</dl>
```

#### Práctica
[Ejercicio 7](../ejercicios_html/ej07.md)

### Listas anidadas
* Las listas se pueden anidar metiendo como contenido de un elemento de lista una nueva lista
* Puede ser cualquier tipo de lista
* Se pueden utilizar para crear distintos tipos de menu

![Se te vuela la peluca](https://github.com/nisnardi/comunidad-it-js/raw/master/assets/html/mindblown.gif)

**Ejemplo:**
```html
<ul>
  <li>Item 1</li>
  <li>
    <ol>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
  </li>
</ul>
```

#### Práctica
[Ejercicio 8](../ejercicios_html/ej08.md)

## Hipervínculos
* Podemos vincular documentos utilizando hipervínculos
* La etiqueta **a** establece un nuevo vínculo
* Por medio del atributo **href** podemos vincular documentos
* El atributo **href** acepta una dirección absoluta, relativa o un email como valor y define de que tipo de hipervínculo es
* Entre la etiqueta de apertura y cierre ponemos el contenido del link
* Como contenido podemos poner una imágen y así generar otro efecto visual

**Ejemplo:**
```html
<a href="#">Contenido de mi link</a>
```

### Link externo
* Utilizando una ruta externa como atributo **href** podemos relacionar nuestro documento con un sitio exterior.

**Ejemplo:**
```html
<a href="http://google.com">Buscar</a>
```

### Links con rutas absolutas y relativas
* Para definir el atributo href podemos utilizar una ruta absoluta o relativa.
* Ruta absoluta se llama cuando utilizamos la ruta completa al documento. Puede ser local o de un sitio externo.

**Ejemplo:**
```html
<a href="http://yahoo.com">Abrir Yahoo</a>
<a href="c:\Usuarios\mi_nombre\mi_cv.pdf">Mirá mi CV</a>
```

* Podemos relacionar los documentos utilizando una ruta relativa.
* Este tipo de rutas está definida por la relación que tienen los documentos
* Podemos utlizar el concepto que utilizamos desde la consola para entrar y salir de una carpeta
* Para acceder a la raíz del sitio podemos utilizar **/**

**Ejemplo:**
```html
<a href="/">Volver a Home</a>
```

* Si tenemos 2 archivos que estan al mismo nivel podemos utilizar el nombre de los mismos como vínculo.

![Archivos relativos](https://github.com/nisnardi/comunidad-it-js/raw/master/assets/html/link_relativo.png)

**Ejemplo:**
```html
En index.html:
<a href="about.html">Sobre Mi</a>

En about.html:
<a href="index.html">Sobre Mi</a>
```

* Podemos relacionar un archivo que esta dentro de una carpeta utilizando el nombre de la **carpeta/nombre del archivo**
* También podemos establecer relación desde el archivo que esta dentro de la carpeta con uno que esta afuera utilizando **../** tantas veces como niveles de profundidad que tenga que salir

![Archivos relativos](https://github.com/nisnardi/comunidad-it-js/raw/master/assets/html/link_relativo2.png)

**Ejemplo:**
```html
En index.html:
<a href="about/about.html">Sobre Mi</a>

En about/about.html:
<a href="../index.html">Sobre Mi</a>
```

### Atributo target
* Por medio del atributo **target** que tienen los hipervinculos y el valor **_blank** podemos establecer que queremos que ese documento se abra en una ventana nueva
* Los browsers actuales pueden abrir este documento en un tab nuevo si el browser lo soporta.

**Ejemplo:**
```html
<a href="http://comunidadit.org" target="_blank">Comunidad IT</a>
```

## Link de mail
* En el atributo **href** podemos establecer un tipo de valor especial **mailto** para decirle al browser que queremos abrir algún programa de envío de mail que tenga instalado el usuario
* Utilizamos el valor **mailto:dirección@gmail.com** para establecer cual es el mail que queremos utilizar

```html
<a href="mailto:pepe@gmail.com">Contacto</a>
```

### Punto de anclaje
* Utilizando el concepto de punto de anclaje podemos navegar a una sección del documento utilizando un link.
* Al utilizar un punto de anclaje el browser se sitúa en la posición donde encuentre dicho punto.
* Para esto utilizamos un elemento hipervínculo **a** con el atributo **name** que queremos utilizar como anclaje.

**Ejemplo**
```html
Definimos el anclaje en un documento
<a name="noticias"></a>

Desde el mismo documento podemos utilizar:
<a href="#noticias">Ir a la sección noticias</a>

Desde otro archivo:
<a href="archivo.html#noticias">Ir a la sección noticias</a>
```

#### Práctica
[Ejercicio 9](../ejercicios_html/ej09.md)

[Ejercicio 10](../ejercicios_html/ej10.md)

[Ejercicio 11](../ejercicios_html/ej11.md)

[Ejercicio 12](../ejercicios_html/ej12.md)

[Ejercicio 13](../ejercicios_html/ej13.md)

[Ejercicio 14](../ejercicios_html/ej14.md)

[Ejercicio 15](../ejercicios_html/ej15.md)
