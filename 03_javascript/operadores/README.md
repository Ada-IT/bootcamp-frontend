## Operadores aritméticos
* En ECMAScript existen operadores que nos van a permitir hacer operaciones ariméticas como pueden ser la suma, resta, multiplicación y división entre otros

### Suma
* Usando el operador `+` podemos sumar dos números o dos tipos de dato **number**

**Ejemplo:**
```js
2 + 2
```

* En este ejemplo estamos sumando dos valores de number literales

**Ejemplo:**
```js
var miEdad = 20;
var edadDeMiHermano = 15;
console.log(miEdad + edadDeMiHermano);
```

* Podemos sumar el valor que tienen asignado 2 o más variables

**Ejemplo:**
```js
var miEdad = 20;
var edadDeMiHermano = 15;
var resultado = miEdad + edadDeMiHermano;
console.log(resultado);
```

* También podemos utilizar una variable para guardar el resultado de sumar los valores de otras variables

### Resta
* Usando el operador `-` podemos restar dos números o dos tipos de dato **number**

**Ejemplo:**
```js
2 - 2; // Obtenemos 0 como resultado

var miEdad = 20;
var edadDeMiHermano = 15;

// Mostramos en consola el resultado de restar los valores de estas dos variables
console.log(miEdad - edadDeMiHermano);

// Utilizamos una variable para guardar el resultado de la operación
var resultado = miEdad - edadDeMiHermano;
console.log(miEdad - edadDeMiHermano);
```

* Podemos usar más de un operador:

**Ejemplo:**
```js
10 + 2 - 2;

var miEdad = 20;
var edadDeMiHermano = 15;

// Podemos utilizar distintos operadores como también valores literales
console.log(miEdad - edadDeMiHermano + 10);

var resultado = miEdad - edadDeMiHermano + 10;

console.log('El resultado es: ' + resultado);
```

### Multiplicación
* Usando el operador `*` podemos multiplicar dos números o dos tipos de dato **number**

**Ejemplo:**
```js
2 * 2; // Obtenemos 4 como resultado

var numero1 = 10;
var numero2 = 5;

console.log(numero1 * numero2);

var resultado = numero1 * numero2;
console.log(resultado)
```

* Podemos utilizar paréntesis para establecer que operación queremos que se resuelva primero, esto tiene que ver con la precendecia de operadores. Es como volver al colegio pero ahora tiene sentido!

**Ejemplo:**
```js
2 + 2 * 4; // 10
(2 + 2) * 4; // 16
```

* En este caso vemos que al utilizar paréntesis estabamos definiendo como queremos que se hagan las operaciones
* En el segundo ejemplo vemos que primero se va a resolver la suma de 2 + 2 y luego se va a multiplicar el resultado
* Este concepto también funciona con variables como es de esperar

**Ejemplo:**
```js
var dos = 2;
var cuatro = 4;

console.log(dos + dos * cuatro); // 10
console.log( (dos + dos) * cuatro ); // 16
```

### División
* Usando el operador `/` podemos dividir dos números o dos tipos de dato **number**

**Ejemplo:**
```js
20 / 2; // 10

var numero1 = 20;
var numero2 = 2;

console.log(numero1 / numero2); // 10

var resultado = numero1 / numero2;
console.log(resultado); // 10
```

* Dado que este código es una representación de una operación matemática tenemos que tener cuidado a la hora de dividir por 0
* ECMAScript obtenemos un valor del tipo **Infinity** al intentar dividir por 0
* Para saber más sobre este valor podes visitar el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Infinity)

### Módulo o resto
* Usando el operador `%` podemos obtener el resto de dividir dos números o dos tipos de dato **number**

**Ejemplo:**
```js
20 % 2; // 0

var numero1 = 20;
var numero2 = 2;

console.log(numero1 % numero2); // 0

var resultado = numero1 % numero2;
console.log(resultado); // 0
```

* Este operador nos es útil por ejemplo si queremos saber si un número es par o no.

#### Prácticas
[Ejercicio 27](./ejercicios/ej27.md)
[Ejercicio 28](./ejercicios/ej28.md)
[Ejercicio 29](./ejercicios/ej29.md)
[Ejercicio 30](./ejercicios/ej30.md)
[Ejercicio 31](./ejercicios/ej31.md)
[Ejercicio 32](./ejercicios/ej32.md)


