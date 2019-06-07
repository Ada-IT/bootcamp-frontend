# Node.js

Cuando empezamos con el desarrollo web, es común comenzar con la parte html, css y javascript. Una vez dentro de este mundo comenzamos a descubrir que existen otros términos como pueden ser backend y fullstack, entre muchos otros, los cuales no son nada más que una forma general de llamar a las diferentes áreas necesarias para poder crear una aplicación web.

El **backend** hace referencia al código que corre del lado del servidor y, a diferencia del frontend, este suele presentarse en una serie de diferentes colores y sabores de lenguajes, algunos ejemplos: Java, Python, Ruby, **Javascript**, Go, Rust, etc. Cada uno de estos lenguajes tienen sus respectivos interpretes/compiladores y sus propias herramientas y frameworks. En esta ocasión nos enfocaremos únicamente en **Node.js** y cómo nos permite desarrollar backend usando el conocimiento en Javascript que ya poseemos.

## ¿Qué es backend?
El backend generalmente consiste de tres partes: un servidor, una aplicación (un programa) y una base de datos.
Ejemplo: Si compramos una entrada para un recital, normalmente abrimos la página web e interactúamos con su interfaz. Una vez que ingresamos toda la información necesaria, la aplicación la guarda en una base de datos que se creó en el servidor.

Para mayor facilidad, imaginemos que esa base de datos es como una hoja de Excel gigante, guardada en una computadora (servidor) que se encuentra en algún lugar lejano del mundo.

Toda esa información permanece en el servidor, de modo que cuando volvamos a iniciar sesión en la página web para imprimir las entradas, todos los datos van a estar ahí en nuestra cuenta.

## ¿Qué es Node.js?
En términos simples, se trata de una plataforma de código abierto y libre de JavaScript para la programación del lado del servidor, que nos va a permitir crear aplicaciones rápidamente.

* Node.js nos permite ejecutar Javascript en distintos ambientes y con esto realizar distintas tareas
* Dentro de las tareas que podemos realizar se destacan las siguientes:
  * Correr un simple script
  * Correr el build de nuestro frontend: Gracias a varios módulos que hay disponibles podemos utilizar Node.js como entorno para generar los archivos finales que vamos a deployar en nuestro hosting
  * Correr un servidor web
  * Conectarnos a motores de bases de datos
* En esta parte del curso nos vamos a enfocar en utilizar Node.js para crear un servidor web y poder crear páginas dinámicas en lugar de estáticas como hicimos hasta ahora (con HTML y CSS)
* Al instalar Node.js también se instala otro programa llamado **NPM**

#### Ejemplo 1
Creamos un archivo `index.js` y copiamos el siguiente contenido.
```js
console.log('¡Hola Mundo desde Node.js!')
```
Abrimos una terminal, nos movemos de directorio hasta la carpeta donde guardamos el archivos y ejecutamos: `node index.js`. Vas a ver en la consola impreso el mensaje del console.log().

El código de ejemplo se encuentra en: `./ejemplos/01-helloWorld`

### **Ejecutar Scripts de Node.js**

**Node** es un lenguaje y entorno interpretado, no compilado. Hay tres formas principales de ejecutar código de node:

1. REPL
2. Opción **eval**
3. Lanzar código de node desde un archivo

#### Ejecutar código Node desde un archivo

Este es el caso de uso más común porque nos permite guardar programas largos de Node, y ejecutarlos. Para ejecutar un script de Node.js desde un archivo, simplemente escriba `node [NOMBRE_ARCHIVO]`.

Por ejemplo, para correr el código de un archivo `app.js`, que se encuentra en la carpeta actual, simplemente tenemos que ejecutar:
```cmd
  node app.js
```

El archivo tiene que estar en la misma carpeta. Si necesitamos ejecutar código desde un archivo que está en una carpeta diferente, necesitamos agregar la ruta relativa o absoluta:

```cmd
node ./app/server.js
node /var/www/app/server.js
```

El `.js` es opcional siempre que tenga un archivo con esa extensión. En otras palabras, si tenemos el archivo `server.js` puede ejecutar **`node server`**.

### **Node.js Globals**

A pesar de estar creado siguiendo un estándar, Node.js y JavaScript del navegador se diferencian en lo que se refiere a variables globales.
Por ejemplo, en el navegador tenemos un variable/objeto `document`. Sin embargo, en Node.js, no existe (ya que no tratamos con el DOM del navegador), pero si vamos a tener a disposición otras globales / palabras claves:

