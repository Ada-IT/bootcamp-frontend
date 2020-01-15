# Export e import

Una de las nuevas versiones de JS (ES6) trae la posibilidad de exportar e importar código de un archivo a otro. Esto significa que desde un archivo X podemos exportar (o poner pública, o a disponibilidad) un valor Y, y cuando un archivo Z importa ese archivo X, puede obtener y trabajar con el valor Y.

Hay dos formas de exportar, **nombrada** y **por defecto**, y cada una tiene su sintaxis. En un archivo se pueden tener varias exportaciones de forma nombrada, pero una sola por defecto.

*Siempre que tenemos un componente de React necesitamos tener un export por default, pero esto no implica que en todo archivo .js necesitemos tener un export por default* 

## Export por default

Para exportar por default un valor, simplemente tenemos que poner las palabras reservadas `export default` y el valor que queramos exportar. Se pueden exportar todo tipo de valores (números, strings, booleanos, arrays, objetos, funciones)

```jsx
export default 3
```

También podemos exportar una variable que (que en el export se reemplaza por el valor que contiene):

```jsx
const miVariable = 3
export default miVariable
```

O directamente todo en una misma línea:

```jsx
export default miVariable = 3
```

Cuando hacemos esto último no hay que declarar la palabra `const` o `let` de la variable. En el caso de un componente, podemos crear el componente y luego exportarlo:

```jsx
const MiComponente = () => (<></>)

export default MiComponente
```

o hacer todo junto:

```jsx
export default MiComponente = () => (<></>)
```

Para importar el valor exportado en otro archivo, necesitamos poner:

```jsx
import miVariable from 'ruta/al/archivo'
```

Y ya podemos usar `miVariable` dentro de dicho archivo, que contendrá el valor exportado por defecto. Como el export por default no tiene un nombre (puede ser solo un valor) y es único por archivo, podemos al importarlo asignarlo en una variable con otro nombre, pero a la hora de trabajar con componentes en React esto no es una práctica recomendable.


La ruta al archivo puede ser una ruta absoluta (dependiendo de cómo tengamos configurado nuestro entorno), o una ruta relativa, donde `./` indica la posición en la carpeta actual, y `..` se utiliza para subir un nivel hacia arriba. Cuando importamos archivos .js, **no hace falta incluir la extensión del mismo** 

<br />

## Export con nombre

Para exportar un valor con nombre, tenemos que declararlo en una misma línea, junto a la declaración de la variable donde va a estar contenido, por ejemplo:

```jsx
export const miVariable = 3
export const miOtraVariable = 5
```

O podemos utilizar `destructuring` (ver más adelante) para exportarlos en otra línea:

```jsx
const miVariable = 3
const miOtraVariable = 5
export {miVariable, miOtraVariable}
```

A la hora de importar, tenemos dos opciones:

1. Importar todo en una variable, y acceder a las distintas variables como propiedades del objeto:

```jsx
import * as misVariables from 'ruta/al/archivo'

console.log(misVariables.miOtraVariable)
```

2. Utilizar destructuring, para declarar las cosas que necesitamos importar y utilizarlas directamente

```jsx
import {miVariable, miOtraVariable} from 'ruta/al/archivo'

console.log(miVariable)
```

Para esto necesitamos utilizar exactamente el mismo nombre con el que exportamos el valor, pero podemos ponerle un *alias*:

```jsx
import {miVariable as miVariableConAlias} from 'ruta/al/archivo'

console.log(miVariableConAlias)
```

A su vez, podemos importar los valores por default y con nombre en una misma línea:

```jsx
import ValorPorDefault, {miVariable, miOtraVariable} from 'ruta/al/archivo'
```

En cuanto al orden de las importaciones, es preferible importar todo en la parte superior del archivo. Primero se importan las librerías externas o de terceros, luego los componentes externos o de terceros, luego los componentes propios, y luego otros archivos que necesitemos (estilos, etc).
