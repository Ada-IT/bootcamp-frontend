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
* El código del ejemplo se encuentra en `./ejemplos/10-express-static-files`

## Crear una API rest
* Es una forma de describir la forma en que los programas o los sitios webs intercambian datos.
* El formato de intercambio de datos normalmente es JSON.
* Necesitamos APIs para:
    * Ofrecer datos a aplicaciones que se ejecutan en un celular
    * Ofrecer datos a nuestra propia web/aplicación
    * Consumir datos de otras aplicaciones o sitios Web
* Con Node / Express vamos a poder crear nuestra propia API

Imaginemos que tenemos que desarrollar una aplicación web de un videoclub.
La página web, la interfaz que va a ver el usuario, la vamos a desarrollar con HTML y CSS para que se vea bien, y con Javascript vamos a poder agregarle animaciones e interacción.

Ahora, necesitamos que los datos de las películas estén guardados en algún lugar central. Cada vez que entremos a nuestra web, sin importar desde que dispositivo y en que momento, queremos ver todo lo que tenemos, y que eso se guarde históricamente.

Esos datos van a ser almacenados en el **servidor**, y para que podamos verlos/crearlos/eliminarlos desde la web, vamos a implementar nuestra API. En este contexto, la API (que van a ser rutas creadas en express) son un acceso que damos a los datos que guardamos en el servidor. Y vamos a poder _consumir_ nuestra API mediante requests con ajax.

* Vamos a crear dos carpetas: **cliente** y **servidor**
* Dentro de la carpeta **cliente** vamos a tener todo el código de la página web (html, css y js). Acá simplemente vamos a _consumir_ nuestra API para mostrarle los datos a un usuario, o darle la posibilidad de eliminar / modificar / agregar. La web es simplemente la interfaz con la cual le permito a alguien poder usar los datos que guardamos en el servidor.
* En la carpeta **servidor** vamos a tener un proyecto de Node.js, donde vamos a poner todo el código necesario para gestionar los datos que estamos guardando. En algún lugar vamos a guardar los datos, y vamos a crear las rutas necesarios (los puntos de entrada) para que alguien desde afuera (desde la web) pueda pedirnos esos datos, o que creemos / eliminemos / editemos otros.

1. Lo primero que hacemos, es crear una carpeta para nuestro proyecto que se llame `videoclub`
2. Dentro de esa carpeta, creamos dos nuevas carpetas: `cliente` y `servidor`
3. Entrando a la carpeta servidor, inicializamos un nuevo proyecto de Node.js con `npm init` e instalamos el módulo express con `npm install express --save` y el módulo cors con `npm install cors --save`
4. Creamos un archivo llamado `index.js`, una carpeta llamada `routes` y dentro de esa carpeta un archivo llamado `api.js`.
5. La estructura final, por ahora, quedaría así:
    ```
    .
    ├── cliente
    |   ├── index.html
    |   ├── style.css
    |   └── index.js
    |
    └── servidor
        ├── node_modules
        ├── .gitignore
        ├── package.json
        ├── index.js
        └── routes
            └── api.js
    ```
5. Una vez realizado eso, empezamos con el código:

**servidor/index.js**
```js
// importo los modulos que vamos a estar utilizando
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

// creo el servidor de express
const app = express();

// estas dos lineas, permiten que cuando desde una web nos envien un objeto de JS, express lo lea e interprete automáticamente y nos lo guarde en la propiedad req.body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// para que podamos hacer pedidos a esta api, sin importar desde que dominio hagan ese request
app.use(cors());

// agrego mis rutas
app.use('/', apiRouter);

// porngo el servidor a la escucha
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
```

**servidor/routes/api.js**
```js
const express = require('express');
const router = express.Router();

// creo un array, donde voy a ir almacenando las peliculas
// de esta forma la informacion no esta escrita en la web, sino que la guardamos en un servidor, en un lugar central
// y cada vez que entremos a nuestra app web, vamos a poder consultar esa info mediante la API
const movies = [
  { id: 1, title: 'Batman Begins', summary: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.', year: 2005 },
  { id: 2, title: 'The Dark Knight', summary: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.', year: 2008 },
  { id: 3, title: 'The Dark Knight Rises', summary: 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.', year: 2012 }
];

// creo una ruta que devuelve el array de peliculas
router.get('/api/movies', (req, res) => {
  // respondo al cliente con el array de peliculas
  res.json(movies);
});

// exporto mi modulo router
module.exports = router
```