- process
- global
- module.exports and exports

Vamos a ver las principales diferencias entre Node.js y JavaScript.

#### **global**

Tenemos una variable llamada `global`, que es accesible desde cualquier programa o archivo de Node. Esta se refiere al objeto global, y tiene diferentes propiedades como: `global.process` o `global.require` o `global.console`.

Cualquier propiedad del primer nivel dentro del objeto `global`, es accesible sin agregar el prefijo `global`. Por ejemplo, `global.process` es igual a `process`.

#### **Principales propiedades globales**

Estas son las principales propiedades del objeto `global` y se conocen como `globals`:

- process
- require()
- module and module.exports
- console and console.log()`
- setTimeout() and setInterval()
- __dirname and __filename

`console.log()` y `setTimeout()` funcionan similar a los métodos del navegador. Ahora nos vamos a centrar en ver `process`, `require()` y `module.exports`.

#### **__dirname, __filename** y **process.cwd**

`__dirname` es un path absoluto al archivo desde donde estamos utilizando alguna variable **global**.

`process.cwd` es el path absoluto desde donde ejecutamos nuestra aplicación de Node.


`__filename` es similar a __dirname solo que tiene concatenado el nombre del archivo desde donde utilizamos la variable.

Código de ejemplo en: [`./ejemplos/02-globals`](./ejemplos/02-globals)

#### **Node.js process**

Cada archivo de Node.js que ejecutamos es un **proceso**.

Podemos acceder a información importante sobre este proceso utilizando el objeto global `process`. Por ejemplo, en la consola podemos ejecutar `node -e "console.log(process.pid)"` y veríamos algo como `95716`.

Otra información importante sobre este proceso es:

- env: Variables de entorno
- argv: argumentos de la línea de comando
- exit(): método para terminar el proceso

Veamos cada una por separado.

**env: Variables de entorno**

Las variables de entorno son accesibles mediante el atributo `env`:

```js
console.log(process.env);

// { TERM_SESSION_ID: 'w0t1p0:5F3F2BB6-0F80-4CBD-A640-8FECECA11D21',
//   SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.H1OjgEfM8Z/Listeners',
//   Apple_PubSub_Socket_Render: '/private/tmp/com.apple.launchd.Xdne1YeBVQ/Render',
//   COLORFGBG: '15;0',
//   ...
// }
```

Las variables de entorno se utilizan para definir parámetros básicos en la configuración de los programas, y que estos se ejecuten en diferentes ambientes sin tener que editar el código fuente del script. Su uso es habitual porque los programas se pueden ejecutar en diferentes ordenadores.

Entre los valores más habituales que pueden cambiar entre diferentes entornos, puede ser por ejemplo:
- usuario y contraseña para enviar emails
- claves para acceders a APIs
- etc.

Estos valores tenemos que definirlos al ejecutar el programa.

Una forma breve de configurar variables de entorno en la terminal/consola, y después ejecutar un script de Node es, por ejemplo, la siguiente:


```cmd
NODE_ENV=development node -e "console.log(process.env.NODE_ENV)"
```

`NODE_ENV` es una convención. Algunos valores comunes son:

- **development**
- **production**

**Argumentos de la línea de comandos**

Para acceder a los argumentos que escribimos en la consola al momento de ejecutar nuestro programa de Node, podemos utilizar la propiedad `process.argv`, que es un array.

Por ejemplo, si el comando es
```cmd
node app.js arg1 arg2 arg3=val3
```

Los primeros dos argumentos van a ser `node` y el nombre de la aplicación, mientras que el resto de los elementos del array son los argumentos que escribimos.
Por ejemplo:

```js
console.log(process.argv);

