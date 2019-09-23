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

### Cómo funcionan los módulos
* Node.js utiliza un patrón llamado módulo para exportar código y utilizarlo desde lo necesitemos
* Al exportar nuestro código Node.js lo mete dentro de una función y de esta forma hace que el scope sea local al módulo y no  a todo el resto del proyecto (las variables son privadas dentro de este módulo y sólo se pueden acceder desde ahí a no ser que nosotros lo exportemos)
* Utilizamos `module.exports` para exportar el código
* Podemos utilizar tan sólo `exports` si queremos de la siguiente manera:

```js
module.exports = calcularPrecio
```

Código de ejemplo en: [`./ejemplos/05-modulos`](../ejemplos/05-modulos);