* Creamos una nueva ruta que devuelve un listado de peliculas en formato JSON
* Ahora vamos a poder llamar desde el cliente usando AJAX al servidor y pedirle que nos mande el listado de peliculas
* Lo vamos a mostrar en pantalla recorriendo la respuesta y armando una lista
* Primero creamos un contenedor en el HTML de la página de productos para poder insertar los nuevos valores que traemos con un llamado de AJAX
* Aclaración del código a continuación: **Todo este código, es del lado del cliente**

**cliente/index.html**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Peliculas</title>
  <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
</head>
<body>
  <h2>Peliculas</h2>

  <div id="movies">
    <!-- Asi deberia quedar cada div contenedor de una pelicula
    <div class="movie" id="${movie.id}">
      <span class="title">${movie.title}</span>
      <span class="year">${movie.year}</span>

      <button class="trigger-view">Ver detalle</button>
      <button class="trigger-delete">Eliminar</button>
    </div>
    -->
  </div>

  <script src="index.js"></script>
</body>
</html>
```

* Luego agregamos el siguiente código para hacer el llamado por AJAX, obtener la respuesta y crear de forma dinámica los items de películas

**cliente/index.js**
```js
// creamos una función que pasándole un película por parámetro, nos retorne el HTML de esa película
const makeMovie = movie => {
  return `
    <div class="movie" id="${movie.id}">
      <span class="title">${movie.title}</span>
      <span class="year">${movie.year}</span>

      <button class="trigger-view">Ver detalle</button>
      <button class="trigger-delete">Eliminar</button>
    </div>
  `;
}

// una función que busca el contenedor de peliculas, y adjunta una nueva película
const addMovie = movie => {
  document.querySelector('#movies').innerHTML += makeMovie(movie);
}

// hacemos el pedido de las películas a la API
fetch('http://localhost:3000/api/movies')
  .then(res => res.json())
  .then(function (movies) {
    // el parametro respuesta es lo que nos contesta el servidor (en este caso el array de las peliculas)

    // por cada película, llamamos a la función que cremos más arriba para ir agregándolas en el DOM
    movies.forEach((movie) => {
      addMovie(movie);
    });
  });
```

* De esta forma estamos vinculando archivos del cliente y el servidor
* En cuanto se carga nuestra web, estamos pidiendo a nuestra API que nos devuelva las peliculas que están guardadas en el servidor
* Entonces, no importa si accedemos desde una computadora, un celular, o cualquier otro dispositvo: como siempre estamos usando la misma API, vamos a obtener los mismo datos

### Obteniendo parametros
* Express nos permite obtener los parámetros enviados en el request de diferentes maneras
* Una de las formas más comúnes de pasar parámetros es utilizando la url
* Por ejemplo si queremos ver la descripción de una pelicula podemos utilizar la url `/api/movies/:id`
* Al establecer estar ruta estamos diciendo que si llamamos al server con una url tipo `/api/movies/3` obtenemos el parámetro id con el valor 3
* Vamos a crear una ruta que nos devuelva una película específica del array `movies`

**servidor/routes/api.js**
```js
// Configuramos la url para que espere un id
// la agregamos antes del module.exports
router.get('/api/movies/:id', (req, res) => {
  const id = req.params.id;

  // Usamos el id para buscar en el array el objeto que tenga ese mismo id
  const movie = movies.find(function (pelicula) {
    return pelicula.id == id;
  });

  // si no encontré ninguna pelicula, le devolvemos un estado 404 not found y un mensaje
  if (!movie) {
    return res.status(404).send(`La pelicula con id ${id} no existe.`);
  }

  // respondemos a quien nos pidio la pelicula con el objeto json que encontramos
  res.json(movie);
});
```

* Si navegamos a la ruta: `http://localhost:3000/api/movies/1` ya podemos ver en el browser el JSON del objeto específico
  * Podemos probar las otras url cambiando 1 por 2, 3 y ver que pasa si pasamos un parámetro donde no tenemos valores en el array (por ejemplo 15)