// [
//   'node',
//   'app.js',
//   'arg1',
//   'arg2',
//   'arg3=val3'
// ]
```

Código de ejemplo en: [`./ejemplos/04-process.argv`](./ejemplos/04-process.argv)

### **Módulos**

[Ir a Módulos](./modulos/README.md)

### **NPM**

[Ir a NPM](./npm/README.md)

## **Servidor Web**
* Uno de los usos más comunes de Node.js es para correr servidores web.
* Al crear un servidor web con Node.js vamos a interactuar con los módulos [HTTP/HTTPS](https://nodejs.org/api/http.html)

![Frontend-Backend](https://file-jvoyleouov.now.sh/)

#### Utilizando el módulo HTTP de Node.js podemos crear un servidor web

Si bien Node.js puede ser usado para una gran variedad de tareas, su uso primario es para crear aplicaciones web. Node _prospera_ en redes como resultado de su naturalez asíncrona y los módulos del núcleo (como **http**). Node es excelente para crear servidores web rápidos y eficientes.

Vamos a ver un ejemplo sencillo de un servidor web.
En el ejemplo vamos a crear un objeto **server**, definir un manejador de requests (una función con un parámetro `req` y `res`), y enviarle alguna información a quien nos hizo un pedido.

```js
const http = require('http');
const port = 3000;

// creamos la funcion que maneja los pedidos
const handle = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hola Mundo, no está trucado!');
};

// creamos el objeto servidor
const server = http.createServer(handle);

