## Funciones

* En ECMAScript las **funciones son un tipo de dato**
* Las utilizamos para agrupar funcionalidad para utilizarlo todas las veces que necesite
* Utilizamos la palabra reservada **function** para declarar una función
* Para **ejecutar** una función primero la tengo que declarar
* Podemos **ejecutar** las funciones utilizando el **nombre de la función y paréntesis**

**Ejemplo:**
```js
function saludar() {
  console.log('hola');
}

saludar(); // Muestra en consola hola
saludar(); // Muestra en consola hola
```

* En este ejemplo vemos que podemos definir una función con el nombre **saludar** y luego la utilizamos llamandola con el **nombre y los paréntesis**
* Podemos utilizar una función tantas veces como lo necesitemos
* Cuando vemos que estamos repitiendo código es un caso común donde podemos mejorarlo y separar ese código en una función
* También el uso de funciones nos hace más fácil testear nuestro código

#### Prácticas
[Ejercicio 001](./ejercicios/fn_001.md)
[Ejercicio 002](./ejercicios/fn_002.md)

* Dado que las funciones en ECMASCript son un tipo de dato lo podemos asignar a una variable
* Al asignar una función a una variable no necesitamos darle un nombre ya que para eso podemos utilizar la variable
* Las **funciones** que no tienen nombre se denominan **anónimas**

**Ejemplo:**
```js
// Al asignar una función a una variable no hace falta ponerle nombre a la función
var saludar = function() {
  console.log('hola');
}

saludar(); // Muestra en consola hola
saludar(); // Muestra en consola hola
```

* En este ejemplo declaramos la variable **saludar** y le asignamos un tipo de dato **function**
* La asignación funciona de la misma forma que si fuera cualquier otro tipo de dato (string, number, boolean y ahora function)

#### Prácticas
[Ejercicio 003](./ejercicios/fn_003.md)
[Ejercicio 004](./ejercicios/fn_004.md)
[Ejercicio 005](./ejercicios/fn_005.md)

* Una función puede o no retornar un valor
* Cuando una función no retorna un valor obtenemos **undefined** como se ve al ejecutar `console.log()` en la consola
* Para retornar un valor utilizamos la palabra reservada **return** dentro de la función

**Ejemplo:**
```js

function obtenerSaludo() {
  return 'hola'
}

// obtenerSaludo retorna un tipo de dato string y lo podemos mostrar en console.log()
console.log(obtenerSaludo());

// Podemos guardar el valor retornado de una función en una variable y luego utilizarlo
var saludo = obtenerSaludo();
console.log(saludo)
```

* Una función puede retornar cualquier tipo de dato

**Ejemplo:**
```js
function conseguirLaEdadDelUsuario() {
  return 30;
}

function usuarioLoggeado() {
  return true;
}
```

* Dado que las funciones retornan un valor podemos utilizar estos valores en los condicionales de ser necesarios

**Ejemplo:**
```js
function conseguirLaEdadDelUsuario() {
  return 30;
}

function usuarioLoggeado() {
  return true;
}

if (conseguirLaEdadDelUsuario() >= 18) {
  console.log('El usuario es mayor de 18')
}

if (usuarioLoggeado()) {
  console.log('Bienvenido usuario a nuestro sitio');
}
```

* En el primer caso la función retorna un valor numérico por lo cual podemos compararlo y obtener un resultado booleand true/false según el valor retornado por la función
* En el segundo caso una función puede retornar un valor boolean directamente y lo podemos utilizar como condición. Si el usuario está loggeado podemos saludarlo

#### Prácticas
[Ejercicio 006](./ejercicios/fn_006.md)
[Ejercicio 007](./ejercicios/fn_007.md)
[Ejercicio 008](./ejercicios/fn_008.md)
[Ejercicio 009](./ejercicios/fn_009.md)

* Las funciones también aceptan uno o varios valores como parametros
* Utilizando parametros hacemos que nuestras funciones sean más flexibles y le podemos dar más funcionalidades
* Al declarar una función podemos establecer la cantidad de parámetros que acepta esa función y ponerles un nombre a cada uno
* También podemos poner un nombre a cada parámetro para que tenga más contexto dentro de la función
* Dentro de la función podemos interactuar con los parámetros