* Vamos a agregar un modal para ver el detalle de cada película
* Tenemos que agregarlo al final del body, antes del tag `<script>`

**cliente/index.html**
```html
<div class="modal">
  <div class="modal-content">
      <span class="close-button">&times;</span>

      <h3 class="title"><!-- aca vamos a agregar el titulo de la pelicula con js --></h3>
      <small class="year"><!-- aca vamos a agregar el año de la pelicula con js --></small>
      <p class="summary"><!-- aca vamos a agregar el detalle de la pelicula con js --></p>
  </div>
</div>
```

* Dentro del fetch, después de que hicimos el **forEach**, vamos a llamar a una nueva función `configureEvents` que va a configurar el `onclick` para abrir el modal de la película.

**cliente/index.js**
```js
fetch('http://localhost:3000/api/movies')
  .then(res => res.json())
  .then(function (movies) {
    // el parametro respuesta es lo que nos contesta el servidor (en este caso el array de las peliculas)
    movies.forEach((movie) => {
      addMovie(movie);
    });

    configureEvents();
  });

// esta función sirve para agregar el onclick sobre el boton para abrir el modal
const configureEvents = () => {
  // configuro el boton para abril el modal con la información de la pelicula
  const triggersEdit = document.querySelectorAll(".trigger-view");
  triggersEdit.forEach(trigger => trigger.addEventListener("click", openModal));
}

// esta función la ejecutamos cuando hacemos click en el boton para ver el detalle de una película
const openModal = e => {
  // buscamos el id de la película, que lo dejamos en un atributo del elemento
  const movieId = e.target.closest('.movie').id;

  // hacemos un pedido a la API para traernos los datos específicos de esa película
  fetch(`http://localhost:3000/api/movies/${movieId}`)
    .then(res => res.json())
    .then(movie => {
      // modificas todos los elementos del modal con la información de la película
      document.querySelector('.modal .title').innerText = movie.title;
      document.querySelector('.modal .summary').innerText = movie.summary;
      document.querySelector('.modal .year').innerText = movie.year;

      // muestro el modal
      toggleModal();
    });
}

// configuro el botón para cerrar el modal
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", toggleModal);

// esta función muestra/oculta el modal
const toggleModal = () => document.querySelector(".modal").classList.toggle("show-modal");
```

* Cuando vamos a abrir el detalle desde la página del listado de películas necesitamos alguna forma de obtener sobre que película en particular estamos haciendo click
* Una solución para esto, es agregar ese identificador único de la película como un atributo en el HTML
* Por eso, cuando generamos el HTML de cada película, agregamos lo siguiente `<div class="movie" id="${movie.id}">`
* Cuando hacemos click en el botón, lo que hacemos es buscar el elemento padre que tiene ese atributo id, y nos lo guardamos en una variable `e.target.closest('.movie').id;`
* Una vez que obtuvimos el ID, hacemos un `fetch` a nuestra API
* El **endpoint** al que le pegamos con el fetch, es el que nos devuelve específicamente los datos de una sola película `http://localhost:3000/api/movies/:id`
* Una vez que la API nos responde, modificas el HTML y mostramos el modal llamando a la función `toggleModal()`

### Agregar una nueva pelicula - Submit de form por post - Express body y body-parse
* Ahora, vamos a agregar la posibilidad de crear nuevas peliculas
* Para eso vamos a agregar un formulario en el HTML. Podemos agregar antes o después del listado de películas
* Vamos a tener un input para el título, otro para la descripción y uno más para el número

**cliente/index.html**
```html
<form id="new-movie">
  <label for="title">Titulo</label>
  <input type="text" id="title" name="title">

  <label for="summary">Descripción</label>
  <textarea id="summary" name="summary"></textarea>

  <label for="year">Año</label>
  <input type="text" id="year" name="year">

  <!-- importante el type="button" -->
  <button type="button">Guardar</button>
</form>
```