// ponemos el servidor a escuchar pedidos
server.listen(port, err => {
  if (err) {
    return console.log('explotó algo al poner el server a la escucha', err)
  }

  console.log(`el servidor esta a la escucha en el puerto ${port}`)
});
```

Vamos a separar el código en pedazo más chicos.

El siguiente código carga el módulo **http**, con el que vamos a poder crear el servidor:
```js
const http = require('http');
```

Abajo, estamos definiendo la función que va a manejar los pedidos que nos lleguen, que tiene dos parametros: `res` y `res`.
```js
const handle = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo!');
};
```
Los parámetros `req` y `res` tienen toda la firmación sobre el pedido y la respuesta HTTP.

Para configurar el tipo de respuesta que le queremos devolver a quien nos hizo un pedido, utilizamos el siguiente código:
```js
res.writeHead(200, { 'Content-Type': 'text/plain' });
```

Para enviar el mensaje **Hola mundo!**, usamos:
```js
res.end('Hola Mundo!');
```

El fragmento de código a continuación, crea un servidor con la función de callback que contiene el código para manejar los pedidos (creada anteriormente):
```js
const server = http.createServer(handle);
```

Para poner el servidor a la escuchar (poder aceptar pedidos), tenemos que hacer:
```js
server.listen(port);
```

Ahora, en una terminal/consola paradas donde tenemos el archivo `server.js` podemos ejecutar el siguiente comando para iniciar nuestro servidor:
```cmd
node server.js
```

Ahora que tenemos nuestro servidor funcionando podemos abrir una pestaña de nuestro navegador, escribir en la barra de direcciones **localhost:3000** y vamos a ver el mensaje **Hola mundo!**.

Para cortar/matar al proceso servidor, tenemos que apretar `CTRL + C` en la terminal.

La función de callback que pasamos como parámetro al ejecutar `createServer`, se va a ejecutar cada vez que nos llegue un pedido a este servidor.

El código de ejemplo se encuentra en: `./ejemplos/06-httpServer`. Para ejecutar, hay que abrir una terminal en esa carpeta y ejecutar `npm start`

Para más información del módulo **http**:
- https://nodejs.org/api/http.html
- https://nodejs.org/api/http.html#http_class_http_server




### **Express**

* Express es un framework web que nos permite hacer las siguientes tareas:
  * Nos permite manejar cualquier tipo de pedido HTTP (hasta ahora solo usamos GET)
  * Podemos crear rutas específicas
  * Integrar motores de render para crear vistas dinámicas (html creado con datos)
  * Crear `middleware` para procesar los pedidos a nuestro gusto **(feature más importante)**
  * Mucho más
* Express es un framework minimalista por lo cual nos da la base para poder tener un server y vamos a utilizar otros módulos para casos específicos como manejar una session, cookies y hasta manejar los datos que nos lleguen por POST
* Algunos [módulos son mantenidos por el equipo de Express](http://expressjs.com/en/resources/middleware.html)
* Express nos da la oportunidad de configurar todo a nuestro modo y eso nos da mucha flexibilidad a la hora de crear un proyecto
* Si bien esto es un beneficio también tenemos que aprender que módulos queremos usar y cómo vamos a crear la arquitectura del servidor
* No existe una receta única para resolver un problema con Express

### Crear un servidor

* En general un servidor web es una aplicación que escucha en un puerto por pedidos HTTP
* Al recibir un pedido tiene configurado que tiene que hacer para generar una respuesta
* Estos request pueden tener datos como pueden ser el id de un producto, un criterio de busqueda o el username y password de un usuario
* Con estos datos el servidor puede interactuar con una base de datos o no según el caso
* Si el servidor tiene que mandar un response con un documento HTML lo puede hacer de manera estática (como venimos haciendo hasta ahora)
* También puede leer datos de una base de datos, crear un documento HTML de forma dinámica (utilizando los datos) y mandar ese documento como respuesta al cliente
* Para crear los documentos HTML dinámico se pueden utilizar motores de template
* Express nos permite manejar las rutas para cada request y configurar como tiene que ser la respuesta
  * Configurar donde estan los archivos
  * Qué template se tiene que usar en cada oportunidad
  * Qué motor de template vamos a utilizar
  * Dónde van a estar guardados los archivos estáticos que queremos utilizar
* Para el resto de las tareas vamos a agregar módulos específicos

**Ejemplo:**
```js
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  response.send('Hola mundo desde un servidor con Express!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
```

* En este ejemplo vemos como crear un server con Express
* Importamos el módulo Express que nos exporta una función y la asignamos a una variable
* Por medio de la función express() creamos una nueva instancia de nuestro servidor
* Con el método `get` configuramos una ruta en la raíz de nuestro sitio `/`
* Utilizamos el método listen para configurar el puerto donde queremos levantar el server y un callback que se ejecuta al terminar de levantar el servidro
* Al correr este script podemos ver nuestro sitio en `localhost:3000`

### Crear rutas - GET
* Con Express podemos crear rutas de forma muy fácil
* Utilizamos el método `get` para obtener requests por `HTTP GET`
* Este método recibe un string como primer parámetro especificando la ruta que queremos manejar (Ejemplo la raíz de nuestro sitio '/')
* Como segundo parámetro le pasamos un callback con la función que tiene que ejecutar cuando se llame a la ruta configurada
* Este callback recibe los objetos `req` y `res` como parámetro
* El objeto `res` tiene un método `send` para enviar una respuesta

**Ejemplo:**
```js
app.get('/', function(req, res) {
  res.send('Hello World!');
});
```

* El objeto de Express tiene múltiples métodos para manejar `requests` para todos los verbos de HTTP

**Ejemplo:**
```js
app.post('/', function(req, res) {
  res.send('Utilizamos el método post para manejar un request por HTTP POST');
});

app.put('/', function(req, res) {
  res.send('Utilizamos el método put para manejar un request por HTTP PUT');
});

app.delete('/', function(req, res) {
  res.send('Utilizamos el método delete para manejar un request por HTTP DELETE');
});
```

* De esta forma podemos crear las rutas que necesitamos para nuestro proyecto

**Ejemplo:**
```js
app.get('/productos', function(req, res) {
  res.send('Mostramos una lista de productos');
});

app.post('/productos', function(req, res) {
  res.send('Creamos un Producto');
});

app.put('/productos/:id', function(req, res) {
  res.send('Actualizamos un Producto');
});

app.delete('/productos/:id', function(req, res) {
  res.send('Borramos un Producto');
});
```

* Utilizando el browser sólo podemos hace llamados por GET
* Existe una herramienta llamada [Postman](https://www.getpostman.com/) que nos permite hacer cualquier tipo de llamado y ver la respuesta
* Configuramos la url que queremos utilizar
* Usamos el botón de send para hacer un `request`
* Vemos la respuesta en la parte inferior
![Postman](https://github.com/nisnardi/comunidad-it-js/raw/master/assets/node/postman1.png)

* Postman también nos da información sobre el status de nuestro `request` (ejemplo: 200)
* Podemos ver los encabezados enviados y recibidos
* También podemos realizar distintos tipos de llamados como pueden ser POST, PUT, DELETE, etc
![Postman](https://github.com/nisnardi/comunidad-it-js/raw/master/assets/node/postman2.png)

* **El código del ejemplo se encuentra en `./ejemplos/07-expressApi`**

### Manejar la respuesta
* Por medio del objeto `res` podemos acceder a distintos métodos para enviar una respuesta al cliente
* Podemos configurar desde retornar un JSON para un llamado de API hasta enviar un documento HTML estático o dinámico
* En el [sitio de Express](https://expressjs.com/en/guide/routing.html#response-methods) podemos ver todos los tipos de respuesta que podemos utilizar

**JSON**
* El método `json` nos permite enviar una respuesta del tipo JSON
* Acepta un objeto y lo transforma a formato JSON
* También envía todos los `headers` correctos para decirle al cliente que la respuesta está en formato JSON

**Ejemplo:**
```js
app.get('/', function(req, res) {
  res.json({ nombre: 'Ada', edad: '40'});
});
```

**sendFile**
* Podemos retornar cualquier tipo de archivo utilizando el método `sendFile`
* Este método nos permite retornar por ejemplo un archivo HTML específico

**Ejemplo:**
```js
const express = require('express')
const app = express()
const path = require('path')

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
```

* Para poder enviar un archivo tenemos que especificar la ruta absoluta del documento
* Usamos el módulo `path` de node para crear la ruta
* Existe una variable especial `__dirname` que nos permite obtener la ruta absoluta al directorio donde se esta ejecutando un script
* Por medio del método `join` podemos concatener la ruta del directorio (`__dirname`) y el nombre de nuestro archivo HTML

### Router
* Por medio del concepto de `router` podemos configurar nuestras rutas de mejor forma
* Si nuestro sitio crece mucho puede ser complejo leer y mantener las rutas de todo el sitio

**Router de nuestra Home**
```js
// archivo routes/index.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Usamos el método GET');
});