### Incremento y decremento
* Por medio de distintos operadores podemos hacer operaciones de una forma más simple a nivel código

#### Incrementar en 1
* Utilizando el operador `++` podemos incrementar un valor en 1

**Ejemeplo:**
```js
var numero = 0;
numero++;
console.log(numero); // 1
```

* También podemos establecer que primero queremos incrementar la variable para luego utilizarla cambiando el lugar del operador

**Ejemplo:**
```js
var numero = 0;
++numero;
console.log(numero); // 1
```

* En este caso parece ser lo mismo pero se pueden dar situaciones donde no lo sea

#### Restar un número
* Utilizando el operador `--` podemos reducir un valor en 1
* Al igual que en el incremento el operador puede ir delante o después del valor según el resultado esperado

**Ejemplo:**
```js
var numero = 10;

--numero;
console.log(numero); // 9

numero--;
console.log(numero); // 8
```

#### Hacer una operación sobre un mismo valor
* Al definir una variable podemos asignarle un valor como ya vimos
* Podemos reutilizar esa variable para asignarle otro valor
* También podemos utilizar la variable para usar el valor y luego asignarlo de nuevo a la misma variable
* Vamos a ver un ejemplo:

**Ejemplo:**
```js
var numero = 1;
numero = numero + 1
```

* Como vimos podemos usar el operador `++` para conseguir el mismo resultado
**Ejemplo:**
```js
var numero = 1;
numero++;
```

* Es decir que en este caso se incrementa y asigna el valor de la variable numero
* Este operador es súper útil pero sólo nos permite operar con la suma y con un valor de 1
* Existen distintos operadores que nos permiten hacer operaciones sobre un valor y asignar el resultado a la misma variable escribiendo menos código
* Los operadores son:
  * `+=` para la suma
  * `-=` para la resta
  * `*=` para la multiplicación
  * `/=` para la división
* Este concepto se entiende mejor desde código

**Ejemplo:**
```js
var numero = 1;

numero +=
console.log(numero); // 2
```

**Ejemplo:**
```js
var numero = 1;

numero = numero + 10;
console.log(numero); // 11
```

* También puedo hacer esta operación de la siguiente forma

**Ejemplo:**
```js
var numero = 1;

numero += 10;
console.log(numero); // 11
```

* Vemos que podemos sumar el valor 10 al valor que tiene la variable numero y asignar el resultado a la misma variable utilizando sólo el operador `+=`
* Podemos hacer esto con el resto de los operadores

**Ejemplo:**
```js
var numero = 10;

numero -= 2;
console.log(numero); // 8
```

**Ejemplo:**
```js
var numero = 10;

numero *= 2;
console.log(numero); // 20
```

**Ejemplo:**
```js
var numero = 20;

numero /= 2;
console.log(numero); // 10
```

* El concepto es siempre el mismo y lo que cambia es la operación realizada

#### Práctica
[Ejercicio 33](./ejercicios/ej33.md)

## Operadores de comparación simple y estricta

### Comparación Simple
* Podemos comparar dos valores utilizando el operador `==` y obtener un valor **boolean** como resultado.
* Este tipo de comparación se conoce como comparación simple ya que sólo compara si un valor es igual a otro
* Al comparar 2 valores de distintos tipos podemos obtener que son el mismo valor sin importar que sean diferente tipo (ejemplo: comparar un string con un número)
* Si los valores son iguales obtenemos **true**
* En caso de que los valores sean distintos obtenemos el valor **false**

**Ejemplo:**
```js
var numero1 = 20;
var numero2 = 20;
var numero3 = 10;

console.log(numero1 == numero2); //true
console.log(numero1 == numero3); //false
```

* Comparamos sólo valores:

**Ejemplo:**
```js
console.log(10 == '10'); //true
```

* Ya que podemos comparar dos valores y saber si son iguales también podemos saber si son distintos utilizando el operador `!=`

**Ejemplo:**
```js
var numero1 = 20;
var numero2 = 20;
var numero3 = 10;

console.log(numero1 != numero2); // false
console.log(numero1 != numero3); // true
```

* Otra forma de comparar valores es saber si un valor es más grande que otro
* Utilizamos el operador `>` para saber si el valor de la izquierda del operador es más grande que el valor de la derecha

