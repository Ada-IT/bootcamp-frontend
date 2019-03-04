## Propiedades y métodos de string
### Propiedad length
* Por medio de la propiedad length podemos saber cuántos caracteres tiene un **string**
* La propiedad **length** retorna o devuelve un número con la cantidad de caracteres que tiene el texto
* Lo utilizamos de la siguiente manera:

**Ejemplo:**
```js
var texto = '¡Bienvenidos a JS!';
var cantidadDeCaracteres = texto.length;

console.log(cantidadDeCaracteres);
```

* En este ejemplo declaramos una variable `texto` con el valor `¡Bienvenidos a JS!` y otra variable `cantidadDeCaracteres` donde guardamos la cantidad de caracteres que tiene la variable `texto`
* También podemos obtener el mismo resultado sin utilizar la variable `cantidadDeCaracteres`

**Ejemplo:**
```js
var texto = '¡Bienvenidos a JS!';
console.log(texto.length);
```

#### Práctica
[Ejercicio 38](./ejercicios/ej38.md)
[Ejercicio 39](./ejercicios/ej39.md)

### Métodos de String
* Los métodos nos permiten obtener funcionalidad para los distintos tipos de datos
* Podemos ver una lista de métodos del tipo String en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
* Vamos a ver algunos de los métodos más conocidos y jugar un poco con ellos

**Ejemplo:**
```js
var variableString = 'valor de nuestro string';

// Al tener un valor del tipo string podemos llamar a un método utilizando un punto (como con la propiedad length) y paréntesis ()
variableString.metodo();

// También podemos pasar un valor a los métodos para lograr una funcionalidad específica
variableString.metodo(valor);
```

## Concat
* Hasta ahora vimos que podemos utilizar el símbolo + para concatenar 2 valores
* Los strings tienen un método llamado **concat** que nos permite concatenar valores
* Podes saber más sobre este método en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/concat)

**Ejemplo:**
```js
var texto = 'Hola ';
var nombre = 'Ada';

// Concatenamos los strings usando el método concat
var mensaje = texto.concat(nombre);

console.log(mensaje);
```

* En este ejemplo se imprime el texto **Hola Ada**
* También se pueden pasar múltiples valores a ser concatenados

**Ejemplo:**
```js
var texto = 'ECMA';
console.log(texto.concat('Script', ' es lo mejor', ' del mundo de la programación'));
```
* en este ejemplo concatenemos varios strings al contenido de la variable texto
* Se muestra en pantalla el mensaje: **ECMAScript es lo mejor del mundo de la programación**;

#### Prácticas
[Ejercicio 40](./ejercicios/ej40.md)

### Mayúsculas y minúsculas
* Podemos transformar un texto a mayúscula o minúscula utilizando los métodos **toUpperCase** y **toLowerCase** respectivamente

**Ejemplo:**
```js
var textoEnMayuscula = 'HOLA';
var textoEnMinuscula = 'javascript';

console.log(textoEnMayuscula.toLowerCase()); // muestra el texto hola
console.log(textoEnMinuscula.toUpperCase()); // muestra el texto JAVASCRIPT

console.log(textoEnMayuscula); // muestra el texto HOLA
console.log(textoEnMinuscula); // muestra el texto javascript
```
#### Prácticas
[Ejercicio 41](./ejercicios/ej41.md)
[Ejercicio 42](./ejercicios/ej42.md)

### Caracteres y posiciones
* Por medio del método **charAt** podemos saber que caracter se encuentra en una determinada posición de un string
* Este método acepta un valor numérico como parámetro
* El primer caracter esta ubicado en la posición 0
* Para saber cual es el último caracter podemos utilizar la propiedad **length**
* Dado que el primer elemento arranca en 0 a la logitud del string debemos restarle uno

**Ejemplo:**
```js
let textoSuperLargo = 'Este texto es bien largo así podemos saber varias cosas de él.';
let primerCaracter = textoSuperLargo.charAt(0);
let posicionDelUltimoCaracter = textoSuperLargo.length - 1;
let ultimoCaracter = textoSuperLargo.charAt(posicionDelUltimoCaracter);

// Accedemos al primer caracter E
console.log(primerCaracter);
console.log(ultimoCaracter);
```

#### Prácticas
[Ejercicio 43](./ejercicios/ej43.md)
[Ejercicio 44](./ejercicios/ej44.md)

