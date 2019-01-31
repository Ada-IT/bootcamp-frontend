## Declaración de variables y operador de asignación

### Declaración de variables

* Al programar necesitamos almacenar valores en la memoria de la computadora para poder interactuar con ellos
* Para poder identificar estos valores le asignamos un nombre descriptivo
* Es posible que a lo largo de un programa pisemos un valor guardado en una posición de memoria, es decir que este valor puede ser **variable**
* Podemos decir que una **variable** es algo que nos permite almacenar un valor en memoria de la computadora y que por medio de un nombre descriptivo podemos acceder e interactuar con él.
* En JavaScript existe la palabra reservada **var** que nos permite declarar una **variable**

**Ejemplo:**
```js
var variable;
```

* Si en nuestro programa vamos a necesitar el nombre y edad del usuario podemos declarar las siguientes variables:

**Ejemplo:**
```js
var nombre;
var edad;
```

* En ES5 podemos no utilizar **var** para declarar nuestras variables
* Esto se considera una mala práctica por más que el lenguaje lo permita
* Para evitar problemas siempre que declaren una variable utilicen **var**
* Los nombres de las variables tienen que empezar con una letra
* Para evitar problemas usemos nombres descriptivos que reflejen el valor que queremos asignar a cada variable
* En programación existen distintos tipos de forma de escribir los nombres de las variables, en EcmaScript es común utilizar una forma que se denomina camelCase donde la primer letra de la primer palabra va en minúscula y luego cada palabra comienza con mayúscula
* La primer letra del nombre de las variables va a ser siempre en minúscula
* Evitamos utilizar acentos o simbolos en los nombres de las variables

**Ejemplo:**
```js
var nombreDeMiVariable;
```

* En el ejemplo anterior vemos que declaramos una variable con el nombre de **nombre de mi variable** dado que los nombres de las variables no aceptan espacios utilizamos la denominación camel case para escribirlo: **nombreDeMiVariable**

#### Prácticas
[Ejercicio 1](./ejercicios/ej1.md)

## Operador de asignación
* Una vez declarado el nombre de una variable podemos asignarle un valor. Esto se da ya que tenemos asignado un espacio en memoria donde podemos guardar un valor
* Por medio del operador de asignación **=** podemos asignar un valor a una variable

**Ejemplo:**
```js
var nombre;
nombre = 'Ada';
```

* Podemos declarar todas las variables que necesitemos utilizar

**Ejemplo:**
```js
var nombre;
var edad;
nombre = 'Ada';
edad = 20;
```

#### Prácticas
[Ejercicio 2](./ejercicios/ej2.md)

* También podemos declarar todas las variables en una línea y luego asignarle valores

**Ejemplo:**
```js
var nombre, edad;
nombre = 'Ada';
edad = 20;
```
#### Prácticas
[Ejercicio 3](./ejercicios/ej3.md)

* También podemos declarar una variable y asignar un valor en la misma sentencia

**Ejemplo:**
```js
var nombre = 'Ada';
var edad = 20;
```

#### Prácticas
[Ejercicio 4](./ejercicios/ej4.md)

* Utilizando `console.log()` podemos mostrar el valor de una variable en la consola

**Ejemplo:**
```js
var nombre = 'Ada';
var edad = 20;
console.log(nombre);
console.log(edad);
```

**Ejecutamos el programa utilizando la consola del navegador**

#### Prácticas
[Ejercicio 5](./ejercicios/ej5.md)

* Vemos como salida los valores Ada y 20
* `console.log()` acepta varios valores separados por como para mostrar más de un valor en consola
* Podemos mostrar algo más significativo si escribimos lo mismo de la siguiente manera

**Ejemplo:**
```js
var nombre = 'Ada';
var edad = 20;
console.log('nombre: ', nombre);
console.log('edad: ', edad);
```

**Ejecutamos el programa utilizando la consola del navegador**

