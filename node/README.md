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

### NPM
* NPM Significa Node Package Manager
* Utilizando NPM podemos instalar un montón de módulos de Node y utilizarlos en nuestros programas
* NPM es uno de los repositorios más grande que existen
* Para saber más sobre NPM puden ingresar a [su sitio](https://www.npmjs.com)

![Wombat](https://cdn-images-1.medium.com/max/1600/0*5OiLgiw2SYi1LXEt.)

#### Iniciar un proyecto
* Para iniciar un proyecto en node vamos crear una carpeta con el nombre que quieras y dentro de ella correr el siguiente comando de NPM
* Este comando hace un montón de preguntas pero por ahora podemos ignorarlo y aceptar con enter todos los valores por default

```bash
npm init
```

* Al finalizar este script crea un archivo con el nombre de package.json que no es más que un archivo de configuración en formato JSON

```js
{
  "name": "02-primerEjemploNode",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

* Como podemos ver utiliza las preguntas anteriores para crear y configurar nuestro proyecto y lo escribe en este archivo
* Es decir que podemos modificar estos valores cuando lo necesitemos

#### Configurar scripts de inicio
* Una de las secciones importantes dentro del **package.json** es `scripts` que nos permite crear tareas que podemos correr desde la consola
* Vamos a crear un nuevo script agregando la tarea **start** en la sección `scripts`

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
  "start": "node index.js"
},
```

* Para poder correr esta tarea ejecutamos el siguiente comando desde nuestra consola:

```bash
npm start
```

```bash
Error: Cannot find module 'index.js'
```

* Obtenemos un error similar al ejemplo ya que no existe el archivo **index.js** por lo cual vamos a crearlo
* El archivo index.js tiene que estar al mismo nivel que el archivo package.json para que funcione
* Caso contrario hay que modificar el path del script para que concuerde con la arquitectura de carpetas y archivos que creamos
* Agregamos el siguiente código y volvemos a correr la tarea **start** de NPM

**index.js**
```js
console.log('¡Hola Mundo desde Node.js!');
```

```bash
npm start
> 02-primer-ejemplo-node@1.0.0 start /02-primer-ejemplo-node
> node index.js

¡Hola Mundo desde Node.js!
```

* Podemos ver que de esta forma creamos, configuramos y corremos un script desde NPM

### Módulos
* Un módulo es una forma de encapsular código en una sola unidad de código
* Es decir que vamos a agrupar nuestro código por funcionalidad y lo vamos a poner en un archivo que luego podemos utilizar como módulo
* Node.js tiene un sistema de carga de módulos que es muy fácil de utilizar
* Un archivo puede ser utilizado como un módulo dentro del proyecto y se lo trata de forma individual
* La función `require` acepta un string con el nombre del módulo que queremos utilizar
* Node.js al ejecutar `require` busca si existe el nombre del módulo solicitado dentro de la carpeta node_modules

```js
const modulo = require('nombredelmodulo')
```

* Otra forma de cargar un módulo es utilizando rutas relativas
* Por ejemplo si tengo el archivo index.js y el archivo mi-modulo.js puedo cargar mi-modulo desde el index de la siguiente manera

```js
const modulo = require('./mi-modulo')
```

* Algo a destacar es que al utilizar `require` para cargar un módulo no tenemos la necesidad de establecer que la extensión del archivo es **.js**

### Instalar un módulo
* Utilizando NPM podemos instalar módulos y utilizarlos en nuestros proyectos
* Para lograrlo tenemos que correr desde la consola el comando `install` y el nombre del módulo que queremos instalar
* Por ejemplo vamos a instalar un módulo muy conocido de Node.js que se llama `Express`
* Pueden aprender mucho más sobre `Express` en la [documentaciónd de su sitio](http://expressjs.com)

```bash
npm install express
```

* Al correr la instalación NPM crea una carpeta llamada `node_modules` donde va a guardar todos los módulos que necesitamos instalar para que funcione nuestro proyecto
* La carpeta `node_modules` tiende a crecer mucho y puede ser muy pesada es por eso que vamos a ignorar esta carpeta dentro de la configuración de nuestro repo de GIT
* Esto significa que si alguien más necesita instalar este proyecto tiene que saber la lista de módulos que usa
* Para evitar que esto sea un problema NPM nos permite establecer un parámetro en la instalación de nuestros módulos y guardar una referencia en el archivo package.json
* Borramos la carpeta de `node_modules`
* Volvemos a instalar el módulo de Express pero ahora agregamos el parámetro --save

```bash
npm install express --save
```

**package.json**
```js
"dependencies": {
  "express": "^4.15.4"
}
```

* Podemos ver que en el archivo `package.json` ahora tenemos una sección dependencies donde NPM agrega todas las dependencias que necesita un proyecto
* Volvamos a borrar la carpeta `node_modules` y corramos el siguiente script

```bash
npm install
```

* Al estar configurado `Express` como una dependencia de nuestro proyecto al correr la tarea `npm install` NPM lee las dependencias que tiene en la sección `dependencies` e instala todo por nosotros
* De esta forma otra persona que quiera instalar este proyecto sólo tiene que correr `npm install` para obtener todo funcionando


* Para desinstalar un módulo utilizamos la tarea `npm uninstall` y el nombre del módulo
```bash
npm uninstall express
```
* Hasta ahora todos estos módulos fueron instalados de forma local dentro de un proyecto
* NPM también permite instalar módulos de forma global para poder ser utilizados como programas de nuestro sistema en general
* Es decir que al instalar un módulo de manejar global vamos a poder acceder a él y utilizarlo desde cualquier lado
* Utilizamos la tarea npm install y el parámetro -g para instalar un módulo de manera global
* Instalemos el módulo Express Generator de manera global

```bash
npm install express-generator -g
```

* Por las dudas cerramos y volvemos a abrir nuestra consola y corremos el siguiente comando:

```bash
express --help
```

* Si todo funcionó bien vemos el siguiente listado:

```bash
Usage: express [options] [dir]

Options:

  -h, --help           output usage information
      --version        output the version number
  -e, --ejs            add ejs engine support
      --pug            add pug engine support
      --hbs            add handlebars engine support
  -H, --hogan          add hogan.js engine support
  -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
  -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
      --git            add .gitignore
  -f, --force          force on non-empty directory
```

* Más entrados en esta sección del curso vamos a utilizar este módulo para crear la arquitectura de nuestro proyecto

#### Creando un módulo
* Para entender como funciona un módulo vamos a crear uno primero
* Crear un archivo con el nombre de calcula.js
* Dentro de este archivo vamos a escribir el siguiente código:

**calcular.js**
```js
// guardamos en una constante el % de IVA
const IVA = 0.21;

const calcularPrecio = function(precio) {
  // la función recibe por parámetro un precio y le sumamos el IVA
  return precio + (precio * IVA);
}
// finalmente, exportamos la función
module.exports = calcularPrecio;
```

**index.js**
```js
// importamos nuestro modulo y lo guardamos en una variable
const obtenerPrecio = require('./calcular');
// lo que importamos es la funcion que exportamos en el anterior archivo
// la ejecutamos y obtenemos el precio final con IVA
const precio = obtenerPrecio(200);
// finalmente mostramos en la consola el precio
console.log(precio);
```

* En este ejemplo vemos que creamos un módulo que se llama `calcular`
* Dentro del módulo calcular tenemos una función con el nombre de `calcularPrecio` que nos permite obtener el precio final de un producto sumándole el IVA
* Utilizando el objeto `module.exports` podemos exportar código desde nuestro módulo para que sea utilizado desde cualquier lado
* En el archivo `index.js` utilizamos `require` para incluir el módulo `calculo` dentro de nuestro proyecto
* Al no ser un módulo que instalamos utilizando npm install podemos acceder a él por medio de la ruta relativa `'./calcular'`
* Creamos el nombre obtenerPrecio y le asignamos lo que esta exportando el módulo, en este caso es tan solo una función pero podría ser un objeto o cualquier otro valor
* Luego en el archivo `index.js` utilizamos la función exportada como hicimos hasta ahora con nuestras funciones
* De esta forma toda la lógica de negocio de como obtener un precio final con el IVA incluído queda dentro de nuestro módulo `calcula` y nadie puede modificarlo
* Si alguien más necesitara utilizar este módulo podríamos crearlo como un paquete de NPM

El código del ejemplo se encuentra en `./ejemplos/04-creando-modulo-propio`

### Cómo funcionan los módulos
* Node.js utiliza un patrón llamado módulo para exportar código y utilizarlo desde lo necesitemos
* Al exportar nuestro código Node.js lo mete dentro de una función y de esta forma hace que el scope sea local al módulo y no  a todo el resto del proyecto (las variables son privadas dentro de este módulo y sólo se pueden acceder desde ahí a no ser que nosotros lo exportemos)
* Utilizamos `module.exports` para exportar el código
* Podemos utilizar tan sólo `exports` si queremos de la siguiente manera:

```js
module.exports = calcularPrecio
```

## Servidor Web
* Uno de los usos más comunes de Node.js es para correr servidores web.
* Al crear un servidor web con Node.js vamos a interactuar con los módulos [HTTP/HTTPS](https://nodejs.org/api/http.html)

![Frontend-Backend](https://file-jvoyleouov.now.sh/)


#### Utilizando el módulo HTTP de Node.js podemos crear un servidor web

1. Creá una carpeta llamada `05-http-server-node`.
2. Abrir una terminar y moverse del directorio hasta estar parada sobre la carpeta creada en el punto 1.
3. Ejecutar el comando `npm init` para iniciar un proyecto de Node.
4. Agregar el script `start` en el package.json.
5. Crear el archivo `index.js`
6. Copiar el siguiente contenido dentro del archivo `index.js`
    ```js
    const http = require('http');
    const port = 3000;

    const requestHandler = function (request, response) {
      console.log(request.url);
      response.end('Hola mundo desde un servidor de Node.js!');
    }

    const server = http.createServer(requestHandler);

    server.listen(port, function (err) {
      console.log(`server is listening on ${port}`);
    });
    ```
    * En la primera línea importamos el módulo http, que es propio de Node por lo que no tenemos que instalarlo. Declaramos una variable llamada `http` y guardamos el módulo. Esta variable contiene una función llamada `createServer`, que nos va a permitir crear el servidor web.
    * Para poder crear una instancia de servidor utilizamos el método `createServer`
    * Este método acepta como parámetro una función para manejar los pedidos (request) y respuestas(response) al server
    * Es decir que le vamos a pasar al método `createServer` un callback que se ejecuta en cada request/response
    * Por medio de la función `requestHandler` obtenemos los parámetros `request` para saber datos sobre el pedido y `response` para poder manejar la respuesta
    * La función `requestHandler` se va a ejecutar en cada pedido que le hagamos al server
    * `response.end` envía la respuesta `'Hola mundo desde un servidor de Node.js!'` al cliente que realizó el llamado HTTP
    * Lo único que nos queda por hacer es decirle al servidor que queremos que `escuche (listen)` en un determinado puerto por si llega algún pedido y que meneje la respuesta

    * El método listen acepta 2 parámetros
    * El primero es el puerto a donde tiene que escuchar
    * El segundo es un callback que se va a ejecutar al terminar de levantar el servidor
    * Este método le pasa al callback un parámetro con la descripción de error en caso de que exista uno (por ejemplo si ya hay algún programa corriendo en el puerto indicado)

7. Corremos en la consola el siguiente comando

    ```bash
    npm start
    ```

8. Si todo está bien vemos un mensaje de que el servidor está corriendo en el puerto 3000

    ```bash
    server is listening on 3000
    ```

9. Abrimos el browser y navegamos a la siguiente dirección: localhost:3000
10. Vemos el mensaje `Hola mundo desde un servidor de Node.js!` en pantalla

    * Podemos ver que utilizamos localhost ya que el servidor esta corriendo en nuestro ambiente
    * Utiliza el puerto 3000 ya que nosotros se lo indicamos
    * Si cortamos la ejecución del programa index.js se baja el servidor y ya no vamos a ver la respuesta en localhost:3000
    * El módulo HTTP es de muy bajo nivel y por ende es complejo de utilizar para una aplicación real
    * Es por esto que existen diferentes módulos que corren sobre HTTP para crear proyectos de manera más fácil
    * Los módulos más conocidos son:
      * [Express](http://expressjs.com/)
      * [Hapi](http://hapijs.com/)
      * [Koa](http://koajs.com/)
      * [Restify](http://restify.com/)
    * En esta sección del curso vamos a utilizar Express ya que es el más conocidoy base de todos

### Express
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
* El código del ejemplo se encuentra en `./ejemplos/07-express-sendfile`

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
* El código del ejemplo se encuentra en `./ejemplos/08-express-router`

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

1. Lo primero que hacemos, es crear una carpeta para nuestro proyecto que se llame `11-express-api`
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
const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./routes/api')

app.use(cors())

app.use('/', apiRouter);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
```

**servidor/routes/api.js**
```js
const express = require('express')
const router = express.Router()

// creo un array, donde voy a ir almacenando los emails
// de esta forma la informacion no esta escrita en la web, sino que la guardamos en un servidor, en un lugar central
// y cada vez que entremos a nuestra app web, vamos a poder consultar esa info mediante la API
const movies = [
  { id: 1, title: 'Batman Begins', summary: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.', year: 2005 },
  { id: 2, title: 'The Dark Knight', summary: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.', year: 2008 },
  { id: 3, title: 'The Dark Knight Rises', summary: 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.', year: 2012 }
]

// creo una ruta que devuelve el array de emails
router.get('/api/movies', function (req, res) {
  res.json(movies)
})

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

  <a href="nuevo.html">Agregar nueva película</a>

  <div id="movies">
    <!-- Asi deberia quedar cada div contenedor de una pelicula
      <div class="movie">
        <span class="title">Tempor diam.</span>
        <span class="year">1900</span>

        <button>Ver detalle</button>
        <button>Editar</button>
        <button>Eliminar</button>
      </div>
    -->
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="index.js"></script>
</body>
</html>
```

* Luego agregamos el siguiente código para hacer el llamado por AJAX, obtener la respuesta y crear de forma dinámica los items de productos

**cliente/index.js**
```js
$.ajax('http://localhost:3000/api/movies')
  .done(function (respuesta) {
    // el parametro respuesta es lo que nos contesta el servidor (en este caso el array de las peliculas)
    respuesta.forEach(function (pelicula) {
      $('#peliculas').append(`
        <div class="movie">
          <span class="title">${pelicula.title}</span>
          <span class="year">${pelicula.year}</span>

          <button>Ver detalle</button>
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      `)
    })
  })
```

* De esta forma estamos vinculando archivos del cliente y el servidor
* En cuanto se carga nuestra web, estamos pidiendo a nuestra API que nos devuelva las peliculas que están guardadas en el servidor
* Entonces, no importa si accedemos desde una computadora, un celular, o cualquier otro dispositvo: como siempre estamos usando la misma API, vamos a obtener los mismo datos.

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
app.get('/api/movies/:id', function (req, res) {
  const id = req.params.id

  // Usamos el id para buscar en el array el objeto que tenga ese mismo id
  const movie = movies.find(function (pelicula) {
    return pelicula.id == id
  })

  // si no encontré ninguna pelicula, le devolvemos un estado 404 not found y un mensaje
  if (!movie) {
    return res.status(404).send(`La pelicula con id ${id} no existe.`);
  }

  // respondemos a quien nos pidio la pelicula con el objeto json que encontramos
  res.json(movie)
})
```

* Si navegamos a la ruta: `http://localhost:3000/api/movies/1` ya podemos ver en el browser el JSON del objeto específico
  * Podemos probar las otras url cambiando 1 por 2, 3 y ver que pasa si pasamos un parámetro donde no tenemos valores en el array (por ejemplo 15)

* Vamos a crear una página para ver el detalle de una película

**cliente/detalle.html**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Peliculas</title>
</head>
<body>
  <h2>Pelicula</h2>

  <div id="movie">
    <h3 class="title"><!-- aca vamos a agregar el titulo de la pelicula con js --></h3>
    <small class="year"><!-- aca vamos a agregar el año de la pelicula con js --></small>

    <p class="summary"><!-- aca vamos a agregar el detalle de la pelicula con js --></p>
  </div>

  <a href="index.html">Volver</a>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="detalle.js"></script>
</body>
</html>
```

**cliente/detalle.html**
```js
// obtenemos el id de la pelicula que queremos mostrar
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

// con ajax, vamos a pedirle a nuestra api que nos devuelva la info de una pelicula especifica, pasandole el id como parametro de la url
// una vez que obtuvimos el resultado de ese llamado a la API, asignamos los datos a los elementos del html
// en este caso usamos la ruta de la API que tenía el parámetro /api/movies/:id
$.ajax(`http://localhost:3000/api/movies/${id}`)
  .done(function (data) {
    console.log(data);

    $('#movie .title').text(data.title);
    $('#movie .summary').text(data.summary);
    $('#movie .year').text(data.year);
  });
```

* Cuando vamos a navegar desde la página del listado de películas, a la página con el detalle de la película, necesitamos de alguna forma indicarle a esta nueva página que película queremos mostrar.
* Esto lo podemos hacer mediante los `query params`
* Para esto, primero vamos a agregar la navegación en el botón 'Ver detalle' del index

**cliente/index.js**
```js
$.ajax('http://localhost:3000/api/movies')
  .done(function (respuesta) {
    // el parametro respuesta es lo que nos contesta el servidor (en este caso el array de las peliculas)
    respuesta.forEach(function (pelicula) {
      $('#movies').append(`
        <div class="movie">
          <span class="title">${pelicula.title}</span>
          <span class="year">${pelicula.year}</span>

          <button onclick="verDetalle(${pelicula.id})">Ver detalle</button>
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      `)
    })
  })


// agrego el on click al botton 'ver detalle' para que navegue a la otra pagina
function verDetalle (id) {
  window.location.href = `detalle.html?id=${id}`;
}
```
* Agregamos el onclick al button `<button onclick="verDetalle(${pelicula.id})">Ver detalle</button>`
* Agregamos la función `verDetalle(id)` al final, que recibe como parámetro el ID de la película
* Dentro de la función, solo hacemos un `location.href` para navegar a la nueva página, pero esta vez le agregamos el query param `id` con el ID de la película. Por ejemplo: `?id=1`. Los query params van al final de la URL, después del signo de pregunta `?`
* Este query param es el que obtenemos en `detalle.js` y usamos para ir a buscar los datos de la película que queremos ver.

### Agregar una nueva pelicula - Submit de form por post - Express body y body-parse
* Ahora, vamos a agregar la posibilidad de crear nuevas peliculas
* Para eso vamos a crear una nueva página con un formulario

**cliente/nuevo.html**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Nuev Pelicula</title>
  <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
</head>
<body>
  <h2>Nueva Pelicula</h2>

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

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="nuevo.js"></script>
</body>
</html>
```

**cliente/nuevo.js**
```js
$('#new-movie').click(function () {
  // obtenemos todos los datos de los inputs en el html
  const title = $('input[name="title"]').val()
  const summary = $('textarea[name="summary"]').val()
  const year = $('input[name="year"]').val()

  // creamos el objeto que estamos creando y le vamos a mandar al servidor para que guarde
  const newMovie = {
    title: title,
    summary: summary,
    year: year
  }

  // finalmente, con ajax, le enviamos un HTTP POST al servidor para que guarde el objeto
  // y le pasamos como data el nuevo objeto
  $.ajax('http://localhost:3000/api/movies', {
    method: 'post',
    data: newMovie
  })
    .done(function () {
      // si salió todo bien, volvemos a la pantalla de inicio
      window.location.href = 'index.html'
    })
})
```

* En el onclick, después de obtener los datos de los inputs, le pedimos al servidor que guarde ese objeto nuevo
* Entonces tenemos que crear la ruta POST en el servidor
* Para poder acceder a los valores pasados por POST tenemos que instalar un nuevo módulo llamado `body-parser`
* Este módulo funciona como middleware y agrega los valores pasados por POST a la propiedad `body` del objeto Request
* Instalamos `body-parser` de la siguiente manera

```bash
npm install body-parser --save
```

* Luego de instalarlo tenemos que configurarlo en nuestro proyecto
* Podemos agregar antes de la linea `app.use('/', apiRouter)`

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

**servidor/routes/api.js**
```js
router.post('/api/movies', function(req, res){
  const title = req.body.title
  const summary = req.body.summary
  const year = req.body.year

  const movieToPush = {
    title: title,
    summary: summary,
    year: year
  }

  movies.push(movieToPush)

  res.send(movies)
})
```

* Al mandar los valores por POST los obtenemos utilizando `body`
* Pueden leer más sobre [body-parser en su sitio](https://www.npmjs.com/package/body-parser)