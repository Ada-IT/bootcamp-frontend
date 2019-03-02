##  Arrays

* Otro de los tipos que tenemos en ECMASCript es el **array**
* Este tipo de dato nos permite guardar múltiples valores en una sola variable
* Podemos ver este tipo de datos como una colección
* La forma de crear un **array** es utilizando los corchetes y separar los valores utilzando comas


**Ejemplo:**
```js
['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
```

* En este caso tenemos un **array** que tiene 4 elementos que parecen ser personas


**Ejemplo:**
```js
var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

// otra forma de escribir esto puede ser:
var playlist = [
  'Smells Like Teen Spirit',
  'Come As You Are',
  'Heart-Shaped Box',
  'Lithium'
];
```

* También podemos crear un array vacío ya que no siempre sabemos que elementos va a tener

**Ejemplo:**
```js
var playlist = [];
```

* Un array puede guardar cualquier tipo de dato

**Ejemplo:**
```js
var datos = [
  'Ada',
  42,
  true,
  null,
  function() { console.log('¡hola!') }
];
```

* Para obtener los datos de un array podemos utilizar el índice
* Los índices en ECMAScript comienzan en 0
* Es decir que el primer item lo podemos obtener con el índice 0

**Ejemplo:**
```js
var datos = [
  'Ada',
  42,
  true,
  null,
  function() { console.log('¡hola!') }
];

var nombre = datos[0];
var edad = datos[1];
var esProgramadora = datos[2];
var miVariable = datos[3];
var saludar = datos[4];

console.log(nombre);
console.log(edad);
console.log('programadora?:', esProgramadora);
console.log(miVariable);

// Acá se viene el gran momento de tu vida:
saludar(); // muestra en consola hola
```

* En este ejemplo vemos que podemos acceder a los distintos elementos de un **array** utilizando un índice numérico
* Podemos almacenar todos los datos en otras variables
* En el caso de la función estamos simplemente asignando una función a la variable saludar como cualquier otro valor (ECMAScript nos deja hacer esto) y luego ejecutamos esta función

#### Prácticas
[Ejercicio 000](./ejercicios/arr_000.md)
[Ejercicio 001](./ejercicios/arr_001.md)
[Ejercicio 002](./ejercicios/arr_002.md)
[Ejercicio 003](./ejercicios/arr_003.md)
[Ejercicio 004](./ejercicios/arr_004.md)

* También podemos asignar un valor a una posición de un array utilizando el índice

**Ejemplo:**
```js
var peliculas = ["Superman", "Batman Begins", "The Dark Knight", "Man of Steel", "The Batman"];

peliculas[0] = 'Batman';
peliculas[3] = 'The Dark Knight Rises';

console.log(peliculas);
// [ 'Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises', 'The Batman' ]
```

* Tenemos que tener cuidado al asignar un item de un array

**Ejemplo:**
```js
var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
peliculas[8] = 'The Batman';
console.log(peliculas);
// ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises', , , , , 'The Batman']
```

* ECMAScript al manejar la memoria de forma dinámica asigna espacios vacíos en las posiciones donde no existen valores

**Ejemplo:**
```js
var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
peliculas[4] = 'Batman: The Killing Joke';
peliculas[5] = 'Batman: The Dark Knight Returns, Part 1';
peliculas[6] = 'Batman: The Dark Knight Returns, Part 2';
peliculas[7] = 'LEGO Batman';
peliculas[8] = 'The Batman';
console.log(peliculas);
/*
[
  'Batman',
  'Batman Begins',
  'The Dark Knight',
  'The Dark Knight Rises',
  'Batman: The Killing Joke',
  'Batman: The Dark Knight Returns, Part 1',
  'Batman: The Dark Knight Returns, Part 2',
  'LEGO Batman',
  'The Batman'
]
*/
```
* En este caso completamos los datos que nos faltaban utilizando índices

#### Prácticas
[Ejercicio 005](./ejercicios/arr_005.md)
[Ejercicio 006](./ejercicios/arr_006.md)
[Ejercicio 007](./ejercicios/arr_007.md)

## Métodos y Propiedades más utilizados del Array

### Longitud
* Por medio de la propiedad **length** podemos obtener la cantidad de elementos que tiene un **array**
* Funciona de la misma forma que la propiedad **length** de los **strings**