### Recortando strings
* Utilizando el método **slice** podemos obtener una parte de un string
* Este método acepta dos parámetros slice(inicio, fin)
* Utilizamos indice desde 0 para obtener desde el inicio de la cadena

***Ejemplo:**
```js
let texto = 'Me encanta JavaScript!!';
let resultado = texto.slice(11, 21);
console.log(resultado); // JavaScript
```

* Si contamos desde la primer letra tenemos 11 caracteres hasta llegar a la **J** como primer letra
* Recortamos desde la posición 11 hasta la 21, es decir que obtenemos como resultado la palabra JavaScript
* También podemos no establecer el segundo parámetro (**fin**) y obtener desde la posición especificada como inicio hasta el final del texto

***Ejemplo:**
```js
let texto = 'Me encanta JavaScript!!';
let resultado = texto.slice(11);
console.log(resultado); // JavaScript!!
```

* Este método acepta como **fin** un número negativo
* Al utilizar un parámetro negativo lo que hace este método es posicionarse en el final de la cadena y volver tantos caracteres como nosotros especificamos en nuestro valor negativo

***Ejemplo:**
```js
let texto = 'Me encanta JavaScript!!';
let resultado = texto.slice(11, -8);
console.log('JavaScript no es lo mismo que', resultado); // JavaScript no es lo mismo que Java
```

#### Prácticas
[Ejercicio 45](./ejercicios/ej45.md)

* Otro método que podemos utilizar de forma similar es el método **substr**
* También podemos establecer 2 parámetros numéricos para obtener una porción de una cadena de texto
* El primer parámetro establece el **inicio**
* El segundo parámetro establece la cantidad de caracteres que queremos recortar

***Ejemplo:**
```js
let texto = 'Me encanta JavaScript!!';
let resultado = texto.substr(11, 10);
console.log(resultado); // JavaScript
```
#### Prácticas
[Ejercicio 46](./ejercicios/ej46.md)

* Podes aprender más sobre estos métodos en el sitio de MDN de [slice](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/slice) y [substr](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr)

* Los Strings tienen muchos métodos que podemos usar
* Podés leer sobre ellos en [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
* Leer sobre:
  * includes()
  * indexOf()
  * repeat()
  * replace()
  * trim()
  * ...más...
* No es necesario memorizar todos los métodos, solo saber que existen y podemos usarlos.

## Métodos de Number
* Los tipos de datos **number** también tienen métodos que nos permiten obtener funcionalidades

### parseInt
* La función **parseInt** nos permite convertir un **string** a un tipo de dato **number** como número entero
* Retorna un número entero
* Podes saber más sobre esta función en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt)

**Ejemplo:**
```js
var numeroComoTexto = '3';
var numero = parseInt(numeroComoTexto);
console.log(numero); // 3
```

**Ejemplo:**
```js
var numeroComoTexto = '3.20';
var numero = parseInt(numeroComoTexto);
console.log(numero); // 3
```

* Como podemos ver en este ejemplo podemos transformar un **string** a un **number** utilizando la función **parseInt** en caso de querer un número entero
* En caso de que el **string** tenga un número decimal al utilizar la función **parseInt** obtenemos un número entero (se pierde la parte decimal)

### parseFloat
* La función **parseFloat** nos permite cambiar de tipo de dato de un **string** a number
* Retorna un número decimal
* Podes saber más sobre esta función en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseFloat)

**Ejemplo:**
```js
var piEnTexto = '3.14';
var pi = parseFloat(piEnTexto);
console.log(pi);
```

* Como podemos ver en este ejemplo podemos transformar un **string** a un **number** utilizando el método **parseFloat** en caso de querer un número decimal

### Convertir un número a string
* Podemos convertir un tipo de dato **number** a **string** utilizando el método **toString()**
* Retorna un string con el valor del número
* Podes saber más sobre este método en el [sitio de MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

**Ejemplo:**
```js
var numero = 4;
var mensaje = numero.toString() + '2';
console.log(mensaje); // 42
```

* Podemos ver en este ejemplo como podemos transformar un tipo de dato **number** a **string**
* Obtenemos el resultado 42 ya que estamos concatenando 2 tipos de datos string

#### Prácticas
[Ejercicio 48](./ejercicios/ej48.md)
