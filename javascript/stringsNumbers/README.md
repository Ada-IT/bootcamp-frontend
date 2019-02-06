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
* Este método retorna un nuevo string con el texto concatenado
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
