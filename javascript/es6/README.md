# **ES6**

## **let, const**

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

## **Strings/Template literals**

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

[**`Ver PPT Arrow Functions + Default Parameters`**](clase_2.pdf)

## **Spread Operator**

El operador de propagación (spread operator) permite que un iterable (como un array o un string) se pueda expandir en un lugar donde se esperan 0 o más argumentos/elementos. También permite que objetos se expanda en un lugar donde 0 o más pares de propiedad-valor se esperan. **¿WAT?**

Esta definición, en un principio, es bastante común que sea prácticamente inentendible. Por esto, vamos a dividirlo en partes y mostrar varios ejemplos para entender el funcionamiento del operador.

El spread operator se escribe con 3 puntos suspensivos **`...`**

Vamos a ver un pequeño ejemplo. Supongamos que tenemos la siguiente función suma:

```js
function suma (a, b, c) {
 return a + b + c;
}
```

Y también tenemos un array con 3 números.

```js
const valores = [1, 2, 3];
```

Si nos preguntamos a nosotras, ¿cómo podríamos ejecutar la función pasando esos 3 valores como parámetros? Una posible solución, sería hacer lo siguiente:

```js
const resultado = suma(valores[0], valores[1], valores[2]);
```

Funciona. Pero, ¿qué pasa si la función tuviera un número de parámetros variable? o incluso más simple, ¿qué pasa si tenemos un escenario donde esta función espera 20 valores y yo tengo un array de 20 números?

Acá es cuando las cosas se ponen un poco ridículas, ¿vamos a acceder a todos los valores directamente a través del índice?

Consideremos el siguiente ejemplo:

```js
function suma (a,b,c,d,e,f,g,h,i,j,k,ohpordio) {
 return a+b+c+d+e+f+g+h+i+j+k+ohpordio;
}

const valores = [1,2,3,4,5,6,7,8,9,11,12];
```

¡Es en estos momentos en donde empieza a brillar el operador de propagación!

Imaginemos que el array valores de números es una caja que contiene todos estos números en forma muy ordenada, cada uno con un índice.

Cuando accedemos al valor de un índice del array como por ejemplo `valores[1]`, estamos obteniendo únicamente ese valor, que es lo que hicimos en el primer ejemplo. Continuando con la misma idea, ¿qué pasaría si quisiéramos obtener TODOS los valores en el orden exacto en que están en la caja?

Tal vez podría ser muy bueno hacer algo como `valores[0-11]`, pero en lugar de eso lo escribimos así ...valores.

Entonces en este caso de la función en particular, podemos escribir:

```js
const resultado = suma(...valores);
```

Cuando sacamos los valores del array, no sólo los estamos lanzando así nomás al viento, sino que se posicionan en sus respectivos parámetros de la función. a será 1, b será 2 y así sucesivamente.

**Casos de uso comunes**

Si bien el ejemplo visto antes está muy bien, no es lo más usado.

1. Concatenar arrays:

    ```js
    const positivos = [1, 2, 3, 4, 5];
    const negativos = [-5, -4, -3, -2, -1];

    const todosLosNumeros = [...negativos, ...positivos];
    ```

    Lo primero que hacemos es definir dos arrays positivos y negativos. Pero miremos un poco más en detalle la 3ra línea.

    Vamos a guardar en la variable todosLosNumeros el resultado de concatenar los otros dos arrays.
    Lo que estamos diciendo en este ejemplo es: JS, agarrá el contenido de lo que tenés en ambos arrays y tiralo en la nueva caja llamada todosLosNumeros. El orden de los elementos se va a respetar.

    El resultado final es:

    ```js
    [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]
    ```