router.post('/', function(req, res) {
  res.send('Usamos el método POST');
});

module.exports = router;
```

**Montamos el router**
```js
// archivo index.js
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')

app.use('/', indexRouter)
```

* En este ejemplo vemos que podemos utilizar el concepto de `Router` para crear nuevas rutas de nuestro sitio
* En un módulo creado por nosotros podemos agrupar todas las rutas que queremos según nuestro criterio
* Luego importamos los distintos módulos de ruta que armamos y los montamos en la dirección que queremos

### Manejo de status y errores
* El objeto response tiene el método status que nos permite establecer el código de HTTP que queremos mandar como respuesta
* Si no establecemos ninguno por default es 200
* Acepta un number como parámetro
* Podemos encadenar otros llamados

**Ejemplo:**
```js
app.get('/', function(request, response) {
  res.status(200).json({ nombre: 'Pepe', apellido: 'Martin'});
});

app.get('/error', function(request, response) {
  res.status(500).send('Server error');
});
```

* En este ejemplo vemos que podemos establecer el código de HTTP para el status de la respuesta
* Para manejar el status 404 podemos crear el siguiente manejador de rutas

**Ejemplo:**
```js
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
```

* De esta forma establecemos que Express intente manejar las rutas y en caso de no encontrar el documento significa que no existe
* Por eso podemos establecer el código de status en 404 y mandar la respuesta que necesitemos con el mensaje de error
* Por otro lado Express tiene una manera de manejar los errores
* Para esto tenemos que agregar la siguiente configuración:

**Ejemplo:**
```js
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

* Podemos ver que es bastante similar pero le agrega un par de parámetros más
  * El primer parámetro es el error, de esta forma podemos saber que pasóß
  * El segundo parámetro es el objeto `request` que es el mismo que vamos a utilizar dentro de las rutas
  * El tercer parámetro es el objeto `response` que también es el mismo que vamos a utilizar dentro de las rutas
  * Finalmente obtenemos un callback llamado next que nos permite seguir el flujo de filtros que aplica express
* Con esta configuración si hay algún error lo vamos a poder atrapar y responderle al usuario correctamente
* Es una buena práctica agregar estas dos configuración (404 y 500) a nuestro servidor de Express
* Ambos callbacks que le pasamos al método `use` se llaman `middleware` y nos dan muchas opciones a la hora de configurar nuestro servidor

### Middleware
* El concepto de middleware en Express no es más que un callback que se puede configurar para que se ejecute en algún momento
* Estos middlaware nos dejan modificar el objeto `request` y `response`
* Gracias a esta arquitectura podemos agregarle funcionalidad a nuestro servidor de express ya sea creando nuestros propios middlawares o usando algunos ya existentes
* Express tiene una gran cantidad de middlawares que se pueden configurar
* Para entender mejor este concepto vamos a ver un ejemplo

**Ejemplo:**
```js
const express = require('express');
const app = express();

const miMiddleware = function(req, res, next) {
  console.log('paso por un middlaware')
  next()
}

app.use(miMiddleware);

app.use('/someroute', miMiddleware);

app.get('/', miMiddleware);

app.listen(3000);
```

