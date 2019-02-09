## Estructuras de control

* Por medio de las estructuras de control podemos controlar el flujo de nuestro código y como queremos que se ejecute según se cumplan o no algunas condiciones
* Una de las estructuras más conocidas es el **if** y en español podemos reconocerlo como **si entonces**
* Esta estructura espera una condición **true** para que ingrese y ejecute el código que tiene dentro de su bloque

![if](https://file-wdvvncgzkb.now.sh)

* Como vemos en esta imágen tenemos una condición que se va a resolver en true o false
* En caso de que la condición sea verdadera (true) se va a ejecutar las distintas instrucciones
* En caso de que la condición sea negativa (false) no se ejecutan las instrucciones declaradas dentro de esta estructura y el código sigue su flujo

**Ejemplo:**
```js
// Estructura básica de un if
if (condicion) {
  // Se ejecuta el código que se escriba en esta sección si la condición es verdadera.
}
```

```js
if (true) {
  console.log('Se muestra este texto ya que la condición es true');
}
```

* Como podemos ver en el ejemplo anterior siempre se va a mostrar el mensaje ya que la condición siempre va a ser **true**
* Podemos escribir distintas condiciones que nos permitan elegir si vamos a ejecutar el código dentro de la estructura o no
* Por ejemplo podemos preguntar **SI** el **numero** es mayor o igual que 2 **Entonces** mostrar un mensaje en consola

**Ejemplo:**
```js
var numero = 2;

// SI numero >= 2 ENTONCES mostrar en consola
if (numero >= 2) {
  console.log('El numero es mayor o igual a 2');
}
```

* El flujo del código se sigue ejecutando sin importar el resultado del if

**Ejemplo:**
```js
var numero = 1;

if (numero >= 2) {
  console.log('Este mensaje no se ve');
}

console.log('Este mensaje se ve siempre se cumpla o no la condición del if');
```

#### Prácticas
[Ejercicio 49](./ejercicios/ej49.md)
[Ejercicio 50](./ejercicios/ej50.md)
[Ejercicio 51](./ejercicios/ej51.md)

* También existe la estructura if/else que nos permite controlar que pasa si la condición es falsa
* Es decir que en caso de que la condición sea verdadera entra en una parte de la estructura
* En caso de ser falsa la condición entonces entra en la otra sección
* Utilizamos la palabra **SI NO** para el **else**

![if/else](https://file-wdvvncgzkb.now.sh/)

**Ejemplo:**
```js
if (condicion) {
  // Entra en esta sección si se cumple la condición
} else {
  // Entra en esta sección si no se cumple la condición
}
```

```js
var numero = 2;

if (numero === 2) {
  console.log('El número es 2');
} else {
  console.log('El número no es 2');
}
```

* Podemos leer este código de la siguiente manera: SI el número es igual a 2 entonces mostrar el mensaje 'El número es 2' SINO mostrar el mensaje 'El número no es 2'

#### Prácticas
[Ejercicio 52](./ejercicios/ej52.md)
[Ejercicio 53](./ejercicios/ej53.md)
[Ejercicio 54](./ejercicios/ej54.md)

### Operador Ternario
* Existe una manera más corta de escribir un if/else y es por medio del operador ternario
* Se escribe de la siguiente manera: `(condicion) ? true : false`
* Es decir que dada una condición se ejecuta una parte o la otra

**Ejemplo:**
```js
var numero = 2;
var mensaje = (numero === 2) ? 'El numero es 2' : 'El numero no es 2';
console.log(mensaje);
```

#### Prácticas
[Ejercicio 55](./ejercicios/ej55.md)
[Ejercicio 56](./ejercicios/ej56.md)
[Ejercicio 57](./ejercicios/ej57.md)

### If Anidados
* Podemos anidar estructuras if/else/if para validar distintas condiciones

**Ejemplo:**
```js
if (condicion) {
  // primer condicion
} else if (otraCondicion) {
  // segunda condicion
} else {
  // Si no se cumplio ninguna de las anteriores ingresa acá
}
```

```js
var nombre = 'Marta';

if (nombre === 'Miriam') {
  console.log('El nombre de la usuaria es Miriam');
} else if (nombre === 'Felipa') {
  console.log('El nombre de la usuaria es Felipa');
} else {
  console.log('El nombre de la usuaria no es Marta ni Felipa');
}
```

* Podemos ver en este ejemplo que podemos preguntar por distintas condiciones

#### Prácticas
[Ejercicio 58](./ejercicios/ej58.md)
[Ejercicio 59](./ejercicios/ej59.md)
[Ejercicio 60](./ejercicios/ej60.md)

* Utilizar muchos if's anidados no es una buena práctica

### Switch
* En uno de los ejemplos anteriores necesitabamos mostrar un mensaje según el nombre del usuario

```js
var nombre = 'Marta';

if (nombre === 'Miriam') {
  console.log('El nombre de la usuaria es Miriam');
} else if (nombre === 'Felipa') {
  console.log('El nombre de la usuaria es Felipa');
} else {
  console.log('El nombre de la usuaria no es Marta ni Felipa');
}
```

* En caso de querer seguir agregando condiciones para más nombres se nos puede volver medio caos el código

```js
var nombre = 'Marta';

if (nombre === 'Miriam') {
  console.log('El nombre de la usuaria es Miriam');
} else if (nombre === 'Felipa') {
  console.log('El nombre de la usuaria es Felipa');
} else if (nombre === 'Xime') {
  console.log('El nombre de la usuaria es Xime');
} else if (nombre === 'Belu') {
  console.log('El nombre de la usuaria es Belu');
} else {
  console.log('El nombre de la usuaria no es Marta, Felipa, Xime o Belu');
}
```

* Existe otra forma de escribir esta estructura y que hace que sea más fácil leer e interpretar este código
* Esta estructura se conoce como **switch** y nos permite evaluar un valor con diferentes opciones
* Decimos SEGUN tal condicion ENTONCES hacemos tal o cual cosa

**Ejemplo:**
```js
var nombre = 'marta';
var mensaje = null;

switch (nombre) {
  case 'Miriam':
    mensaje = 'El nombre de la usuaria es Miriam';
    break;
  case 'Felipa':
    mensaje = 'El nombre de la usuaria es Felipa';
    break;
  case 'Xime':
    mensaje = 'El nombre de la usuaria es Xime';
    break;
  case 'Belu':
    mensaje = 'El nombre de la usuaria es Belu';
    break;
  default:
     mensaje = 'El nombre de la usuaria no es Marta, Felipa, Xime o Belu';
}

console.log(mensaje);
```
* Utilizamos **break** para decirle al **switch** que ya puede dejar de validar el resto de las condiciones y que su trabajo terminó.
* En este ejemplo podemos decir SEGUN el nombre ENTONCES mostra un mensaje personalizado SINO mostrar un mensaje que ninguno de los nombres es el correcto.

#### Prácticas
[Ejercicio 61](./ejercicios/ej61.md)
[Ejercicio 62](./ejercicios/ej62.md)
[Ejercicio 63](./ejercicios/ej63.md)

## Truthy and Falsy (valores verdaderos y falsos)
* En ECMAScript existen valores que se pueden transformar como **true** o **false** en una condición
* Los siguientes valores se transformar en falso:
  * false
  * null
  * undefined
  * 0
  * NaN
  * ''
* Cualquier otro valor se transforma en verdadero

**Ejemplo:**
```js
if ('') {
  // no entra en esta sección
} else {
  // entra en esta sección ya que un string vacio se transforma en falso
}
```

* Podemos ver en este ejemplo que al interpretar el string vacío como un valor falsy o falso, no se entra en la condición del if verdadero sino por el lado del falso. Es por esto que tenemos que validar nuestros datos.

**Ejemplo:**
```js
var nombre = '';
if (nombre === '') {
  console.log('por favor ingrese su nombre');
} else {
  console.log('Bienvenido/a: ' + nombre);
}
```

* Por medio de condicionales podemos hacer una mejor validación
* Utilizando valores truthy y falsy podemos escribir el mismo código de la siguiente manera:

**Ejemplo:**
```js
var nombre = '';
if (nombre) {
  console.log('Bienvenido/a: ' + nombre);
} else {
  console.log('por favor ingrese su nombre');
}
```

#### Prácticas
[Ejercicio 64](./ejercicios/ej64.md)
[Ejercicio 65](./ejercicios/ej65.md)

#### Estructuras de repetición
* Es común en la programación tener que ejecutar un mismo código varias veces
* Por ejemplo si quiero imprimir en pantalla los números del 0 al 10 lo puedo hacer de la siguiente manera

**Ejemplo:**
```js
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
```

* Si bien de esta forma logramos el objetivo, es poco práctico si necesito, por ejemplo, cambiar el mensaje que quiero mostrar: tengo que modificar muchas lineas de código. Imaginemos que tengo que mostrar del 0 al 100 o al 1000! IMPOSIBLE!

**Ejemplo:**
```js
console.log('número: ', 0);
console.log('número: ', 1);
console.log('número: ', 2);
console.log('número: ', 3);
console.log('número: ', 4);
console.log('número: ', 5);
console.log('número: ', 6);
console.log('número: ', 7);
console.log('número: ', 8);
console.log('número: ', 9);
console.log('número: ', 10);
```

* Para nuestra sanidad mental existen las estructuras de repetición que nos hacen la vida más fácil

### While
* Existe una estructura de repetición que se llama **while** y se ejecuta mientras la condición sea verdadera
* En español podemos pensar esta estructura como **MIENTRAS** condición **HACER** tal cosa

**Ejemplo:**
```js
while (condicion) {
  console.log('Imprimo este mensaje mientras la condición sea verdadera');
}
```

* Vamos a refactorizar el código que muestra números del 0 al 10 utilizando la estructura **while**

**Ejemplo:**
```js
var numero = 0;

while (numero < 11) {
  console.log(numero);
  numero++;
}
```

* Con tan solo un par de lineas de código podemos mostrar todos los números del 0 al 10 y si queremos mostrar más tan solo hacemos un cambio

**Ejemplo:**
```js
var numero = 0;

while (numero < 10000) {
  console.log(numero);
  numero++;
}
```

* En caso de querer cambiar el mensaje tan solo modificamos una línea de código

**Ejemplo:**
```js
var numero = 0;

while (numero < 10000) {
  console.log('número: ', numero);
  numero++;
}
```

* Vemos que de esta forma las estructura de repetición nos hacen la vida mucho más fácil y controlable
* Un tema que tenemos que tener en cuenta es que al utilizar las estructuras de repetición podemos caer en lo que se denomina un loop infinito: un código que se va a repetir por siempre ya que la condición no cambia. Esto puede colgar un servidor o el ambiente donde estemos ejecutando esta repetición. IMPORTANTE: recordar cambiar la condicón en algún momento.

**Ejemplo:**
```js
while (true) {
  console.log('colgamos esta rutina');
}

var numero = 0;

while (numero < 10000) {
  console.log('número: ', numero);
}
```

* En cualquiera de estos ejemplos podemos colgar todo ya que en ningún momento se modifica la condición y siempre va a ser verdadera.
* Otra de las características que tiene el **while** es que si la condición es negativa no se ejecuta

**Ejemplo:**
```js
while (false) {
  console.log('nunca se ejecuta este código');
}

var numero = 1000;

while (numero < 10) {
  console.log('número: ', numero);
  numero++;
}
```

#### Prácticas
[Ejercicio 66](./ejercicios/ej66.md)
[Ejercicio 67](./ejercicios/ej67.md)
[Ejercicio 68](./ejercicios/ej68.md)
[Ejercicio 69](./ejercicios/ej69.md)
[Ejercicio 70](./ejercicios/ej70.md)
[Ejercicio 71](./ejercicios/ej71.md)
[Ejercicio 72](./ejercicios/ej72.md)
[Ejercicio 73](./ejercicios/ej73.md)
[Ejercicio 74](./ejercicios/ej74.md)
[Ejercicio 75](./ejercicios/ej75.md) (avanzado)

### do/while
* Otra de las estructuras de repetición que podemos encontrar es el **do/while**
* En español podemos leer esta estructura como **HACER MIENTRAS**
* La diferencia que tiene esta estructura con el **while** es que **siempre se ejecuta al menos una vez** y luego pregunta por la condición

**Ejemplo:**
```js
do {
  // esto se ejecuta al menos una vez
} while (condicion)
```

* Si la condición siempre es true también podemos colgar el proceso

**Ejemplo:**
```js
do {
  // colgamos todo
} while (true)
```

* Podemos escribir uno de los ejemplos anteriores de la siguiente manera:

**Ejemplo:**
```js
var numero = 0;

do {
  console.log('número: ', numero);
  numero++;
} while (numero < 10000);
```

* En este ejemplo mostramos el mensaje e incrementamos la variable al menos una vez y luego podemos seguir mostrando el resto de los números

**Ejemplo:**
```js
var numero = 1000;

do {
  console.log('número: ', numero);
  numero++;
} while (numero < 10);
```

* En este ejemplo sólo se muestra el número 1000 y luego no se vuelve a repetir la condición.

#### Prácticas
[Ejercicio 76](./ejercicios/ej76.md)
[Ejercicio 77](./ejercicios/ej77.md)
[Ejercicio 78](./ejercicios/ej78.md)
[Ejercicio 79](./ejercicios/ej79.md)
[Ejercicio 80](./ejercicios/ej80.md)
[Ejercicio 81](./ejercicios/ej81.md)
[Ejercicio 82](./ejercicios/ej82.md)
[Ejercicio 83](./ejercicios/ej83.md)
[Ejercicio 84](./ejercicios/ej84.md)
[Ejercicio 85](./ejercicios/ej85.md)

## For
* Otra estructura de repetición que podemos utilizar es **for**
* Esta estructura en español se la denomina **PARA**
* Consiste en 3 partes delimitadas por un **;**

**Ejemplo:**
```js
for (iniciarVariable; condicion; alteración) {
  // se ejecuta siempre y cuando se cumpla la condición
}
```

* Por ejemplo, para mostrar números de 0 a 10, podemos escribir el siguiente for:

**Ejemplo:**
```js
// Primero: declaramos la variable numero y le asignamos el valor 0
// Segundo: escribimos la condición que queremos validar
// Terceo: incrementamos el valor de la variable numero en 1

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}
```

* Siguiendo con los ejemplos anteriores si queremos modificar esta estructura lo podemos hacer de forma simple

**Ejemplo:**
```js
for (var numero = 0; numero <= 1000; numero++) {
  console.log('número: ', numero);
}
```

#### Prácticas
[Ejercicio 86](./ejercicios/ej86.md)
[Ejercicio 87](./ejercicios/ej87.md)
[Ejercicio 88](./ejercicios/ej88.md)
[Ejercicio 89](./ejercicios/ej89.md)
[Ejercicio 90](./ejercicios/ej90.md)
[Ejercicio 91](./ejercicios/ej91.md)
[Ejercicio 92](./ejercicios/ej92.md)
[Ejercicio 93](./ejercicios/ej93.md)
[Ejercicio 94](./ejercicios/ej94.md)
[Ejercicio 95](./ejercicios/ej95.md)
[Ejercicio 96](./ejercicios/ej96.md)
[Ejercicio 97](./ejercicios/ej97.md)


### Cortar la ejecución de una estructura de repetición
* Utilizando la sentencia **break** podemos cortar la ejecución de una estructura de repetición

**Ejemplo:**
```js
for (var i = 0; i < 1000; i++){
  break;
}
```

* En este ejemplo se va a intentar correr el for, va a declarar la variable i, se le va a asignar el valor y luego se va a cortar la ejecución por el break.

**Ejemplo:**
```js
for (var i = 0; i < 1000; i++){
  if (i < 10) {
    console.log(i);
  } else {
    break;
  }
}
```

* En este ejemplo si la variable i es 10 o más se va a cortar la ejecución del for y va a seguir el flujo normal del código

#### Prácticas
[Ejercicio 98](./ejercicios/ej98.md)
[Ejercicio 99](./ejercicios/ej99.md)

### Ejercicios generales
[Ejercicio 100](./ejercicios/ej100.md)
[Ejercicio 101](./ejercicios/ej101.md)
[Ejercicio 102](./ejercicios/ej102.md)
[Ejercicio 103](./ejercicios/ej103.md)
[Ejercicio 104](./ejercicios/ej104.md)