* En el `index.js` vamos a agregar una función con la que vamos a hacer un request, para pedirle al servidor que guarde una nueva película
* También configuramos el `onclick` sobre el botón del formulario para que, una vez completados los datos de cada input, al hacer click ejecutemos esta función donde hacemos un HTTP POST a `/api/movies`
* Una vez que la API nos responde OK, agregamos esa nueva película al DOM (reutilizando la función que teníamos más arriba `addMovie`) y configuramos el evento para abrir el modal sobre esa película

**cliente/index.js**
```js
const saveMovie = () => {
  // obtenemos todos los datos de los inputs en el html
  const title = document.querySelector('input[name="title"]').value;
  const summary = document.querySelector('textarea[name="summary"]').value;
  const year = document.querySelector('input[name="year"]').value;

  // creamos el objeto que estamos creando y le vamos a mandar al servidor para que guarde
  const newMovie = {
    title: title,
    summary: summary,
    year: year
  }

  // finalmente, con ajax, le enviamos un HTTP POST al servidor para que guarde el objeto
  // y le pasamos como data el nuevo objeto
  fetch('http://localhost:3000/api/movies', {
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMovie)
  })
  .then(res => res.json())
  .then(newMovie => {
    // agrego la película al DOM
    addMovie(newMovie);
    // configuro el onclick del modal
    configureModals();
  })
}

const saveButton = document.querySelector("#new-movie button");
saveButton.addEventListener('click', saveMovie);
```

* En el onclick, después de obtener los datos de los inputs, le pedimos al servidor que guarde ese objeto nuevo
* Entonces tenemos que crear la ruta POST en el servidor
* Para poder acceder a los valores pasados por POST tenemos que usar un nuevo módulo llamado `body-parser`
* Este módulo funciona como `middleware` y agrega los valores pasados por POST a la propiedad `body` del objeto Request
* Tenemos que configurarlo en nuestro proyecto
* Tenemos que agregar el siguiente código antes de la linea `app.use('/', apiRouter)`

**servidor/index.js**
```js
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

* Primero requerimos el módulo y luego configuramos el middleware utilizando el método `use` de Express
* Agregamos `urlencoded` y `json` para poder configurar la forma en que body-parser parsea los datos
* Al configurar este módulo obtenemos que en cada request que llegue por POST podamos acceder a los datos utilizando la propiedad `body` del objeto Request
* Dado que nos mandan los valores por POST podemos obtenerlos usando `body`
* Ahora necesitamos manejar el request usando una nueva ruta por POST
* Agregamos una nueva **ruta** antes del `module.exports`

**servidor/routes/api.js**
```js
router.post('/api/movies', (req, res) => {
  // me guardo todas las propiedades que me llegaron desde un cliente
  const title = req.body.title;
  const summary = req.body.summary;
  const year = req.body.year;

  // es necesario que cada película nueva, tenga una propiedad ID, para identificarla univocamente
  // esta propiedad por lo general es numérica
  // para eso, lo que hacemos es buscar al última película, y le sumamos 1 a ese ID
  let nextId = 1;
  if (movies.length > 0) {
    nextId = movies.slice(-1)[0].id;
  }

  // creamos el nuevo objeto a pushear en el array
  const movieToPush = {
    id: nextId,
    title: title,
    summary: summary,
    year: year
  };

  // agregamos la nueva película a nuestro array de películas (que sería nuestra "base de datos")
  movies.push(movieToPush);

  // y le respondemos al cliente con el objeto de la película recién creado
  res.json(movieToPush);
});
```

* Al mandar los valores por POST los obtenemos utilizando `body`
* Pueden leer más sobre [body-parser en su sitio](https://www.npmjs.com/package/body-parser)

* A este punto, nuestra aplicación tiene 3 endpoints:
  * GET   /api/movies -> devuelve la lista de películas guardadas
  * GET   /api/movies/:id -> devuelve la película cuyo ID es igual al que nos llegan en el parámetro `:id`
  * POST  /api/movies -> agrega una nueva película a nuestro array de películas guardadas