**Ejemplo:**
```js
function(parametro1, parametro2, parametro3) {
  console.log(parametro1, parametro2, parametro3)
}
```

* Por ejemplo podemos utilizar los parámetros de la siguiente forma

**Ejemplo:**
```js
function saludar(nombrePersona) {
  console.log('¡Hola ' + nombrePersona + '!');
}

saludar('Ada'); // Muestra en consola: ¡Hola Ada!
saludar('Grace'); // Muestra en consola: ¡Hola Grace!
saludar('Hedy'); // Muestra en consola: ¡Hola Hedy!
```

* En este ejemplo vemos varias cosas
  * Declaramos una función saludar
  * La función saludar espera un parámetro que le pusimos el nombre de **nombrePersona**
  * **nombrePersona** en la función no es más que una variable que va a tomar un valor según lo que le pasen como parámetro a la función
  * Al ejecutar la función `saludar('Ada')` estamos pasando 'Ada' como parámetro
  * Dentro de la función **nombrePersona** tiene asignado el nombre que le pasaron, ejemplo en el primer llamado tiene 'Ada', en el segundo 'Grace' y en el tercero 'Hedy'
  * Podemos cambiar los valores que le pasamos como parámetros a una función y eso es lo que le da tanta felxibilidad a las funciones

**Ejemplo:**
```js
var saludar = function(nombrePersona) {
  console.log('¡Hola ' + nombrePersona + '!');
}

saludar('Ada'); // Muestra en consola: ¡Hola Ada!
saludar('Grace'); // Muestra en consola: ¡Hola Grace!
saludar('Hedy'); // Muestra en consola: ¡Hola Hedy!
```

* También podemos utilizar una variable para asignarle la función con el parámetro esperado y obtener el mismo resultado
* Otra forma similar de hacer esto es utilizando el valor de retorno

**Ejemplo:**
```js
var saludo = function(nombreDelUsuario) {
  return '¡Hola ' + nombreDelUsuario + '!';
}

console.log( saludo('Ada') ); // Muestra en consola: ¡Hola Ada!
console.log( saludo('Grace') ); // Muestra en consola: ¡Hola Grace!
console.log( saludo('Hedy') ); // Muestra en consola: ¡Hola Hedy!
```

* Este ejemplo es un poco más difícil de ver pero funciona de forma similar a la anterior
* En este caso declaramos la función y la asignamos a la variable saludo
* Ahora podemos pasar un nombre a saludo() y obtener un string como respuesta
* Al valor retornado por la función saludo lo mostramos en consola
* Una función puede aceptar más de un parámetro
* Es importante el orden en que ponemos los parámetros para utilizar una función

**Ejemplo:**
```js
var saludar = function(nombreDelUsuario, edad) {
  console.log('¡El usuario ' + nombreDelUsuario + ' tiene años' + edad + '!');
}

saludar('Ada', 27); // ¡El usuario Ada tiene 27 años!
saludar(35, 'Grace'); // ¡El usuario 35 tiene Grace años!
```

* En el primer llamado la función espera el nombre como primer parámetro y la edad como segundo por lo cual como se le pasaron los parámetros correctamente puede mostrar el mensaje bien
* En el segundo llamado se utilizan mal los parámetros por lo cual se muestra mal el mensaje

#### Prácticas
[Ejercicio 010](./ejercicios/fn_010.md)
[Ejercicio 011](./ejercicios/fn_011.md)
[Ejercicio 012](./ejercicios/fn_012.md)
[Ejercicio 013](./ejercicios/fn_013.md)
[Ejercicio 014](./ejercicios/fn_014.md)
[Ejercicio 015](./ejercicios/fn_015.md)
[Ejercicio 016](./ejercicios/fn_016.md)
[Ejercicio 017](./ejercicios/fn_017.md)
[Ejercicio 018](./ejercicios/fn_018.md)
[Ejercicio 019](./ejercicios/fn_019.md)
[Ejercicio 020](./ejercicios/fn_020.md)

## **Arrow functions**

