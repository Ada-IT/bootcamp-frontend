# **Arrow functions**

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


# **Parámetros por default**

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