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