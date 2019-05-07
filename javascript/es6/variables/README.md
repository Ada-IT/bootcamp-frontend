# **let, const**

**Repaso de Variables**

Una variable es como una caja, y dentro de ella podemos guardar cosas. Sólo que en las variables de JavaScript la caja sólo puede guardar una sola cosa a la vez.
Se las llama variables porque su contenido puede cambiar en cualquier momento durante el desarrollo de un programa. De esta forma, una variable en JavaScript puede contener distintas cosas según donde se encuentre en el programa: números, letras, fechas, y otros valores.

Para usar una variable, primero tenemos que crearla (a esto se le llama declarar una variable). Para hacerlo, escribimos la palabra clave var seguido del nombre que le quieres poner a la variable:

```js
var nombre = 'Ada';
var edad = 27;
```

**Scope de Variables**

El scope de una variable hace referencia al lugar donde va a vivir esta, o donde podrá ser accesible.

Cuando creamos una variable utilizando var, esta se crea con un scope de función, por lo que va a existir solo dentro del bloque de código de la función.

```js
function unaFuncion() {
  var nombre = 'Hedy'
  console.log(nombre); // 'Hedy'
}

unaFuncion();

console.log(nombre); // nombre is not defined
```

Como podemos ver en el ejemplo, la variable que declaramos con `var` llamada `nombre` no es accesible por fuera de la función.
Otro tipo de bloques (como los if/else, for, while, etc) no se consideran como un scope.

```js
if(true) {
  var nombre = 'Grace'
}

console.log(nombre); // 'Grace'
```

En este caso, utilizando `var`, podemos acceder a la variable nombre por fuera del bloque del `if`.

Con la introducción de **ES6**, se agregaron nuevas formas de crear una variable.

## **let, const y la introducción del scope de bloque**

En ES6, `let` y `const` fueron introducidos como formas alternativas para crear una variable, teniendo las dos un scope de bloque.

En el scope de bloque, cualquier bloque (function, if, else, for, etc) va a ser considerado como un scope.

De esta forma, function sigue teniendo el mismo criterio al momento de declarar una variable.

```js
function unaFuncion() {
  let nombre = 'Ada'
  console.log(nombre); // 'Ada'
}

unaFuncion();

console.log(nombre); // nombre is not defined
```

Pero en el caso de otro tipo de bloque, ahora si clasifican como un scope.

```js
if(true) {
  let nombre = 'Grace'
}

console.log(nombre); // nombre is not defined
```

## **let**

`let` funciona similar  a `var`, pero la variable es creada con un scope de bloque. Esto quiere decir que esa variable solo vivirá en el bloque (global, function, if, for, etc) actual donde se está creando.

## **const**

`const` funciona igual que `let`, con la diferencia que la variable que estamos declarando tiene que ser inicializada inmediatamente, y esa variable no va a poder ser **reasignada** después.

```js
const nombre;
// SyntaxError: missing = in const declaration
```

```js
const nombre = 'Ada';
nombre = 'Grace';
// Uncaught TypeError: Assignment to constant variable.
```

`const` y `let` crean variables con scope de bloque (solo existen dentro del bloque interno que las rodea).

```js
if (true) {
  var nombreVar = 'Ada'
}
if (true) {
  let nombreLet = 'Grace'
}
if (true) {
  const nombreConst = 'Hedy'
}

console.log(nombreVar); // Ada
console.log(nombreLet); // Uncaught ReferenceError: nombreLet is not defined
console.log(nombreConst); // Uncaught ReferenceError: nombreConst is not defined
```

# **Strings/Template literals**

Con la llega de `ES6`, tenemos una nueva forma de escribir strings en JavaScript, más cómoda y legible que cómo se hacía antes.

Antes, si queríamos imprimir un string con varias variables, teníamos que hacer lo siguiente:

```js
const nombre = 'Ada;
const apellido = 'Lovelace';
console.log('Hola, mi nombre es ' + nombre + ' ' + apellido);
// Hola, mi nombre es Ada Lovelace
```

Con `ES6`, utilizando template strings, podemos escribir lo mismo de una forma más cómoda utilizando las comillas invertidas **``** y el símbolo del dólar `$` seguido de las llaves `{}`, sin necesidad de usar el operador + para concatenar los strings.

```js
const nombre = 'Ada;
const apellido = 'Lovelace';
console.log(`Hola, mi nombre es ${nombre} ${apellido}`);
// Hola, mi nombre es Ada Lovelace
```

Dentro de `${ }` podemos agregar cualquier cosa, incluso una expresión de JavaScript.

```js
const nombre = 'Ada';
const apellido = 'Lovelace';

console.log(`Hola, mi nombre es ${nombre} ${apellido.toUpperCase()}`);
// Hola, mi nombre es Ada LOVELACE
```

**Strings Multilinea**

Antes de `ES6`, para escribir strings multilínea teníamos que hacerlo de una forma no muy cómoda utilizando el caractar \n
```js
console.log('Esto es una línea\nEsto es otra línea\n y esto es la 3a línea');
```

O de esta forma para leerlo “mejor”:

```js
console.log('Esto es una línea\n' +
    'Esto es otra línea\n' +
    'y esto es la 3a línea');
```

Con las comillas invertidas utilizadas en los template strings podemos añadir espacios y saltos de línea sin la necesidad de utilizar operadores extra ni el + para concatenar.

```js
console.log(`Esto es una línea
     Esto es otra línea
     y esto es la 3a línea`);
```

Y también combinarlo con la interpolación de variables.

```js
const nombre = 'Ada';
const email = `
  Hola ${nombre},

  ¡Buen día!

  ...

  Saludos,
`;

console.log(email);
//  Hola Ada,
//
//  ¡Buen día!
//
//  ...
//
//  Saludos,
```

[**`Ver PPT let, const + String Literals`**](clase_1.pdf)