**Ejemplo:**
```js
var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
console.log(peliculas.length); // 4
```

* Podemos utilizar esta propiedad para obtener el último elemento de un array
* Si a la longitud de un array le restamos 1 obtenemos el último índice del último elemento

**Ejemplo:**
```js
var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
var cantidadDePeliculas = peliculas.length;
var ultimoIndice = cantidadDePeliculas - 1;
console.log(peliculas[ultimoIndice]); // The Dark Knight Rises
```

* Otra forma de escribir esto es:
**Ejemplo:**
```js
var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
console.log(peliculas[ peliculas.length - 1 ]); // The Dark Knight Rises
```

* Vemos que podemos utilizar la propiedad length - 1 para obtener el último índice y luego obtener el último elemento

#### Prácticas
[Ejercicio 008](./ejercicios/arr_008.md)
[Ejercicio 009](./ejercicios/arr_009.md)
[Ejercicio 010](./ejercicios/arr_010.md)

### Push, unshift, shift y pop
* Utilizando los métodos **push, unshift, shift y pop** podemos alterar los elementos de un array

#### Push
* El método **push** permite agregar uno o más elementos al final de un array
* Retorna la nueva longitud que tiene el array
* Podes leer más sobre push en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push)

**Ejemplo:**
```js
var techsFrontend = ['react', 'vue', 'angular'];
var cantidadDeTechs = techsFrontend.push('backbone');

console.log(techsFrontend);
// [ 'react', 'vue', 'angular', 'backbone' ]
console.log(cantidadDeTechs); // 4

cantidadDeTechs = techsFrontend.push('ember', 'polymer');

console.log(techsFrontend);
// [ 'react', 'vue', 'angular', 'backbone', 'ember', 'polymer' ]
console.log(cantidadDeTechs); // 6
```

* En este ejemplo vemos varias cosas interesantes
* Por un lado con el método **push** podemos agregar un elemento a un array como en el caso de **backbone** o varios como en el caso de **ember y polymer**
* Estamos modificando el array original **techsFrontend**, es decir que estamos mutando su valor

#### Unshift
* El método **unshift** agrega uno o más elementos al inicio de un array
* Retorna la nueva longitud que tiene el array
* Podes leer más sobre **unshift** en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/unshift)

**Ejemplo:**
```js
var techsFrontend = ['react', 'vue', 'angular'];
var cantidadDeTechs = techsFrontend.unshift('backbone');

console.log(techsFrontend);
// [ 'backbone', 'react', 'vue', 'angular' ]
console.log(cantidadDeTechs); // 4

cantidadDeTechs = techsFrontend.unshift('ember', 'polymer');

console.log(techsFrontend);
// [ 'ember', 'polymer', 'backbone', 'react', 'vue', 'angular' ]
console.log(cantidadDeTechs); // 6
```

* Podemos decir que funciona como push pero en lugar de insertar los elementos al final lo hace al principio

#### Shift
* El método **shift** elimina el primer elemento de un array
* Retorna el elemento eliminado
* Este método modifica la propiedad **length** del array
* Podes leer más sobre **shift** en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/shift)

**Ejemplo:**
```js
var techsFrontend = ['react', 'vue', 'angular'];
var react = techsFrontend.shift();
console.log(techsFrontend);
// ['vue', 'angular']
console.log(techsFrontend.length);
// 2

var vue = techsFrontend.shift();
console.log(techsFrontend);
// ['angular']
console.log(techsFrontend.length);
// 1

var angular = techsFrontend.shift();
console.log(techsFrontend);
// []
console.log(techsFrontend.length);
// 0

console.log(react); // react
console.log(vue); // vue
console.log(angular); // angular
```

* Podemos ver como utilizando el método **shift** podemos obtener el primer elemento y eliminarlo del array
* Al sacar un elemento se modifica la propiedad **length** del array

#### Pop
* El método **pop** elimina el último elemento de un array
* Retorna el elemento eliminado
* Este método modifica la propiedad **length** del array
* Podes leer más sobre **pop** en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/pop)

