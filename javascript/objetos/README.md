## Objetos
* Otro tipo de dato que tenemos en JS son los **object**, es decir que tenemos objetos
* Los objetos nos ayudan a representar valores de una manera más fácil y agrupada
* Los objetos literales se escriben entre {}

**Ejemplo:**
```js
{} // objeto literal
var miObjeto = {}; // objeto asignado a una variable
```

### Propiedades
* Un objeto puede tener propiedades
* Las propiedades se definen con un nombre como si fueran variables
* A las propiedades se les puede asignar un valor utilizando dos puntos
* Las propiedades se separan con comas

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27
};

console.log(persona);
```

* Podemos acceder a la propiedad de un objeto utilizando el nombre del objeto, punto y el nombre de la propiedad

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27
};

console.log(persona.nombre);
console.log(persona.edad);
```

* Si accedemos a una propiedad que no existe vamos a obtener undefined

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27
};

console.log(persona.dni); // undefined
```

* Para asignar un valor a una propiedad lo hacemos de la misma forma que lo hacemos con una variable

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27
};

persona.nombre = 'Grace';
persona.edad = 30;

console.log(persona);
// { nombre: 'Grace', edad: 30 }
```

* Las propiedades de un objeto terminan siendo variables de las cuales podemos obtener o asignar valores
* Un tema importante con los objetos es que son dinámicos
* Podemos crear propiedades que no fueron definidas en el objeto
* Si bien es un gran beneficio tener esta flexibilidad nos puede dar un dolor de cabeza si no tenemos cuidado

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27
};

console.log(persona.dni); // undefined

persona.nombre = 'Grace';
persona.edad = 30;
persona.dni = 90909090;

console.log(persona);
// { nombre: 'Grace', edad: 30, dni: 90909090 }

console.log(persona.dni); // 90909090
```

* Podemos caer en el error de escribir mal una propiedad o por ahí utilizar mayúscula y no encontrar la propiedad buscada o eventualmente terminar creando nuevas propiedades
* Tenemos que tener cuidado con las propiedades de los objetos de JS

#### Prácticas
[Ejercicio 001](./ejercicios/obj_001.md)
[Ejercicio 002](./ejercicios/obj_002.md)
[Ejercicio 003](./ejercicios/obj_003.md)
[Ejercicio 004](./ejercicios/obj_004.md)
[Ejercicio 005](./ejercicios/obj_005.md)
[Ejercicio 006](./ejercicios/obj_006.md)
[Ejercicio 007](./ejercicios/obj_007.md)
[Ejercicio 008](./ejercicios/obj_008.md)
[Ejercicio 009](./ejercicios/obj_009.md)
[Ejercicio 010](./ejercicios/obj_010.md)
[Ejercicio 011](./ejercicios/obj_011.md)
[Ejercicio 012](./ejercicios/obj_012.md)
[Ejercicio 013](./ejercicios/obj_013.md)
[Ejercicio 014](./ejercicios/obj_014.md)
[Ejercicio 015](./ejercicios/obj_015.md)
[Ejercicio 016](./ejercicios/obj_016.md)
[Ejercicio 017](./ejercicios/obj_017.md)
[Ejercicio 018](./ejercicios/obj_018.md)

### Propiedades dinámicas de un objeto
* Puede pasar que no sabemos el nombre de una propiedad y necesitemos acceder de forma dinámica
* Podemos acceder a las propiedades utilizando los corchetes como si fueran array pero en lugar de pasarle un ídince numérico le pasamos el nombre de la propiedad

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27
};

console.log(persona['nombre']);  // Ada
console.log(persona['edad']);  // 27
```

* Podemos hacer esto utilizando variables

**Ejemplo:**
```js
var propNombre = 'nombre';
var propEdad = 'edad';

var persona = {
  nombre: 'Ada',
  edad: 27
};

console.log(persona[propNombre]);  // Ada
console.log(persona[propEdad]);  // 27
```

