# **Destructuring**

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

## **Object Destructuring**

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

**Valores por default**

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

**Nombres diferentes de las variables**

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

**Destructuring de objetos anidados**

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

## **Array Destructuring**

**Array destructuring** es bastante similar a la destructuración de objetos y bastante directa.

En la destructuración de arrays, usamos literalmente un array del lado izquierdo en una expresión de asignación. Cada nombre de variable que ponemos en el array se asigna al elemento correspondiente en la misma posición. Vamos con un ejemplo rápido:

```js
const rgb = [255, 200, 0];

// Array Destructuring
const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0
```

**Valores por default**

Si la cantidad de elementos en el array es mayor que el número de variables locales pasadas en el array de destructuring, entonces lo elementos "extra" no son asignados a ninguna variables.
Pero si la cantidad de variables en el array de destructuring es mayor que la cantidad de elementos en el array, entonces cada variable "extra" se le asignará el valor de `undefined`, a menos que le definamos un valor por defecto.

Igual que en destructuring de objetos, podemos configurar un valor por defecto para las variables locales en los arrays. En el siguiente ejemplo, vamos a asignar valores default a algunas variables que caso que el elemento correspondiente no se encuentre.

```js
const rgb = [200];

// agregamos el valor por defecto 255 a las variables red y blue
const [red = 255, green, blue = 255] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);
// R: 200, G: undefined, B: 255
```

**Saltear elementos**

Es posible saltear algunos elementos que no quieras/necesites asignar a una variable local y solo asignar aquellos de los cuales estamos interesadas.
En el ejemplo siguiente vemos como asignamos solo el valor de `blue` a una variable local.

```js
const rgb = [200, 255, 100];

// salteamos los dos primeros elementos
// asignamos unicamente el tercer elemento a la variable local blue
const [,, blue] = rgb;

console.log(`Blue: ${blue}`); // Blue: 100
```

Usamos la separación por coma (,) para omitir los dos primeros elementos del array `rgb`, ya que solo necesitamos el tercer elemento.


**Intercambio de variables**

Una muy buena aplicación de la desestructuración de arrays, es el intercambio de variables locales. Supongamos que estamos creando una aplicación de edición de fotos y queremos poder intercambiar las dimensiones de alto y ancho de una foto cuando la orientación cambia entre horizontal y vertical. La manera anticuada de hacer esto sería algo como lo siguiente:

```js
let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`); // 300 x 400

if (landscape) {
    // variable extra para copiar el valor inicial
    let initialWidth = width;

    // intercambio las variables
    width = height;

    // a height le asigno el valor que copiamos del width inicialmente
    height = initialWidth;

    console.log(`${width} x ${height}`); // 400 x 300
}
```

El código anterior cumple con la tarea, aunque tuvimos que usar una variable adicional para copiar el valor de una de las variables intercambiadas. Con la desestructuración de arrays, podemos realizar el intercambio con una sola asignación. Veamos como quedaría el código final:

```js
let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`); // 300 x 400

if (landscape) {
    // intercambio las variables
    [width, height] = [height, width];

    console.log(`${width} x ${height}`); // 400 x 300
}
```

**Nested Array Destructuring**

Al igual que con los objetos, también podemos realizar desestructuraciones anidadas con arrays. Aquí hay un ejemplo rápido para ilustrar esto.

```js
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];

// usamos nested destructuring para asignar las variables red, green y blue
const [hex, [red, green, blue]] = color;

console.log(hex, red, green, blue); // #FF00FF 255 0 255
```

En el código anterior, asignamos una variable hexadecimal y utilizamos la desestructuración de arrays anidados para asignar a las variables roja, verde y azul.

**Rest Items**

A veces es posible que desee asignar algunos elementos a las variables, mientras se asegura de que los elementos restantes se capturen (asignados a otra variable local). El nuevo operador de propagación (...) se puede usar con la desestructuración para lograr esto. Abajo un ejemplo rápido:

```js
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// asignamos el primer y tercer elementos a las variables red y yellow
// asignamos los elementos restantes a la variable otherColors usando el spread(rest) operator
const [red,, yellow, ...otherColors] = rainbow;

console.log(otherColors); // ['green', 'blue', 'indigo', 'violet']
```

Vemos que después de asignar el primer y tercer elemento del array `rainbow` en las variables `red` y `yellow` respectivamente, utilizamos el operador de propagación **`...`** para capturar y guardar los valores restantes a la variable `otherColors` (un array). Esto se conoce como la variable `rest items`. Sin embargo, tenemos que tener en cuenta que esta variable, si se usa, siempre tiene  que aparecer como último elemento en el array literal de destructuring, de lo contrario se generará un error.

**Mixed Destructuring**

Hay casos en los que estamos trabajando con una estructura de arrays/objetos compleja y necesitamos guardar algunos valores en variables locales. Un buen ejemplo sería un objeto con varios objetos y arrays anidados. En casos como este, podemos usar una combinación de desestructuración de objetos y desestructuración de arrays para apuntar a ciertas partes de la estructura según sea necesario. El siguiente código muestra un ejemplo simple.

```js
const persona = {
  nombre: 'Ada Lovelace',
  edad: 27,
  ubicacion: {
    pais: 'UK',
    ciudad: 'Londres',
    coordenadas: [51.509865, -0.118092]
  }
}

// veamos como estamos utilizando array/object destructuring de forma mezclada
// estamos asignando 5 variables: nombre, pais, ciudad, lat y lng
const {
  nombre,
  ubicacion: {
    pais,
    ciudad,
    coordenadas: [lat, lng]
  }
} = persona;

console.log(`Yo soy ${nombre} de ${ciudad}, ${pais}. Latitud(${lat}), Longitud(${lng})`);

// Yo soy Ada Lovelace de Londres, UK. Latitud(51.509865), Longitud(-0.118092)
```


[**`Ver PPT Destructuring`**](clase_4.pdf)