**Ejemplo:**
```js
var techsFrontend = ['react', 'vue', 'angular'];
var angular = techsFrontend.pop();
console.log(techsFrontend);
// ['react', 'vue']
console.log(techsFrontend.length);
// 2

var vue = techsFrontend.pop();
console.log(techsFrontend);
// ['react']
console.log(techsFrontend.length);
// 1

var react = techsFrontend.pop();
console.log(techsFrontend);
// []
console.log(techsFrontend.length);
// 0

console.log(angular); // angular
console.log(vue); // vue
console.log(react); // react
```

* Vemos que el método `pop` funciona de manera similar que `shift`

#### Prácticas
[Ejercicio 011](./ejercicios/arr_011.md)
[Ejercicio 012](./ejercicios/arr_012.md)
[Ejercicio 013](./ejercicios/arr_013.md)
[Ejercicio 014](./ejercicios/arr_014.md)
[Ejercicio 015](./ejercicios/arr_015.md)
[Ejercicio 016](./ejercicios/arr_016.md)

### Sort y reverse

#### Sort
* Utilizando el método **sort** podemos ordenar un array
* Retorna el array ordenado
* Los elementos son ordenados convirtiéndolos a strings y comparando la posición del valor Unicode de dichos strings
* Podes leer más sobre **sort** en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)

**Ejemplo:**
```js
var numeros = [1, 4, 2, 5, 3, 8, 9];
numeros = numeros.sort();

console.log(numeros);
// [ 1, 2, 3, 4, 5, 8, 9 ]

var techsFrontend = ['react', 'vue', 'angular'];
techsFrontend = techsFrontend.sort();

console.log(techsFrontend);
// [ "angular", "react", "vue" ]
```

* Al ordenar utilizando los elementos usando strings y la posición en la tabal de Unicode se pueden dar resultados que no son los esperados
* También tenemos la opción de pasar una función de ordenado para establecer la forma que queremos ordenarlo (_esto vamos a verlo más adelante_)

#### Reverse
* El método **reverse** nos permite revertir el orden que tiene un array
* Retorna el array modificado
* Podes leer más sobre **reverse** en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reverse)

**Ejemplo:**
```js
var numeros = [1, 4, 2, 5, 3, 8, 9];
numeros = numeros.reverse();

console.log(numeros);
// [ 9, 8, 3, 5, 2, 4, 1 ]

var techsFrontend = ['react', 'vue', 'angular'];
techsFrontend = techsFrontend.reverse();

console.log(techsFrontend);
// [ "angular", "vue", "react" ]
```

### Concat y join
* Con los métodos **concat** y **join** podemos unir arrays de distintas formas

#### Join
* El método **join** permite unir los valores de un array en un string
* Acepta como valor un string para unir los elementos
* Podes leer más sobre **join** en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join)

**Ejemplo:**
```js
var numeros = [1, 4, 2, 5, 3, 8, 9];
var resultado = numeros.join(' - ');

console.log(resultado);
// 1 - 4 - 2 - 5 - 3 - 8 - 9

resultado = numeros.join(', ');

console.log(resultado);
// 1, 4, 2, 5, 3, 8, 9
```

* Podemos unir los valores del array utilizando un concepto que queremos como por ejemplo el '-' o ','

#### Concat
* El método **concat** nos permite unir 2 arrays y obtener un nuevo array con los elementos de ambos
* Podes leer más sobre **concat** en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/concat)

**Ejemplo:**
```js
var pares = [0, 2, 4, 6, 8];
var impares = [1, 3, 5, 7, 9];
var todosLosNumeros = pares.concat(impares);

console.log(todosLosNumeros);
// [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]

var vocales = ["A", "E", "I", "O", "U"];
var consonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var todasLasLetras = vocales.concat(consonantes);

console.log(todasLasLetras);
// ["A", "E", "I", "O", "U", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
```

* Otra forma similar de utilizar `concat()`, que es bastante frecuente, es partiendo de un array vacío y pasando a concat todos los arrays que quiero unir.

**Ejemplo:**
```js
var vocales = ["A", "E", "I", "O", "U"];
var consonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var todasLasLetras = [].concat(vocales, consonantes);

console.log(todasLasLetras);
// ["A", "E", "I", "O", "U", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
```

### IndexOf
* El método **indexOf** retorna el primer índice donde se encuentra un elemento
* Si no encuentra el elemento buscado **retorna -1**
* Podes leer más sobre **indexOf** en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf)