Las arrow functions son uno de los cambios más impactantes en ES6, y se usan ampliamente en la actualidad. Se diferencian ligeramente de las funciones regulares vistas anteriormente.

Las arrow functions son una forma más concisa para escribir funciones. Utilizan el token `=>`, que parece una flecha. Las arrow functions **son anónimas**.

Las arrow functions hacen que nuestro código sea más conciso. Al utilizarlas, evitamos tener que escribir la palabra reservada function, la palabra reservada return (está implícita en las arrow functions) y las llaves.

```js
// ES5
var saludar = function() {
 console.log('¡Hola mundo!');
};

// ES6
const saludar = () => {
 console.log('¡Hola mundo!');
};
```

**Casos de uso**

1. Funciones con múltiples parámetros

    ```js
    var multiplicar = function (x, y) {
      return x * y;
    }// ES5


    // ES6
    const multiplicar = (x, y) => {
      return x * y;
    }
    ```

    En este ejemplo vemos como las arrow functions permiten llegar al mismo resultado con menos código.
    Cuando la función tiene una sola expresión, podemos escribirla en una sola línea evitando las llaves y la palabra return

    ```js
    const multiplicar = (x, y) => x * y;
    ```


2. Funciones simples con un parámetro

    Cuando una función tiene un solo parámetro, los paréntesis de los parámetros son opcionales.

    ```js
    // ES5
    var saludar = function (nombre) {
      return `¡Hola, ${nombre}!`;
    }

    // ES6
    const saludar = nombre => `¡Hola, ${nombre}!`;

    console.log( saludar('Ada') ); // ¡Hola, Ada!
    ```


3. Funciones sin parámetros

    Cuando una función no tiene parámetros, los paréntesis de los parámetros son obligatorios.

    ```js
    // ES5
    var saludar = function () {
      return `¡Hola, mundo!`;
    }

    // ES6
    const saludar = () => `¡Hola, mundo!`;

    console.log( saludar() ); // ¡Hola, mundo!
    ```


4. Funciones con cuerpo

    Cuando la función tiene más de una expresión, las llaves son obligatorias y es necesario el uso explícito de la palabra return.

    ```js
    const nombreLargo = nombre => {
      if (nombre.length > 10) {
        return true
      } else {
        return false
      }
    }
    ```

En resumen, las arrow functions tienen 2 grandes beneficios:
- Una sintaxis más reducida que las típicas funciones
- No hace el rebinding de this


## **Parámetros por default**

Los parámetros por default permiten que los parámetros de una función puedan ser definidos con un valor inicial.

Por defecto, todos los parámetros en ECMAScript son **undefined**. Los parámetros por default nos permiten cambiarles ese valor por defecto.

Supongamos que tenemos el siguiente ejemplo desarrollado con una versión más vieja de ECMAScript (ES5):

```js
var sumar = function (a, b) {
 console.log(a + b);
}

sumar(2); // NaN
sumar(2, 5); // 7
```

Lo que está pasando es que nuestra función sumar **espera que si o si le pasemos dos parámetros**. En el ejemplo, como solo la ejecutamos con un parámetro,no puede realizar la suma y nos termina mostrando por consola el valor NaN (not a number).

Si utilizaramos default parameters, esto podríamos arreglarlo de la siguiente forma:

```js
const sumar = function (a, b = 0) {
 console.log(a + b);
}

sumar(2); // 2
sumar(2, 5); // 7
```

En este último ejemplo, cuando escribimos `function (a, b = 0)` le estamos diciendo que la variable b tenga un valor inicial de 0. Si ejecutamos la función con un solo parámetro, entonces b va a tener el valor 0. Si ejecutamos la función con los dos parámetros, entonces b va a tener el valor que hayamos puesto al ejecutar la función.

Los parámetros por defecto pueden ser realmente útiles para asegurarnos que los datos que nos llegan en una función estén disponibles para realizar una acción.

```js
const incrementar = (numero, cantidad = 1) => numero + cantidad;

console.log( incrementar(4) ) // 5
console.log( incrementar(5, 8) ) // 13
console.log( incrementar(7) ) // 8
```

[**`Ver PPT Arrow Functions + Default Parameters`**](arrowFunctions.pdf)