* En este ejemplo creamos una nueva función que acepta 3 parámetros y la asignamos a la variable miMiddleware
* En la firma de esta función encontramos los siguientes parámetros:
  * req: es el objeto `request`
  * res: es el objeto `response`
  * next: es un callback que nos permite llamar al próximo middleware
* Dentro de la función `miMiddleware` vemos que mostramos un mensaje en consola y luego llamamos a `next()`
* De esta forma podemos crear como una cadena de filtros de middlewares que se llaman los unos a los otros en el orden que nosotros los fuimos configurando
* Por medio del método `use` podemos configurar un middleware
* Podemos establecer que se use para todos los llamados como en el ejemplo de `app.use(miMiddleware)`
* También lo podemos configurar para que se aplique tan solo en una ruta como vemos en el ejemplo `app.get('/', miMiddleware)`
* Y hasta lo podemos configurar para usarlo tan solo en una ruta y en un sólo verbo de HTTP como es el caso de `app.get('/', miMiddleware)`
* El código del ejemplo está en `./ejemplos/09-express-middleware`
* También podemos configurar y utilizar un middleware desde un módulo de la siguiente forma

**Ejemplo:**
```js
const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
```

* En este ejemplo estamos configurando un módulo llamado [morgan](https://github.com/expressjs/morgan) como middleware de nuestro servidor
* Este middleware logea los llamados que le hacen a nuestro servidor
* Podemos ver en el sitio del módulo que es muy fácil de configurar y usar
* De esta forma podemos buscar otros módulos que le agreguen funcionalidad a nuestro servidor
* Para saber más sobre middleware pueden ingresar al [sitio de Express](https://expressjs.com/es/guide/writing-middleware.html)

### Contenido estático
* Express permite configurar carpetas para servir contenido estático sin tener que pasar por un controlador de ruta
* Es decir que si entramos a una ruta que express no maneja se va a fijar si existe como contenido estático
* Esta funcionalidad nos viene super bien para poder agregar archivos js para el cliente, css, imágenes o archivos html estáticos
* Una buena forma de ir armando la arquitectura de nuestro servidor es servir todos los archivos desde una misma carpeta
* Dado que es contenido estático y público podemos crear la carpeta `public` para este propósito

* En cuanto tenemos la carpeta creada podemos configurar Express usando el método `static`

**Ejemplo:**
```js
const express = require('express')
const app = express()
app.use(express.static('public'));
```

* En este ejemplo configuramos la carpeta public como contenedor de nuestros assets estáticos
* Es decir que podemos llamar al server de la siguiente forma y obtener una respuesta automática manejada por Express
* No tenemos que definir rutas específicas (get, post, etc) para el contenido estático ya que siempre es por get
* Si dentro de la carpeta public tenemos carpetas, img, css, js para nuestros archivos podemos llamar al server de la siguiente manera:
  * http://localhost:3000/img/logo.png
  * http://localhost:3000/js/script.js
  * http://localhost:3000/css/style.css
  * http://localhost:3000/productos.html
* Como podemos ver en los ejemplos nos crea por default un acceso al raiz del sitio
* Podemos configurar cómo se acceden a los assets de la siguiente manera:

**Ejemplo:**
```js
const express = require('express')
const app = express()
app.use('/assets', express.static('public'));
```
* En este ejemplo le decimos a express que utilice la url `/assets` para los archivos que estan dentro de la carpeta `public`
* Dada la nueva configuración accedemos a los assets de la siguiente manera:
  * http://localhost:3000/assets/img/logo.png
  * http://localhost:3000/assets/js/script.js
  * http://localhost:3000/assets/css/style.css
  * http://localhost:3000/assets/productos.html
* Como beneficio podemos utilizar cualquier carpeta para nuestro contenido estático
* No le estamos dando información al usuario sobre nuestra arquitectura
* Podemos cambiar la carpeta en cualquier momento con tan solo mantener la ruta donde montamos el contenido
* También podemos configurar más de una carpeta
* En caso de que Express no encuentre el asset requerido va a seguir buscando en las otras carpetas

**Ejemplo:**
```js
app.use(express.static('public'));
app.use(express.static('otracarpeta'));
```

* En este caso Express intenta primero buscar en la carpeta `public` y luego en la `otracarpeta`