* Al ejecutar este programa vemos una salida que nos explica mejor que es cada valor ya que vemos `nombre: Ada` y `edad: 20`
* Esta es una forma fácil de ver los valores de las variables y saber de donde viene

#### Prácticas
[Ejercicio 6](./ejercicios/ej6.md)

## Tipos base
* Como vimos en los ejemplos anteriores existen distintos tipos de datos para representar distintos valores

**Ejemplo:**
```js
var nombre = 'Ada';
var edad = 20;

console.log('nombre: ', nombre);
console.log('edad: ', edad);
```

* En este ejemplo vemos que para el nombre estamos utilizando un valor entre `''` y para la edad estamos utilizando un número
* ECMAScript tiene los siguientes tipos base:
  * **string:** Los **string** también son conocidos como cadena de caracteres y no son más que un texto
  * **number:** El tipo de dato **number** son números y nos permiten hacer operaciones matemáticas
  * **boolean:** Este tipo **boolean** acepta valores del tipo **true** o **false**, es decir que podemos utilizarlo cuando necesitamos un valor **verdadero (true)** o **falso (false)**
  * **undefined:** Define que un valor es indefinido
  * **null:** Define que un valor es nulo, parece que es similar a undefined pero ya vamos a ver algunas diferencias
* A la hora de definir y asignar valores en nuestros programas vamos a tener que definir de que tipo de dato van a ser para saber que tipo de operaciones podemos hacer con ellos
* Existen más tipos en ECMAScript y los vamos a ir viendo a lo largo del curso pero por ahora podemos arrancar con estos

### String
* Los string representan un valor de texto, lo podemos utilizar para guardar valores como nombre, apellido, dirección, etc.
* Los valores del tipo string se escriben entre comillas dobles "" o simples ''
* Si bien es lo mismo utilizar cualquier tipo de comillas por una cuestión de convensión vamos a utilizar comillas simple ('') a lo largo del curso

**Ejemplo:**
```js
var nombre = 'Grace';
var apellido = "Hopper";

console.log(nombre);
console.log(apellido);
```

* En este ejemplo declaramos dos variables (nombre y apellido) y le asignamos dos **valores del tipo string ('Grace', 'Hopper')**
* Podemos utilizar este tipo de dato para un mensaje

**Ejemplo:**
```js
var mensaje = '¡Bienvenidos a Javascript!';
console.log(mensaje);
```

* No hace falta asignar los tipos de datos a una variable, podemos utilizarlos como literales de la siguiente forma

**Ejemplo:**
```js
console.log('¡Bienvenidos a Javascript!');
```

* En este ejemplo utilizamos un **string o cadena de caracteres** en `console.log()` directamente

#### Prácticas
[Ejercicio 10](./ejercicios/ej10.md)
[Ejercicio 11](./ejercicios/ej11.md)

### Concatenar textos
* Utilizando el operador `+` podemos unir dos o más **strings**

**Ejemplo:**
```js
var nombre = 'Sheryl';
var espacio = ' ';
var apellido = 'Sandberg';

console.log(nombre + espacio + apellido);
```
* Vemos como resultado de este ejemplo `Sheryl Sandberd`
* En este ejemplo vemos como podemos concatener o unir 3 variables del tipo string
* Podemos escribir este mismo ejemplo de la siguiente forma sin utilizar una variable para el espacio

**Ejemplo:**
```js
var nombre = 'Sheryl';
var apellido = 'Sandberg';

console.log(nombre + ' ' + apellido);
```
* También vemos como resultado de este ejemplo `Sheryl Sandberd`
* Podemos ver en este ejemplo como utilizamos un valor literal para el espacio sin asignarlo a una variable

#### Prácticas
[Ejercicio 12](./ejercicios/ej12.md)
[Ejercicio 13](./ejercicios/ej13.md)
[Ejercicio 14](./ejercicios/ej14.md)