**Ejemplo:**
```js
var villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul", 'Scarecrow'];

if (villanosDeBatman.indexOf('Scarecrow') > -1) {
  console.log('Scarecrow es uno de los villanos de Batman.');
}
// Scarecrow es uno de los villanos de Batman.

if (villanosDeBatman.indexOf('Lex Luthor') > -1) {
  console.log('Lex Luthor es parte de los villanos de Batman');
} else {
  console.log('Lex Luthor no es parte de los villanos de Batman');
}
// Lex Luthor no es parte de los villanos de Batman
```

* En la primer condición se cumple ya que indexOf retorna la posición 2 donde se encuentra el elemento Bestia
* En la segunda condición no se cumple ya que indexOf retorna -1 ya que Lex Luthor no es parte del array de villanos de Batman.

### toString
* El método **toString** nos retorna la representación del contenido de un array en string
* Es similar a **join** pero no sabemos como une los elementos ya que no lo especificamos
* Podes leer más sobre **toString** en el [sitio del MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)

**Ejemplo:**
```js
var villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul", 'Scarecrow'];
console.log(villanosDeBatman.toString());
// Joker,Bane,Ra's Al Ghul,Scarecrow
```

### Recorrer un array
* La mayoría de las veces, los ciclos `for` son usados para recorrer/**iterar** sobre cada uno de los elementos de un array.
* Usando el acceso a los datos de un array mediante el índice, vamos a poder acceder a cada elemento.
* Para hacer este recorrido, vamos a utilizar la propiedad `length`

**Ejemplo:**
```js
var villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul", 'Scarecrow'];
for (var i = 0; i < villanosDeBatman.length; i++) {
  console.log(villanosDeBatman[i]);
}

// Joker
// Bane
// Ra's Al Ghul
// Scarecrow
```

* Recordemos que los índices de los arrays comienza en `0`, por eso inicializamos `i = 0`
* Esto quiere decir que el último elemento de un array siempre va a ser **su longitud - 1**
* La condición que pusimos en el **for** es `i < villanosDeBatman.length`, con la cual estamos haciendo que la última vuelta sea cuando i es la longitud - 1
* Si tenemos un array con 3 elementos, significa que el primer indice es 0 y el último 2 (_length - 1_). Entonces, con un for iteramos desde `i = 0` hasta `i < 3`

**Ejemplo:**
```js
var numeros = [8, 2, 5];
for (var i = 0; i < numeros.length; i++) {
  // en la primer vuelta del for i tiene el valor 0
  // en la segunda vuelta del for i tiene el valor 1
  // en la tercer vuelta del for i tiene el valor 2
  console.log(numeros[i]);
}

// cuando el for quiere hacer una cuarta vuelta, como i tiene valor 3 ya no es menor a la longitud (porque queda 3 < 3, y es falso) entonces deja de ejecutarse

// 8
// 2
// 5
```

* Si necesitamos recorrer el array en orden inverso, tenemos que usar un for de la misma forma que antes solo que cambiando el valor inicial de `i` y la condición
* En este caso, el primer elemento que queremos mostrar va a ser el que está en la última posición `length - 1`

**Ejemplos:**
```js
var villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul", 'Scarecrow'];
// en este caso estamos diciendo que vaya desde i = 3 (length - 1)
// y en la condicion decimos que siga dando vueltas siempre que i se mayor o igual a 0
// usamos el igual porque queremos y necesitamos que llegue a 0, ya que seria el elemento que esta en la primer posición
for (var i = villanosDeBatman.length - 1; i >= 0; i--) {
  // en la primer vuelta del for i tiene el valor 2
  // en la segunda vuelta del for i tiene el valor 1
  // en la tercer vuelta del for i tiene el valor 0
  console.log(villanosDeBatman[i]);
}

// cuando el for quiere hacer una cuarta vuelta, como i ya tiene el valor -1 (y la condición queda -1 >= 0, y es falso) entonces deja de ejecutarse

// Scarecrow
// Ra's Al Ghul
// Bane
// Joker
```

* En este ejemplo, en el for, lo que hicimos fue:
  * Inicializar `i` en `length - 1` (que sería el último índice posible)
  * Dar vueltas siempre que se cumpla que i sea **mayor o igual a 0**. Acá es importante ver que necesitamos que `i` sea 0, ya que es el primer índice del array
  * En el tercer componente del for, en lugar de incrementar `i`, lo estamos decrementando

#### Prácticas
[Ejercicio 017](./ejercicios/arr_017.md)
[Ejercicio 018](./ejercicios/arr_018.md)
[Ejercicio 019](./ejercicios/arr_019.md)
[Ejercicio 020](./ejercicios/arr_020.md)
[Ejercicio 021](./ejercicios/arr_021.md)
[Ejercicio 022](./ejercicios/arr_022.md)
[Ejercicio 023](./ejercicios/arr_023.md)
[Ejercicio 024](./ejercicios/arr_024.md)
[Ejercicio 025](./ejercicios/arr_025.md)
[Ejercicio 026](./ejercicios/arr_026.md)

### forEach
* Podemos iterar o recorrer un array utilizando el método forEach()
* Este método acepta una función como parámetro
* La función que le pasamos a este método recibe como parámetro cada uno de los elementos del array

**Ejemplo:**
```js
var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];

peliculas.forEach(function(pelicula) {
  console.log(pelicula);
});

// Batman Begins
// The Dark Knight
// The Dark Knight Rises
```

* En este ejemplo vemos que podemos utilizar el método forEach en el array peliculas
* Le pasamos un function como parámetro como si fuera cualquier otro tipo de parámetro (number, string, etc)
* El parámetro que recibe esta función en este caso le pusimos pelicula ya que estamos recorriendo una colección de peliculas
* Le podemos poner el nombre que queremos al parámetro

**Ejemplo:**
```js
var techsFrontend = ['react', 'vue', 'angular'];

techsFrontend.forEach(function(tech) {
  console.log(tech);
});

// react
// vue
// angular
```

* En este caso la colección es de tecnologías por lo cual utilizamos el nombre `tech` para que tenga sentido que cada elemento de la colección es una tecnología. Podríamos utilizar otros como item, elemento o lo que a nosotros nos guste. Siempre es mejor poner un nombre con contexto que explique de forma fácil de que es la colección que estamos iterando y los elementos que estamos utilizando

* Podemos obtener otro parámetro más en la función que se ejecuta por cada elemento que es el índice del elemento

**Ejemplo:**
```js
var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

playlist.forEach(function(cancion, indice) {
  console.log('indice', indice);
  console.log(cancion);
});

// indice 0
// Smells Like Teen Spirit
// indice 1
// Come As You Are
// indice 2
// Heart-Shaped Box
// indice 3
// Lithium
```

* Vemos en este ejemplo que agregando un segundo parámetro podemos obtener el índice de los elementos y como primer valor el elemento en sí.

#### Prácticas
[Ejercicio 027](./ejercicios/arr_027.md)
[Ejercicio 028](./ejercicios/arr_028.md)
[Ejercicio 029](./ejercicios/arr_029.md)
[Ejercicio 030](./ejercicios/arr_030.md)
[Ejercicio 031](./ejercicios/arr_031.md)
[Ejercicio 032](./ejercicios/arr_032.md)
[Ejercicio 033](./ejercicios/arr_033.md)

### Map
* El método **map** crea un nuevo **array** con el resultado de la función que le pasamos como parámetros
* Podemos utilizar este método para cambiar los valores que tenemos en un array
* En la función que pasamos como parámetro tenemos que retornar el elemento que queremos en el nuevo array

**Ejemplo:**
```js
var nombres = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper"];
var nombresMayuscula = nombres.map(function(nombre) {
  return nombre.toUpperCase();
});

console.log(nombresMayuscula) // [ 'ADA LOVELACE', 'HEDY LAMARR', 'GRACE HOPPER' ] Todos en mayúscula
console.log(nombres) // [ 'Ada Lovelace', 'Hedy Lamarr', 'Grace Hopper' ] Este array quedó igual que antes
```

* En este ejemplo vemos como podemos utilizar **map** para crear un nuevo array modificando los valores de otro array
* El array original queda intacto

**Ejemplo:**
```js
var numeros = [1, 2, 3, 4];
var triples = numeros.map(function(numero) {
  return numero * 3;
});

console.log(triples) // [ 3, 6, 9, 12 ] todos los numeros multiplicados por 3
console.log(numeros) // [ 1, 2, 3, 4 ] este array quedó igual que antes
```

#### Prácticas
[Ejercicio 034](./ejercicios/arr_034.md)
[Ejercicio 035](./ejercicios/arr_035.md)
[Ejercicio 036](./ejercicios/arr_036.md)
[Ejercicio 037](./ejercicios/arr_037.md)
[Ejercicio 038](./ejercicios/arr_038.md)
[Ejercicio 039](./ejercicios/arr_039.md)
[Ejercicio 040](./ejercicios/arr_040.md)
[Ejercicio 041](./ejercicios/arr_041.md)

### Filter
* El método **filter** retorna un nuevo **array** utilizando un filtro
* Pasamos una función que retorna verdadero o falso para saber si debemos añadir el nuevo elemento al nuevo array o no

**Ejemplo:**
```js
var notas = [1, 2, 3, 4, 10, 5];
var notasGrosas = notas.filter(function(nota) {
  return nota === 10;
});

console.log(notasGrosas); // [10] array con una sola nota grosa
console.log(notas); // [1, 2, 3, 4, 10, 5] array original
```

#### Prácticas
[Ejercicio 042](./ejercicios/arr_042.md)
[Ejercicio 043](./ejercicios/arr_043.md)
[Ejercicio 044](./ejercicios/arr_044.md)
[Ejercicio 045](./ejercicios/arr_045.md)
[Ejercicio 046](./ejercicios/arr_046.md)

### Reduce
* El método **reduce** nos permite recorrer un array y obtener un sólo dato como resultado final
* Acepta como primer parámetro una función con dos parámetros
  * Primer parámetro es el acumulador
  * El segundo valor es cada item en el array
* Y reduce tiene un segundo parámetro, opcional, que es el valor inicial del acumulador. Si este parámetro no está, toma como valor inicial el primer elemento del array
* Podemos utilizar el acumulador para ir sumando valores, por ejemplo:

**Ejemplo:**
```js
var notas = [1, 2, 3, 4, 10, 5];
var sumaDeNotas = notas.reduce(function(total, nota) {
  return total + nota;
});

console.log(sumaDeNotas); // 25 resultado final de sumar todas las notas
```

**Ejemplo:**
```js
var palabras = ['¡', 'Hola,', 'mundo', '!'];
// en este ejemplo estamos haciendo una reducción del array a un string
const frase = palabras.reduce(function(acumulador, item) {
  return acumulador + ' ' + item;
}, 'Frase:');
console.log(frase); // Frase: ¡ Hola, mundo !
```

* A continuación una animación para ver como funciona `reduce` -> [Ver](http://reduce.surge.sh/)
* También podemos usar `reduce` para filtrar, ya que estaríamos haciendo una reducción de ese mismo array
* Por ejemplo, si tenemos un array de números, podemos quedarnos con todos los que son múltiplos de 3

**Ejemplo:**
```js
var numeros = [1, 2, 3, 5, 9, 11, 12, 14, 18];

var multiploDe3 = numeros.reduce(function(multiplosAcumulados, numero) {
  // solo si el numero es multiplo de 3, lo agrego al array acumulador
  if (numero % 3 === 0) {
    multiplosAcumulados.push(numero);
  }

  return multiplosAcumulados;
}, []); // este array vacio, es el primer valor que va a tomar nuevas variable acumuladora, que en este ejemplo se llama multiplosAcumulados

console.log(multiploDe3); // [ 3, 9, 12, 18 ]
```

#### Prácticas
[Ejercicio 047](./ejercicios/arr_047.md)
[Ejercicio 048](./ejercicios/arr_048.md)
[Ejercicio 049](./ejercicios/arr_049.md)
[Ejercicio 050](./ejercicios/arr_050.md)
[Ejercicio 051](./ejercicios/arr_051.md)
[Ejercicio 052](./ejercicios/arr_052.md)
[Ejercicio 053](./ejercicios/arr_053.md)

#### Prácticas Generales
[Ejercicio 054](./ejercicios/arr_054.md)
[Ejercicio 055](./ejercicios/arr_055.md)
[Ejercicio 056](./ejercicios/arr_056.md)

* Podes ver más métodos de array en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)