* De esta forma podemos acceder a propiedades de un objeto de forma dinámica
* Esto es útil si lo usamos con `Object.keys`
* `Object.keys` retorna todas las propiedades de un objeto
* El método keys acepta un objeto como parámetro

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27
}

var propiedades = Object.keys(persona);

for (var i = 0; i < propiedades.length; i++) {
  var propiedad = propiedades[i];
  console.log('La propiedad ' + propiedad + ' tiene el valor ' + persona[propiedad]);
}
/*
  La propiedad nombre tiene el valor Ada
  La propiedad edad tiene el valor 27
*/
```

* Si agregamos más propiedades el código sigue pudiendo acceder a las propiedades de forma dinámica

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27
}

persona.dni = 90909090;

var propiedades = Object.keys(persona);

for (var i = 0; i < propiedades.length; i++) {
  var propiedad = propiedades[i];
  console.log('La propiedad ' + propiedad + ' tiene el valor ' + persona[propiedad]);
}
/*
  La propiedad nombre tiene el valor Ada
  La propiedad edad tiene el valor 27
  La propiedad dni tiene el valor 90909090
*/
```
* Podes leer más sobre `Object.keys` en el [sitio del MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)

#### Prácticas
[Ejercicio 019](./ejercicios/obj_019.md)
[Ejercicio 020](./ejercicios/obj_020.md)
[Ejercicio 021](./ejercicios/obj_021.md)
[Ejercicio 022](./ejercicios/obj_022.md)
[Ejercicio 023](./ejercicios/obj_023.md)

### Métodos
* Los objetos pueden tener métodos
* Un método es una propiedad que tiene una función

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  saludar: function() {
    console.log('¡Hola!');
  }
}
```

* Como podemos ver nombre y saludar son dos propiedades iguales
* Nombre tiene asinado un string
* Saludar tiene asignado una función como vimos antes

**Ejemplo:**
```js
var saludar = function() {
  console.log('¡Hola!');
}

saludar();
```

* Para ejecutar un método de un objeto lo hacemos de la misma forma casi:

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  saludar: function() {
    console.log('¡Hola!');
  }
}

persona.saludar(); // ¡Hola!
```

* Cuando utilizamos métodos de string, number o arrays estabamos utilizando funciones propias de cada uno de estos tipos.
* **JS transforma los strings, numbers y arrays a objetos para poder utilizar métodos sobre estos tipos de datos**

* Un método también puede aceptar parámetros:

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  saludar: function(personaASaludar) {
    console.log('¡Hola, ' + personaASaludar + '!');
  }
}

persona.saludar('Grace'); // ¡Hola, Grace!
```

* Vemos que utilizar un método es muy similar a simplemente utilizar una función
* Esto se da porque un método es una función dentro de un objeto
* Dentro de los métodos también podemos acceder a las propiedades del objeto por medio de la palabra reservada **this**
* Por ahora podemos decir que **this** es una referencia al objeto que creamos

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  saludar: function() {
    console.log('¡Hola! Mi nombre es ' + this.nombre);
  }
}

persona.saludar(); // ¡Hola! Mi nombre es Ada
```

* También dentro de un método podemos modificar una propiedad de un objeto

**Ejemplo:**
```js
var persona = {
  nombre: 'Ada',
  edad: 27,
  saludar: function() {
    console.log('¡Hola! Mi nombre es ' + this.nombre);
  },
  cumpleanios: function() {
    this.edad++;
  }
}

console.log(persona.edad) // 27
persona.cumpleanios();
console.log(persona.edad) // 28
```
#### Prácticas
[Ejercicio 024](./ejercicios/obj_024.md)
[Ejercicio 025](./ejercicios/obj_025.md)
[Ejercicio 026](./ejercicios/obj_026.md)
[Ejercicio 027](./ejercicios/obj_027.md)
[Ejercicio 028](./ejercicios/obj_028.md)
[Ejercicio 029](./ejercicios/obj_029.md)
[Ejercicio 030](./ejercicios/obj_030.md)
[Ejercicio 031](./ejercicios/obj_031.md)