2. Copiar arrays u objetos:

    Otro gran uso que se hace del spread operator, es para copiar arrays y/o objetos. Cuando en JS estamos asignando a una variable un array o un objeto, lo que estamos haciendo es guardar algo llamado “puntero”, que sería algo como la dirección donde este objeto/array se guardó.

    Entonces, si hacemos:

    ```js
    const playlist = ['Uno Entre 1000', 'Caravana'];
    const copiaPlaylist = playlist;
    ```

    Y queremos agregar una nueva canción en la copia, pero no en el array original:

    ```js
    copiaPlaylist.push('La Excepción');
    ```

    Se va a agregar en ambos, ya que la variable “apunta” al mismo array.

    ```js
    console.log(playlist); // ['Uno Entre 1000', 'Caravana', 'La Excepción']
    console.log(copiaPlaylist); // ['Uno Entre 1000', 'Caravana', 'La Excepción']
    ```

    Entonces, ¿cómo hacemos la copia con el spread operator?

    ```js
    const playlist = ['Uno Entre 1000', 'Caravana'];
    const copiaPlaylist = [...playlist];

    copiaPlaylist.push('La Excepción');

    console.log(playlist); // ['Uno Entre 1000', 'Caravana']
    console.log(copiaPlaylist); // ['Uno Entre 1000', 'Caravana', 'La Excepción']
    ```

    Esto mismo, también funciona con objetos.

    ```js
    const persona = {
      nombre: 'Dave Grohl',
      edad: 50
    };

    const copiaPersona = { ...persona };

    copiaPersona.altura = 183;

    console.log(persona); // { nombre: 'Dave Grohl', edad: 50 }
    console.log(copiaPersona); // { nombre: 'Dave Grohl', edad: 50, altura: 183 }
    ```

3. Extender/concatenar objetos:

    Otro caso de uso para el spread operator, es la posibilidad de combinar objetos para crear uno nuevo. Esto permite que cuando estemos definiendo un nuevo objeto literal, vamos a poder agregar/copiar propiedades de otro objeto.

    ```js
    const persona = {
      nombre: 'Dave Grohl',
      edad: 50
    };

    const copiaPersona = {
      altura: 183,
      ...persona // copia la propiedades del objeto persona
    };

    console.log(copiaPersona); // { nombre: 'Dave Grohl', edad: 50, altura: 183 }
    ```

4. Funcionalidades con Math:

    Math es una variable global que ya viene con JS, y nos permite realizar diferentes operaciones. Dos funciones comúnes son Math.max() y Math.min(). Con el spread operator vamos a poder propagar los diferentes valores dentro de un array en cada parámetro de las funciones (ya que ninguna de las dos acepta como parámetro de entrada un array).

    ```js
    const numbers = [9, 4, 7, 1];

    console.log( Math.min(...numbers) ); // 1
    console.log( Math.max(...numbers) ); // 9
    ```

[**`Ver PPT Spread Operator`**](clase_3.pdf)

## **Destructuring**

Para explicar que es la asignación por destructuración, pensemos en el siguiente escenario. Imaginemos que tenemos la información de un alumno incluyendo las calificaciones en 3 asignaturas (matemática, informática y física), representado por un objeto, y necesitamos mostrar cierta información basada en esos datos.

Se vería algo así:

```js
const estudiante = {
  nombre: 'Ada Lovelace',
  edad: 16,
  calificaciones: {
    matematica: 10,
    informatica: 9,
    fisica: 8
  }
};

function mostrarResumen (alumno) {
  console.log('Hola, ' + alumno.nombre);
  console.log('Calificación en Matemática: ' + (alumno.calificaciones.matematica || 0));
  console.log('Calificación en Informática: ' + (alumno.calificaciones.informatica || 0));
  console.log('Calificación en Física: ' + (alumno.calificaciones.fisica || 0));
}

mostrarResumen(estudiante);
// Hola, Ada Lovelace
// Calificación en Matemática: 10
// Calificación en Informática: 9
// Calificación en Física: 8
```

Con este código obtenemos el resultado esperado. Sin embargo, tiene algunos puntos que se pueden mejorar. Uno de los puntos es que podríamos fácilmente tener un error de tipeo y escribir alumno.calificacion.matematica lo que resultaría en un error. Otro problema es que si la propiedad calificaciones tuviera más objetos adentro, la cadena de propiedades sería muy larga y propensa a errores.

Destructuring va a permitirnos hacer hacer lo mismo de una forma expresiva y compacta.

**Entonces… ¿Qué es Destructuring?**

Destructuring es simplemente partir una estructura compleja en partes más simples. En JS estas estructuras complejas son generalmente objetos o arrays.
Con la sintáxis de destructuring, vamos a poder extraer fragmentos más chicos de arrays/objetos. Se puede utilizar para la declaración o asignación de variables.

Con destructuring, la función del ejemplo anterior se vería de la siguiente forma:

