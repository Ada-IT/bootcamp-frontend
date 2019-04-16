# DOM

* El `DOM` (document object model) proporciona una representación estructural de un documento html, permitiendo la modificación de su contenido
* Esto significa que tenemos acceso a elementos que tienen propiedades, métodos y eventos disponibles para crear, eliminar y modificar elementos en un documento web
* En el DOM encontramos los siguientes tipos de datos:
  * **document:** representa el documento en si mismo. Es el nodo principal.
  * **element:** representa un nodo elemento
  * **attribute:** representan los atributos de los nodos / elementos
  * **nodeList:** es un array con nodos. Sus elementos se pueden acceder por medio items o indice del array.

![DOM](http://girldevelopit.github.io/gdi-featured-js-intro/dist/img/dom-tree.png)

* Podes leer más sobre `dom` en el [sitio del MDN](https://developer.mozilla.org/es/docs/DOM)

### Carga de documento
* Para poder interactuar con los elementos necesitamos saber que el documento se descargó completamente
* El browser dispara un evento `onload` en el cual notifica que termino de descargar, leer y parsear todos los documentos e imagenes que contiene el documento
* Utilizando este evento podemos agregar nuestro código de forma segura y sin riesgo que se ejecute antes de que el documento termine de cargar

**Ejemplo:**
```html
<html>
<head>
  <title>onload</title>
</head>
<body onload="saludar()">
  <script src="eventos.js"></script>
</body>
</html>
```
```js
function saludar () {
	// código que se ejecuta después de que se cargó el documento
  console.log('hola mundo!');
}
```

#### Ejercicios
[Ejercicio 1](./ejercicios/001.md)

### Selectores
* Para poder interactuar con los elementos y el documento lo primero que tenemos que hacer es poder seleccionarlos
* Existen formas de acceder a los elementos de una página de manera muy simple utilizando el concepto de selectores
* Cada selector puede retornar un solo elemento o una lista según cual sea la intención del selector
* El objeto document tiene los siguientes selectores (los más conocidos) como método:
  * **getElementById:** acepta un string con el valor del atributo ID como parámetro y retorna un elemento. Retorna null en caso de no encontrar el elemento buscado.
  * **getElementsByTagName:** acepta un string con el valor del  nombre del TAG como parámetro y retorna una lista/array de elementos. Retorna una lista/array vacía en caso de no encontrar elementos del TAG buscado.
  * **getElementsByClassName:** acepta un string con el valor del atributo class como parámetro y retorna una lista/array de elementos. Retorna una lista/array vacía en caso de no encontrar elementos con la class buscada.
  * **querySelector:** acepta un string con un selector de css como parámetro y retorna un elemento que esté dentro del rango seleccionado utilizando el css query. Retorna null en caso de no encontrar elemento en dicho contexto
  * **querySelectorAll:** acepta un string con un valor de selector de css como parámetro y retorna una array de elementos que estén comprendidos en el contexto de búsqueda utilizando el query de css. Retorna una array vacío en caso de no encontrar elementos en dicho contexto.


**Ejemplo:**
```html
<body>
  <p>Un texto</p>
  <p class="rojo">Un texto en rojo</p>
  <p class="rojo">Un texto en rojo</p>
  <p class="azul">Un texto en azul</p>
  <p id="principal">Un texto principal</p>
</body>
```

```js
// obtenemos una referencia al elemento con id="principal"
var elemento = document.getElementById('principal');

// obtenemos una colección con todos los elementos de tag <p> de nuestro documento
var elementosP = document.getElementsByTagName('p');

// obtenemos una referencia al elemento con el contenido 'Un texto'
var otroElemento = document.querySelector('p');

// obtenemos una colección con todos los elementos párrafo de nuestro documento que tienen la clase 'rojo'
var elementosRojos = document.querySelectorAll('p.rojo');
```

* querySelectorAll, getElementsByTagName y getElementsByClassName retornan una colección de elemento, es decir que podemos acceder a cada uno de los elementos de la misma forma que lo hacemos con un array. El primer elemento está en el índice 0

**Ejemplo:**
```html
<body>
  <p>Un texto</p>
  <p class="rojo">Un texto en rojo</p>
  <p class="rojo">Un texto en rojo</p>
  <p class="azul">Un texto en azul</p>
  <p id="principal">Un texto principal</p>
</body>
```

```js
// obtenemos una colección con todos los elementos párrafo de nuestro documento
var parrafos = document.getElementsByTagName('p');

parrafos[0]; // <p>Un texto</p>
parrafos[1]; // <p class="rojo">Un texto en rojo</p>
parrafos[2]; // <p class="rojo">Un texto en rojo</p>
parrafos[3]; // <p class="azul">Un texto en azul</p>
parrafos[4]; // <p id="principal">Un texto principal</p>
```
**Otra opcion**
```js
// obtenemos una colección con todos los elementos párrafo de nuestro documento
var parrafos = document.querySelectorAll('p');

parrafos[0]; // <p>Un texto</p>
parrafos[1]; // <p class="rojo">Un texto en rojo</p>
parrafos[2]; // <p class="rojo">Un texto en rojo</p>
parrafos[3]; // <p class="azul">Un texto en azul</p>
parrafos[4]; // <p id="principal">Un texto principal</p>
```

* Podemos sacar como conclusión que si queremos seleccionar un elemento lo podemos hacer utilizando los selectores `getElementById` o `querySelector`. En caso de querer seleccionar varios elementos podemos utilizar `querySelectorAll`

#### Ejercicios
[Ejercicio 2](./ejercicios/002.md)

### Atributos
* Al seleccionar un elemento podemos acceder a sus atributos utilizando la propiedad attributes
* Esta propiedad retorna un mapa (es como un array) que tiene valores key/value con los nombres y valores de los atributos de ese elemento

**Ejemplo:**
```html
<p id="principal" class="rojo">texto principal en rojo</p>
```

```js
var elemento = document.querySelector('p')
console.log(elemento.attributes); // retorna un objeto del tipo NamedNodeMap con toda la descripción de los atributos
```

* Podemos acceder de forma indiviudal a los atributos de un elemento utilizando el método `getAttribute`
* Este método acepta un string como parámetro con el nombre del atributo que quiero obtener
* Retorna el valor del atributo y null en caso de no encontrarlo

**Ejemplo:**
```html
<p id="principal" class="rojo">texto principal en rojo</p>
```

```js
var elemento = document.querySelector('p')
var id = elemento.getAttribute('id'); // retorna principal
var clase = elemento.getAttribute('class'); // retorna rojo
console.log(id);
```

* Otra forma de acceder a las propiedades es utilizar los atributos de HTML como propiedades de objeto

**Ejemplo:**
```html
<p id="principal" class="rojo">texto principal en rojo</p>
```
```js
var elemento = document.querySelector('p')
var id = elemento.id;
console.log(id);
```

* Hay un caso especial y es el uso del atributo class dado que es una palabra reservada en JavaScript
* Para acceder o establecer el atributo class tenemos que utilizar `className`

**Ejemplo:**
```html
<p id="principal" class="rojo">texto principal en rojo</p>
```
```js
var elemento = document.querySelector('p')

var clase = elemento.className;
console.log(clase); // rojo

clase = elemento.getAttribute('class');
console.log(clase); // rojo
```

#### Ejercicios
[Ejercicio 3](./ejercicios/003.md)

* Los elementos tienen una propiedad classList que nos permite obtener una colección de las clases que tienen un elemento

**Ejemplo:**
```html
<p id="principal" class="rojo negrita">texto principal en rojo</p>
```
```js
var elemento = document.querySelector('p');
console.log(elemento.classList[0]); // rojo
console.log(elemento.classList[1]); // negrita
```

* La classList tiene funciones y propiedades que nos permiten interactuar con las clases de un elemento de la siguiente manera:
  * **add:** acepta como parámetro el nombre de la clase que queremos agregar en formato de string. Si la clase existe es ignorada
  * **remove:** acepta una clase como parámetro en formato string y la quita del elemento
  * **item:** acepta un número como parámetro que representa la posición de la lista. Retorna el nombre de la clase que está en esa posición
  * **toggle:** acepta un nombre de clase como string. Agrega o quita la clase según exista o no en el elemento. Nos permite por ejemplo mostrar y ocultar elementos
  * **contains:** acepta un nombre de clase como string y retorna un valor boolean según si el elemento tiene o no esa clase
  * **replace:** acepta como primer parámetro el nombre de la clase que queremo remplazar, como segundo valor acepta el nombre de la clase que va a remplazar la anterior

**Ejemplo:**
```html
<p id="principal" class="rojo negrita">texto principal en rojo</p>
```
```js
var elemento = document.querySelector('p');

// agregamos la clase ocultar
elemento.classList.add('ocultar');

// como tenía la clase ocultar con toggle lo sacamos
elemento.classList.toggle('ocultar');

// sacamos la clase negrita
elemento.classList.remove('negrita');

// Retorna rojo que es la primer clase que tiene este elemento
elemento.item(0);

// Retorna true ya que el elemento tiene la clase rojo
elemento.contains('rojo');

// cambiamos la clase rojo por verde
elemento.replace('rojo', 'verde');
```

* classList es súper util para interactuar con clases

#### Ejercicios
[Ejercicio 4](./ejercicios/004.md)

* Podemos saber si un elemento tiene o no un atributo en particular utilizando el método `hasAttribute`
* Acepta un string como parámetro con el nombre del atributo que quiero saber si existe en ese elemento
* Retorna un valor booleano

**Ejemplo:**
```html
<p id="principal" class="rojo">texto principal en rojo</p>
```

```js
var elemento = document.querySelector('p');
console.log(elemento.hasAttribute('class')); // true
```

#### Ejercicios
[Ejercicio 5](./ejercicios/005.md)

* También existe el método `hasAttributes` que nos permite saber si un elemento tiene o no atributos
* Este método retorna un valor boolean, true en caso de que el elemento tenga atributos y false en caso de que no los tenga.
* Destacamos que la diferencia entre `hasAttribute` y `hasAttributes` es que el primero nos dice si tiene o no un atributo en especial y el segundo si tiene atributos en general

**Ejemplo:**
```html
<p id="principal" class="rojo">texto principal en rojo</p>
<h2>Elemento sin atributos</h2>
```

```js
var elemento = document.querySelector('p');
var titulo = document.querySelector('h2');
console.log(element.hasAttributes():); // true
console.log(titulo.hasAttributes():); // false
```

* Para establecer atributos utilizamos el método setAttribute
* Este método acepta como primer parámetro un string con el nombre del atributo que queremos agregar
* Como segundo parámetro acepta un string con el valor que queremos para el atributo

**Ejemplo:**
```html
<h2>Elemento sin atributos</h2>
```

```js
var titulo = document.querySelector('h2');
console.log(titulo.hasAttributes():); // false

titulo.setAttribute('id', 'principal');
console.log(titulo.hasAttributes():); // true
```

* En este ejemplo vemos que al seleccionar el elemento `h2` no tiene atributos y luego utilizando `setAttribute` le podemos asignar un atributo `id` con un valor de `principal`
* En caso de querer quitar un atributo lo podemos hacer utilizando el método `removeAttribute`
* Este método acepta un string como parámetro con el nombre del atributo que queremos remover

**Ejemplo:**
```html
<h2 id="principal">Elemento sin atributos</h2>
```

```js
var titulo = document.querySelector('h2');
console.log(titulo.hasAttributes():); // true

titulo.removeAttribute('id');
console.log(titulo.hasAttributes():); // true
```

#### Ejercicios
[Ejercicio 6](./ejercicios/006.md)

### Relación entre elementos
* Un elemento que contiene otros elementos se considera como un elemento padre de los elementos que contiene
* Un elemento que esta dentro de otro elemento se considera hijo del elemento que lo contiene
* Por medio de el atributo `parentElement` podemos acceder **al elemento padre** del elemento seleccionado
* Con el atributo `children` podemos acceder a **la colección de elementos hijos** de un elemento

**Ejemplo:**
```html
<div>
  <p>Elemento hijo</p>
  <p>Elemento hijo</p>
  <p>Elemento hijo</p>
</div>
```

```js
var div = document.querySelector('div');
var parrafos = div.children; // obtengo la colección de elementos hijo
parrafos[0].parentElement;
/*
  Dado que children retorna una colección puedo acceder al primer elemento utilizando un índice como en los arrays
  Utilizamos parentElement para obtener una referencia al elemento div que contiene todos los párrafos
*/
```

#### Ejercicios
[Ejercicio 7](./ejercicios/007.md)

* Otra relación entre elementos es la de `sibling` es decir los que estan continuos o al mismo nivel que el elemento seleccionado
**Ejemplo:**
```html
  <p>Elemento hijo</p>
  <p>Elemento hijo</p>
  <p>Elemento hijo</p>
```

* En este ejemplo vemos que los 3 elementos párrafo están al mismo nivel, es decir que son sibling
* Podemos acceder al elemento que está antes que el elemento seleccionado utilizando la propiedad `previousElementSibling`
* También podemos acceder al elemento que sigue gracias a la propiedad `nextElementSibling`

**Ejemplo:**
```html
  <p>Elemento hijo</p>
  <p>Elemento hijo</p>
  <p>Elemento hijo</p>
```
```js
var parrafos = document.querySelectorAll('p');
parrafos[1].previousElementSibling; // De esta forma accedemos al primer párrafo parrafos[0]
parrafos[1].nextElementSibling; // De esta forma accedemos al elemento que sigue parrafos[2]
```

#### Ejercicios
[Ejercicio 8](./ejercicios/008.md)

### Modificar el contenido de un elemento
* Los elementos tienen un atributo llamado `innerText` que nos permite leer o escribir contenido en modo de texto
* Este atributo no es standar ya que lo agregó Microsoft hace muchos años en Internet Explorer y quedó dentro del DOM

**Ejemplo:**
```html
  <p>Mi Texto</p>
```
```js
var parrafo = document.querySelector('p');
parrafo.innerText; // Mi Texto

parrafo.innerText = 'ECMAScript en el browser está muy bueno';
parrafo.innerText; // ECMAScript en el browser está muy bueno
```
* La propiedad standar de los elementos para leer o modificar el contenido de un elemento se llama `textContent`

**Ejemplo:**
```html
  <p>Mi Texto</p>
```
```js
var parrafo = document.querySelector('p');
parrafo.textContent; // Mi Texto

parrafo.textContent = 'ECMAScript en el browser está muy bueno';
parrafo.textContent; // ECMAScript en el browser está muy bueno
```

* Tanto con `innerText` como con `textContent` podemos asignar o leer el contenido de un elemento en formato de string
* Existe otra forma de establecer o cambiar el contenido de un elemento y se llama `innerHTML`
* `innerHTML` paresea el texto que se va a asignar al elemento y si encuentra que ese texto tiene formato de HTML intenta crear elementos con ese contenido

#### Ejercicios
[Ejercicio 9](./ejercicios/009.md)

**Ejemplo:**
```html
  <p>Mi Texto</p>
```
```js
var parrafo = document.querySelector('p');
parrafo.innerHTML; // Mi Texto

parrafo.innerHTML = '<span>ECMAScript en el browser está muy bueno</span>';
parrafo.innerHTML; // <span>ECMAScript en el browser está muy bueno</span>
```

* Si bien en el ejemplo puede parecer que sólo modificamos el texto en el browser este código crea un nuevo span con el contenido ECMAScript en el browser está muy bueno y lo asigna dentro del elemento párrafo

#### Ejercicios
[Ejercicio 10](./ejercicios/010.md)

### Manejo de propiedades de CSS
* Los elementos HTML tienen una propiedad llamada `style` que retorna un `objeto literal` que representa los estilos que tiene un objeto
* Al ser un objeto de ECMAScript podemos agregar o modificar sus atributos
* Los nombres de las propiedades de CSS en ECMAScript se escriben con el siguiente formato: `nombreDePropiedadDeCss`
* Por ejemplo la propiedad de CSS `background-color` se escribe en ECMA como `backgroundColor`

**Ejemplo:**
```html
  <p>Elemento sin estilo pero se lo vamos a agregar de forma dinámica</p>
```
```js
var elemento = document.querySelector('p');
elemento.style; // {}
elemento.style.color = ‘red’; // seteo el color a rojo
elemento.style.fontWeight = ‘bold’; //seteo el weight a bold
```

* De esta forma podemos manipular las propiedades de `style` en nuestros elementos

#### Ejercicios
[Ejercicio 11](./ejercicios/011.md)

### CRUD elementos
* CRUD significa:
  * Create
  * Read
  * Update
  * Delete
* Esto significa que podemos crear, actualizar y borrar un elemento
* La parte de read podemos decir que es obtener el elemento y leer sus propiedades

#### Crear un elemento
* El objeto `document` tienen un método llamado `createElement` que nos permite crear nuevos nodos elementos HTML
* `createElement` acepta como parámetro un string con el nombre de una etiqueta de HTML (a, div, span, li, ul, etc)

**Ejemplo:**
```js
var nuevoElemento = document.createElement('p');
```
* En este ejemplo podemos ver que creamos un elemento párrafo y lo guardamos en la variable nuevoElemento
* Este nuevo elemento está en memoria y tiene la estructura de un elemento párrafo pero por el momento no tiene contenido
* Al tener una referencia de un elemento podemos interactuar con él como por ejemplo establecer un contenido, insertarlo en otro elemento, cambiarle sus atributos de `style`, etc

#### Insertar un elemento
* Los objetos tienen un método llamado `appendChild` que nos permite insertar un nodo dentro del otro
* Este método inserta el nuevo nodo como último nodo hijo del nodo contenedor

**Ejemplo:**
```js
var parrafo = document.createElement('p');
parrafo.textContent = 'Hola soy un párrafo';
var div = document.createElement('div');
div.appendChild(p);
```

* En este ejemplo vemos que creamos 2 elementos párrafo y div
* Al tener la referencia de los dos elementos podemos interactuar con ellos y en este caso estamos insertando el párrafo dentro del div

#### Ejercicios
[Ejercicio 12](./ejercicios/012.md)
[Ejercicio 13](./ejercicios/013.md)
[Ejercicio 14](./ejercicios/014.md)
[Ejercicio 15](./ejercicios/015.md)

#### Remover un elemento
* Los elementos tienen un método llamado `removeChild` que nos permite remover nodos hijos
* Para poder remover un nodo tenemos que primero seleccionarlo

**Ejemplo:**
```html
<div>
  <p>Elemento sin estilo pero se lo vamos a agregar de forma dinámica</p>
</div>
```
```js
var div = document.querySelector('div');
var parrafo = div.children.item(0); // selecciono el párrafo
div.removeChild(parrafo);
```

* En este ejemplo vemos como podemos seleccionar los elementos que son hijos de otro elemento y borrarlo
* Si queremos borrar todo el contenido de un elemento podemos utilizar `innerHTML`

**Ejemplo:**
```html
<div>
  <p>Elemento sin estilo pero se lo vamos a agregar de forma dinámica</p>
</div>
```
```js
var div = document.querySelector('div');
div.innerHTML = ''; // chau chau contenido
```

#### Ejercicios
[Ejercicio 16](./ejercicios/016.md)
[Ejercicio 17](./ejercicios/017.md)
[Ejercicio 18](./ejercicios/018.md)

#### Eventos
* Manejo de eventos del DOM
* Prevenir eventos por defecto
* Interacción con el mouse
* Interacción teclado

* El browser dispara eventos cuando pasa algo con el documento o el browser
* Por ejemplo podemos saber cuando se terminó de cargar un documento, se presiona una tecla o se mueve el mouse
* Un evento consta de las siguientes partes:
  * **Tipo de Evento:** es el nombre del evento que ocurre
  * **Target del evento:** es el objeto al cual le ocurre el evento o que está asociado a dicho evento
  * **Manejador de evento:** es una función (callback) que maneja o responde a un evento (Se lo conoce también como listener)
  * **Objeto del evento:** es un objecto asoaciado con un evento en particular que contiene detalles sobre el evento. Este objeto es pasado como parámetro de la función que maneja el evento. Las propiedades de este objeto cambian según el tipo de evento que sea. Ejemplo: puedo saber que tecla se presiona o posición del mouse dependiendo del tipo de evento que maneje.
* Existen 2 formas básicas de registrar un manejador de eventos
* Establecer una propiedad en el objeto o document
**Ejemplo:**
```js
var button = document.querySelector('button');
button.onclick = function() {
  // código para manejar que se hace al hacer click en el botón
}
```

#### Ejercicios
[Ejercicio 19](./ejercicios/019.md)

* La otra opción es registr un evento con `addEventListener`
* Este método puede ser aplicado en cualquier objeto, eso incluye window, document y en todos los elementos.
* Este método soporta 2 parámetros:
  * **Tipo de evento:** es un string con el nombre del tipo de evento
  * **Manejador de evento:** es una función que se invoca cuando suceda evento
**Ejemplo:**
```js
var button = document.querySelector('button');
button.addEventListener('click', function() {
  // código que maneja el click del botón
});
```
* Dentro de la función que maneja el evento podemos utilizar la palabra reservada `this` que en ese contexto hace referencia al objeto que ejecutó el evento
**Ejemplo:**
```js
function clickHandler() {
	console.log(this)		// this en este caso apunta al elemento que ejecutó el evento
}

var button = document.querySelector('button');
button.addEventListener('click', clickHandler);
```

#### Ejercicios
[Ejercicio 20](./ejercicios/020.md)

* Para quitar un listener podemos utilizar `removeEventListener`
* Este método puede ser aplicado en cualquier objeto, eso incluye window, document y en todos los elementos
* Este método soporta 2 parámetros:
  * **Tipo de evento:** es un string con el nombre del tipo de evento
  * **Manejador de evento:** es una función que se invoca cuando suceda evento

**Ejemplo:**
```js
function clickHandler() {
	console.log(this)		// this en este caso apunta al elemento que ejecutó el evento
}

var button = document.querySelector('button');
button.addEventListener('click', clickHandler);
button.removeEventListener('click', clickHandler); // este botón no tienen más el menejador de evento
```

* Por medio del objeto event podemos conocer más datos sobre el evento o prevenir que se ejecute el comportamiento por defecto de ejecución
* Para prevenir la ejecución de un evento por defecto utilizamos el método `preventDefault`

**Ejemplo:**
```js
var hipervinculo = document.querySelector('a');
hipervinculo.addEventListener('click', function(evento) {
  evento.preventDefault();  // de esta forma prevenimos que el hipervinculo ejecute su función por defecto
});
```

#### Ejercicios
[Ejercicio 21](./ejercicios/021.md)

* Podemos capturar algunos eventos del mouse, entre los más conocidos se encuentran: `click, dblclick, mouseover, mouseout y mousemove`
* El objeto evento asociado al mouse tiene atributos que nos permite saber la posición donde se encuentra con clientX y clientY

**Ejemplo:**
```js
var body = document.querySelector('body');
body.addEventListener('click', function(evento) {
  evento.clientX;
  evento.clientY;
});
```

* También podemos controlar los eventos que se disparan cuando se presionan las teclas por medio de los eventos `keypress, keydown y keyup`
* El objeto del evento tiene propiedades como `charCode` que nos retorna el número de tecla que fué presionado
* Con el método `String.fromCharCode` podemos saber que letra es

**Ejemplo:**
```js
var body = document.querySelector('body');
body.addEventListener('keypress', function(evento) {
  evento.charCode;
  String.fromCharCode(evento.charCode);
});
```

#### Ejercicios
[Ejercicio 22](./ejercicios/022.md)

#### Lista de eventos que se pueden utilizar:
* Existen muchos eventos que podemos utilizar para crear UI interactivas:
  * onchange
  * onclick / ondblclick / onmousedown / onmousedown
  * onmouseover / onmouseout
  * onkeydown / onkeypress / onkeyup
  * onload
  * onresize
  * onscroll
  * oninput
  * onfocus / onblur

#### Ejercicios
[Ejercicio 23](./ejercicios/023.md)
[Ejercicio 24](./ejercicios/024.md)

#### Formularios
* Los formularios en HTML son una manera muy buena de obtener datos por parte del usuario.
* Por medio de ECMAScript podemos manejar los valores y eventos del formulario como también los de sus elementos
* También podemos validar los datos que el usuario ingresa
* Para poder interactuar con un formulario lo primero que tenemos que hacer es seleccionarlo

**Ejemplo:**
```js
var form = document.querySelector('form');
```

* Otra forma de seleccionar los formularios es por medio del objeto `document` y la propiedad `forms`
* La propiedad forms retorna una colección de todos los formularios que tiene el documento

**Ejemplo:**
```js
  var formulario = document.forms[0];
  var formularios = document.forms;
```

* Los elementos del tipo formulario tienen un atributo llamado `elements` y tiene la colección de elementos que tiene el formulario seleccionado

**Ejemplo:**
```js
var form = document.querySelector('form');
var elementos = form.elements;
// retorna el elemento del formulario que está en el índice indicado
var elemento = form.elements[indice];
```

* El objeto formulario tiene atributos como `action`, `target`, `encoding` y `method`
* Al ser un objeto de Javascript podemos acceder a todos ellos de la misma forma que lo hacemos con cualquier otro objeto
  * **action:** Establece la URL del documento que va a procesar la información enviada por el formulario
  * **encoding:** Establece el tipo MIME con el que se va a encriptar los datos
  * **method:** Establece cual es el método de HTTP que se va a utilizar para enviar los datos. Puede ser get o post
  * **name:** Establece el nombre del formulario

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login"></form>
```
```js
var form = document.querySelector('form');

console.log(form.action); // guardar_usuario.html
console.log(form.encoding); // get
console.log(form.method); // application/x-www-form-urlencoded
console.log(form.name); // login
```

#### Ejercicios
[Ejercicio 25](./ejercicios/025.md)

* Los elementos del formulario tienen un atributo llamado `value` que nos permite establecer u obtener el valor de un elemento
* Con la propiedad value podemos obtener el valor de varios de los elementos de un formulario como por ejemplo:
  * inputs de texto, password, hidden
  * checkbox
  * radio
  * textarea

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="text" id="username" name="username" />
  <input type="password" id="pass" name="pass" />
  <input type="submit" name="submit" value="Enviar" />
</form>
```
```js
var form = document.querySelector('form');
var username = form.elements[0];

username.value; // Obtenemos un string vacío
username.value = 'pepe'; // Establecemos el valor del input username en pepe
```

#### Ejercicios
[Ejercicio 26](./ejercicios/026.md)

* Por medio del evento `submit` del formulario podemos mandar los datos a otro documento
* Podemos cortar la ejecución del `submit` de un formulario retornando un valor `false`

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="text" id="username" name="username" />
  <input type="password" id="pass" name="pass" />
  <input type="submit" name="submit" value="Enviar" />
</form>
```
```js
var form = document.querySelector('form');

form.onsubmit = function() {
	// Este evento maneja la forma en que se va a submitear el formulario
  // Retornamos false para evitar que se ejecute el evento submit del formulario
  return false;
}
```

* Al igual que el resto de los eventos podemos controlar que no se ejecute el evento por default con el método del eventos preventDefault()
**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="text" id="username" name="username" />
  <input type="password" id="pass" name="pass" />
  <input type="submit" name="submit" value="Enviar" />
</form>
```
```js
var form = document.querySelector('form');

form.onsubmit = function(evento) {
  evento.preventDefault();
  return false;
}
```

#### Ejercicios
[Ejercicio 27](./ejercicios/027.md)

* Para poder obtener el valor de un elemento `select` podemos utilizar la propiedad `selectedIndex`
* Esta propiedad retorna el índice numérico de la opción seleccionada
* Otra de las propiedades que tiene el objeto `select` es `options` que retorna la colección de elementos options
* Combinando estos dos atributos podemos obtener el valor del `option` seleccionado en el elemento `select`
* Al igual que el resto de los elementos HTML del formulario, el objeto option tiene un atributo value que nos da el valor del mismo

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <select name="paises" id="paises">
    <option value="ar">Argentina</option>
    <option value="br">Brasil</option>
    <option value="cl">Chile</option>
  </select>
</form>
```
```js
var select = document.querySelector('select');

console.log(select.selectedIndex);  // retorna el índice del valor seleccionado
console.log(select.options);  // retorna la colección de elementos options

select.options[indice]; // retorna el option seleccionado
console.log(select.options[indice].value); // retorna el valor del elemento seleccionado.
```

#### Ejercicios
[Ejercicio 28](./ejercicios/028.md)

* Los elementos `checkbox` tienen la propiedad `value` que nos retorna su valor como ya vimos
* Podemos establecer si un `checkbox` está seleccionado o no utilizando la propiedad `checked`
* Esta propiedad retorna un valor boolean
* También podemos asignarle un valor boolean para establecer su estado

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="checkbox" name="sexo" value="f" checked> Femenino
  <input type="checkbox" name="sexo" value="m"> Masculino
</form>
```
```js
var checkboxes = document.querySelectorAll("input[type='checkbox']")
var femenino = checkboxes[0];
var masculino = checkboxes[1];

console.log(femenino.checked);  // retorna el valor true
femenino.checked = false; // establece un nuevo valor al elemento.
console.log(femenino.value); // f

masculino.checked;  // retorna el valor false
masculino.checked = true; // establece un nuevo valor al elemento.
console.log(masculino.value); // m
```

* Podemos utilizar el selector de css `:checked` para obtener el checkbox seleccionado de la siguiente forma:

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="checkbox" name="sexo" value="f" checked> Femenino
  <input type="checkbox" name="sexo" value="m"> Masculino
</form>
```
```js
var sexo = document.querySelector('input:checked');

console.log(sexo.checked);  // retorna el valor true
sexo.checked = false; // establece un nuevo valor al elemento.
console.log(sexo.value); // f
```

#### Ejercicios
[Ejercicio 29](./ejercicios/029.md)

* Los elementos del formulario pueden manejar eventos por medio de los métodos: onfocus, onblur, onchange, oninput
* También se pueden escribir utilizando el método addEventListener(callback)
  * **focus:** se dispara al establecer el foco en un elemento
  * **blur:** se dispara al remover el foco sobre un elemento
  * **change:** se dispara cuando cambia el valor de un elementos
  * **input:** se dispara al ingresar datos a un elemento

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="text" id="username" name="username" />
  <input type="password" id="pass" name="pass" />
  <input type="submit" name="submit" value="Enviar" />
</form>
```
```js
var form = document.querySelector('form');
var username = form.elements[0];

username.onfocus = function() {
  // código que maneja el focus del elemento
  console.log('Hicieron foco en el campo username');
}

username.onblur = function() {
  // código que maneja el blur del elemento
  console.log('Se perdió el foco del campo username');
}

username.oninput = function() {
  // código que maneja el ingreso de datos a un elemento
  console.log('Están cambiaron el valor del campo username');
}
```

* Por medio del evento `change` podemos manejar el cambio de selección de un elemento select

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <select name="paises" id="paises">
    <option value="ar">Argentina</option>
    <option value="br">Brasil</option>
    <option value="cl">Chile</option>
  </select>
</form>
```
```js
var select = document.querySelector('select');

select.onchange = function() {
  var index = select.selectedIndex;
  var valor = select.options[index].value;
  console.log(index);
  console.log(valor);
}
```

#### Ejercicios
[Ejercicio 30](./ejercicios/030.md)

* Para validar si un campo de texto está vacio podemos combinar la propiedad `value` y la propiedad `length` de los strings

**Ejemplo:**
```html
<form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="text" id="username" name="username" />
  <input type="password" id="pass" name="pass" />
  <input type="submit" name="submit" value="Enviar" />
</form>
```
```js
var form = document.querySelector('form');

form.onsubmit = function(evento) {
  evento.preventDefault();
  var username = form.elements[0];

  if (username.value.length === 0) {
    console.log('Username incorrecto');
    return false;
  }

  return true;
}
```

#### Ejercicios
[Ejercicio 31](./ejercicios/031.md)