**Ejemplo:**
```js
var numero1 = 20;
var numero2 = 10;

console.log(numero1 > numero2); // true
```

* También podemos saber si un valor es más chico que otro utilizando el operador <

**Ejemplo:**
```js
var numero1 = 20;
var numero2 = 10;

console.log(numero2 < numero1); // true
```

* En algunos casos necesitamos saber si un valor es más grande o igual que otro
* Es decir que esta condición se va a transformar en verdadera en caso de que el valor de la izquierda sea más grande o el mismo valor que el de la derecha

**Ejemplo:**
```js
var numero1 = 20;
var numero2 = 10;
var numero3 = 20;

console.log(numero1 >= numero2); // true
console.log(numero1 >= numero3); // true
```

* Podemos hacer lo mismo para saber si es menor

**Ejemplo:**
```js
var numero1 = 20;
var numero2 = 10;
var numero3 = 10;

console.log(numero2 <= numero1); // true
console.log(numero2 <= numero3); // true
```

### Comparación Estrícta
* La comparación estricta no solo compara el valor sino también el tipo de dato
* Utilizamos el operador `===` para comparar si son el mismo tipo de dato y valor
* Utilizamos el operador `!==` para comparar si son el distintos tipo de dato y valor

**Ejemplo:**
```js
console.log(10 === '10'); // false
console.log(10 !== '10'); // true
console.log(10 !== '10'); // true
```

* Los dos últimos casos da **true** ya que no importa el valor que tengan ambos valores son distintos tipo de dato

#### Práctica
[Ejercicio 34](./ejercicios/ej34.md)
[Ejercicio 35](./ejercicios/ej35.md)

## Operadores lógicos
* Existen operadores lógicos que nos permiten anidar condicionales
* Puedo saber si dos conciones son **true** utilizando el operador `&&` conocido como **and** o en español como **Y**
* Por ejemplo si queremos saber si el la edad del usuario es mayor de 18 años y si el password es el esperado lo podemos hacer de la siguiente manera
* Para que este operador retorne **true** ambas condiciones deben ser verdaderas

**Ejemplo**
```js
var edad = 20;
var password = 'js1234';
var resultado = edad >= 18 && password ==='js1234';
console.log('resultado: ', resultado); // true
```

* En este ejemplo obtenemos un valor de true ya que ambas condiciones (edad >= 18 y password === 'js1234') son verdaderas
* Existe el operador `||` conocido como **or** u **O** en español que nos permite preguntar si al menos una de 2 condiciones es verdadera.
* Si la primer condición es verdadera ya no evalúa la segunda ya que al menos una de las dos condiciones es verdadera
* Caso de que la primer condición no sea verdadera va a comprobar si la segunda lo es
* Si ninguna de las dos condiciones es verdadera retorna falso
* Este operador retorna **true** si al menos una de las condiciones es verdadera

**Ejemplo**
```js
var edad = 20;
var password = 'js12345';
var resultado = edad >= 18 || password ==='js1234';
console.log('resultado: ', resultado); // true
```

* En este caso la condición es verdadera ya que la edad del usuario es mayor a 18 y no importa si el password es igual o no

**Ejemplo**
```js
var edad = 10;
var password = 'js1234';
var resultado = edad >= 18 || password ==='js1234';
console.log('resultado: ', resultado); // true
```

* En este caso el resultado es **true** ya que el usuario no es mayor de 18 pero el password es correcto

**Ejemplo**
```js
var edad = 10;
var password = 'js12345';
var resultado = edad >= 18 || password ==='js1234';
console.log('resultado: ', resultado); // false
```

* En este caso la condición es **false** ya que ambas condiciones son falsas

## Negación
* Por medio del operador `!` podemos negar una condición
* Si tenemos un valor **true** negado obtenemos un valor **false**
* Si tenemos un valor **false** negado obtenemos un valor **true**

**Ejemplo**
```js
console.log(!true); // false
console.log(!false); // true
```

* Por ejemplo podemos utilizar la negación en el siguiente caso:

**Ejemplo**
```js
var edad = 21;
var resultado = edad < 18;
console.log('El usuario es mayor de edad?: ', !resultado); // la condición es false pero al negarla pasa a ser verdadera
```

#### Práctica
[Ejercicio 36](./ejercicios/ej36.md)
[Ejercicio 37](./ejercicios/ej37.md)