```js
function mostrarResumen ( { nombre, calificaciones: { matematica = 0, informatica=  0, fisica=  0 }} ) {
  console.log('Hola, ' + nombre);
  console.log('Calificación en Matemática: ' + matematica);
  console.log('Calificación en Informática: ' + informatica);
  console.log('Calificación en Física: ' + fisica);
}
```

### Object Destructuring

Lo que vimos en los anteriores ejemplos es una forma de destructuración de objetos. Vamos a ver qué podemos hacer con object destructuring.

```js
const estudiante = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  pais: 'UK'
};

// Object Destructuring
const { nombre, apellido, pais } = estudiante;

console.log(nombre, apellido, pais); // Ada Lovelace UK
```

Usamos object destructuring para asignar valores a 3 variables: nombre, apellido y pais, usando los valores de sus correspondientes claves en el objeto del estudiante. Es la forma más básica de utilizar destructuring.

También podemos utilizar valores por defecto. Cuando tratamos de asignar una variable correspondiente a una clave que no existe en el objeto, el resultado que vamos a tener es undefined. Podemos utilizar valores por defecto para asignar ese valor en lugar de undefined cuando la propiedad no se encuentra presente en el objeto.

```js
const estudiante = {
  nombre: 'Ada',
  apellido: 'Lovelace'
};

// Object Destructuring
const { nombre, apellido, pais = 'AR' } = estudiante;

console.log(`Hola soy ${nombre} ${apellido}, y soy de ${pais}`); // Hola soy Ada Lovelace, y soy de AR
```

En este ejemplo le dimos el valor por defecto de AR a la variable pais. Como la propiedad no se encuentra en el objeto, AR se asigna a la variable pais en lugar de undefined.

Hasta ahora utilizamos nombres de variables que coinciden con el nombre de las propiedades del objeto. Podemos asignar los valores a variables con diferentes nombres utilizando la sintaxis [clave]: [nombreVariable]. Incluso es posible asignarle un valor por defecto de la siguiente forma [clave]: [nombreVariable] = [valorDefault].

```js
const estudiante = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  pais: 'UK'
};

// Object Destructuring
const { nombre: firstname, apellido: lastname, pais: country = 'AR' } = estudiante;

console.log(`Hola soy ${firstname} ${lastname}, y soy de ${country}`); // Hola soy Ada Lovelace, y soy de UK
```

En este ejemplo creamos 3 variables locales (firstname, lastname, country), que se corresponden con las propiedades nombre, apellido y pais del objeto estudiante. Notemos como le asignamos un valor por default a country, para evitar que sea undefined en caso que no exista esa propiedad en el objeto.

**Destructuring de objetos anidades**

Volviendo al ejemplo inicial de destructuring, podemos observar que el objeto `calificaciones` es un objeto anidado dentro de `estudiante`. Supongamos que queremos guardar las calificaciones de matemática y física en variables locales. El siguiente código muestra como usamos *destructuring* para hacerlo:

```js
const estudiante = {
  nombre: 'Ada Lovelace',
  edad: 16,
  calificaciones: {
    matematica: 10,
    informatica: 9,
    fisica: 8
  }
};

// definimos 3 variables locales: nombre, matematica y fisica
const { nombre, calificaciones: {matematica, fisica = 50} } = estudiante;

console.log(`${nombre} se sacó ${matematica} en Matemática y ${fisica} en Física.`);
// Ada Lovelace se sacó 10 en Matemática y 8 en Física.
```

Acá, definimos 3 variables locales: nombre, matematica y fisica. También, especificamos un valor por defecto para `fisica` en el caso que no exista en el objeto anidado. **Veamos que la variable `calificaciones` no está definida**. En lugar de eso, usamos `nested destructuring` para extraer la los valores de `matematica` y `fisica` del objeto `calificaciones` anidado.

Cuando usamos destructuring en objetos anidados, tenemos que cuidar de **no** usar un objeto vacío. Si bien es una sintáxis válida, en realidad no estaría haciendo ninguna asignación. Por ejemplo:

```js
const estudiante = {
  nombre: 'Ada Lovelace',
  edad: 16,
  calificaciones: {
    matematica: 10,
    informatica: 9,
    fisica: 8
  }
};

// esto no hace ninguna asignación
// debido a que estamos desestructurando un objeto vacio
const { calificaciones: {} } = estudiante;

console.log(calificaciones); // ReferenceError: calificaciones is not defined
```