# 🚦 useState

Este `hook` nos permite acceder al estado en un componente funcional.

## ⏱️ ¿Cuándo debería usar useState?** 

Cada vez que tengas un componente y te des cuenta que algo en ese componente tiene que *cambiar*, dado un cierto evento o acción.

## ✍️ ¿Cómo es su sintaxis?**

`useState` es una función que devuelve un array. Este array contiene dos elementos que van de la mano:

1. un valor
2. una función que se utiliza para modificar dicho valor

La forma más común de declararla es aprovechando la posibilidad de *desestructurar* una array que nos ofrece JavaScript.

```jsx
const [value, setValue] = useState()
```

Es importante entender que `value`, y `setValue` son nombres que ponemos nosotras, los elementos de un array no tienen nombres por defecto. Esto nos permite (y sí se puede) declarar muchos `useState`:

```jsx
const [name, setName] = useState()
const [email, setEmail] = useState()
const [total, setTotal] = useState()
```

Cada una de las funciones sólo modicar el valor que tiene relacionado. Si bien podemos poner cualquier nombre, la convención es la siguiente: 

1. un sustantivo para el primer elemento (el valor), que puede ser en singular, o plural si es un array
2. un verbo para el segundo elemento (la función), compuesto del prefijo `set` + el sustantivo que utilizamos para el primer elemento 

Inicialmente el valor del primer elemento es `undefined`. Si queremos que tenga un valor inicial, tenemos que declararlo como argumento de `useState`, de la siguiente forma:

```jsx
const [name, setName] = useState('Ada')
```

El valor puede ser cualquier valor válido en JavaScript (strings, números, booleanos, objetos, arrays).

## 🔐 Inmutabilidad

Otro concepto de suma importancia a la hora de trabajar con React y con estados, es el de **inmutabilidad**. Inmutable es aquello que no puede cambiar, que no puede ser alterado. En React **el estado es inmutable**. ¿Qué significa esto? Que *no podemos modificar el estado*. En ningún sentido: no podemos sumarle un número, ni cambiarle un valor, ni agregarle una letra, ni pushear un ítem a un array, ni modificar la propiedad de un objeto. Nada. Por ejemplo, no podemos hacer lo siguiente:

```jsx
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => count = count + 1 // 🚫 PROHIBIDO!

  return (
    <button onClick={increaseCount}>{count}</button>
  )
}
```

¿Cómo se concilia esto con que el estado de un componente cambia y es lo que permite que sea dinámico, si no podemos alterar o mutar el estado? La regla es que **no podemos mutar el estado de un componente *directamente***. En el caso anterior, estamos modificando la variable `count` (definida con `useState`, es decir, una variable de estado) *directamente*, le estamos asignando un nuevo valor en el callback `increaseCount`. 

Para hacerlo, *tenemos que avisarle a React que queremos manipular el estado*. Para esto, tenemos que usar la función que nos brinda `useState`, en este caso,`setCount`. Cuando llamamos a `setCount`,el valor que les pasemos como argumento es el valor con el que se actualizará la variable `count`, por ejemplo si llamamos a `setCount(3)`, `count` pasará a tener el valor 3.

## 🤔 Por qué no puedo modificar el estado directamente?

Dos razones: coherencia y estabilidad.

  * **coherencia**: al tener el control de cuándo el estado cambia, React puede actualizar los componentes que corresponden en el momento dado. En cambio, tener cosas que cambian por fuera del control hace que React tenga que estar chequeando todo el tiempo todo para ver si cambió algo (en vez de ya saber qué tiene que cambiar), y que pueda haber un desfasaje entre cosas que cambiaron y todavía no se actualizaron.
  * **perfomance**: un array tiene una *id* que es lo que se conoce como **referencia**, que es la dirección en la que está guardado en la memoria. Si tenemos un array de 10000 items, React para saber si ese array fue modificado o no y actualizar el componente, tiene que recorrer los 10000 ítems y chequearlos con los valores anteriores, uno por uno. En cambio, si prohíbe hacer cambios a un array, la única forma de hacer un cambio es creando un array nuevo, por lo tanto, React sólo tiene que comparar la referencia de un array con el nuevo para saber si es el mismo array o no. Si no coinciden, es porque hubo algún cambio, y tiene que renderizar las cosas. Comparar una referencia es muchísimo más rápido que comparar todos los ítems uno por uno. 


## 🛠️ ¿Cómo utilizarlo? 

Para poder hacer uso de `useState` (y del resto de los `hooks` de React), tenemos que importarlos. Estos son exportados de forma nombrada dentro de la librería `react`, la misma que tenemos que declarar al principio de todo componente.

```jsx
import React, { useState } from 'react'
```

Una vez que hacemos esto, podemos declararlo dentro de nuestro componente:

```jsx
import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const increaseCount = () => setCount(count + 1)

  return (
    <button onClick={increaseCount}>{count}</button>
  )
}
```

Los pasos seguimos para utilizarlo son: 

1. Importamos el hook `useState`
2. Invocamos el hook `useState` y desestructuramos los elementos del array que devuelve 
3. El valor de dicho estado está guardado en la variable `count`
4. La función que permite modificar la variable `count` se llama `setCount`
5. Le damos a `count` un valor inicial de 0
6. El componente renderiza un botón
7. Dicho botón muestra como texto el valor de la variable `count`
8. Cuando se hace click en el botón, se ejecuta el callback `increaseCount`
9. La función `increaseCount` ejecuta a `setCount`, que modifica el valor de `count` sumándole uno
10. Al cambiar el valor de `count`, el componente se rerenderiza para mostrar el cambio


## 📄 Resumiendo

  * Todo aquello que puede cambiar en un componente, es parte del estado
  * `useState` es un hook que nos permite acceder al estado en un componente funcional
  * `useState` es un función que devuelve un array con dos elementos, un valor y una función para modificar dicho valor
  * Para acceder a dicho valor y función desestructuramos el array
  * Tanto al valor como a la función le podemos poner los nombres que queramos, por convención se usa un sustantivo para el valor y `set + sustantivo` para la función
  * El valor inicial del estado es `undefined`, podemos darle un valor inicial si le pasamos algún valor como argumento a `useState`
  * El estado es inmutable, es decir, **jamás se modifica directamente**
  * Para modificar un estado necesitamos usar la función que nos brinda `useState`, pasándole como argumento el nuevo valor que queremos que dicho estado tenga
  * Cuando el estado de un componente cambia, este se rerenderiza para mostrar el nuevo estado