### ¿Comillas dobles o simples?
* Como sabemos podemos utilizar comillas dobles o simples para definir un tipo de dato **string**
* En algunos casos vamos a necesitar utilizar estos símbolos como parte del valor

**Ejemplo:**
```js
var texto = 'Este texto tiene "comillas dobles"';
var otroTexto = "Este texto tiene 'comillas simples'";

console.log(texto);
console.log(otroTexto);
```

* Si necesitamos utilizar un tipo de comillas como parte de nuestro **string** podemos establecer el valor utilizando el otro tipo de comillas:
  * Si necesito utilizar comilla simple como contenido podemos definir el string utilizando comillas dobles
  * En caso de utilizar comilla doble como contenido definimos el string utilizando comillas simples

#### Prácticas
[Ejercicio 18](./ejercicios/ej18.md)
[Ejercicio 19](./ejercicios/ej19.md)

### Números
* Otro de los tipos de datos que tenemos en ECMAScript es **numbers** y nos permite utilizar números
* Este tipo de datos no va entre comillas ni dobles ni simples
* Para saber más sobre este tipo de datos pueden entrar en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number)

**Ejemplo:**
```js
var edad = 38;
var volumen = 50;

console.log(edad);
console.log(volumen);
```

#### Prácticas
[Ejercicio 20](./ejercicios/ej20.md)
[Ejercicio 21](./ejercicios/ej21.md)

* Un error común que podemos hacer cuando arrancamos a programar o aprender ECMAScript es cofundirnos al encontrar algún código similar al siguiente ejemplo

**Ejemplo:**
```js
var edad = 38;
var volumen = "50";
```

> En este caso tenemos dos variables que contienen un número.
> A la variable **edad** le asignamos un tipo de dato **number** y a la variable **volumen** le estamos asignando un tipo de dato **string** por más que el contenido sea un número.
> Es importante entender que son distintos tipos de datos por lo cual vamos a poder utilizarlos de diferente forma, por ejemplo a los **numbers** los vamos a poder utilizar para operaciones matemáticas y a los **string** no.

* Más adelante vamos a utilizar operadores aritméticos para hacer operaciones matemáticas con este tipo de datos (suma, resta, multiplicación)

### Boolean
* Los tipos de datos boolean aceptan un valor del tipo true (verdadero) o false (falso)

**Ejemplo:**
```js
var prendido = true;
var puedeVotar = false;
var casado = false;

console.log(prendido);
console.log(puedeVotar);
console.log(casado);
```

#### Prácticas
[Ejercicio 22](./ejercicios/ej22.md)

### Undefined
* Al declarar una variable en ECMAScript y no asignarle ningún valor por defecto se le asigna el valor **undefined**
* Este valor significa que algo no esta definido
* Podemos asignarlo como valor de la siguiente manera:

**Ejemplo:**
```js
var indefinido = undefined;
console.log(indefinido);
```

* Es común tener que validar si un valor es **undefined** y lo vamos a ver más adelante

#### Prácticas
[Ejercicio 23](./ejercicios/ej23.md)

### Null
* Existe un valor llamado **null** para establecer que algo es nulo
* Podemos asignarlo como valor de la siguiente manera:
* También es común tener que validar si un valor es **null**

**Ejemplo:**
```js
var nulo = null;
console.log(nulo);
```

#### Prácticas
[Ejercicio 24](./ejercicios/ej24.md)

* Si bien **null** y **undefined** parecen similares se utilizan de distinta manera

### typeof
* Por medio del operador **typeof** podemos saber de que tipo es una variable

**Ejemplo:**
```js
var nombre = 'Radia';
var edad = 30;
var casado = false;
var indefinido = undefined;
var nulo = null;

console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof casado); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // object
```

* En este ejemplo vemos que cada tipo de dato retorna un tipo distinto
* En el caso de **null** retorna object en lugar de null como uno espera
* Object es otro tipo de dato de ECMAScript y lo vamos a ver más adelante

#### Prácticas
[Ejercicio 25](./ejercicios/ej25.md)