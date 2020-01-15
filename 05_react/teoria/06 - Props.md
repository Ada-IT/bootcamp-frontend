# Props

Un componente es una función que devuelve un conjunto de elementos HTML u otros componentes. Ahora bien, si tenemos una función que devuelve siempre el mismo valor, en la mayoría de los casos no resulta una función muy útil. Además, necesitaríamos una función por cada valor distinto que queremos obtener. Por ejemplo, para obtener los múltiplos de 2, necesitaríamos:

```jsx
const multiplicar2Por3 = () => 2 * 3
const multiplicar2Por4 = () => 2 * 4
// etc
```

La idea de una función es que *le pasemos* ciertos valores (mediante parámetros), con esos valores *realice ciertas operaciones*, y devuelva un resultado. De esta forma la función se vuelve genérica y reutilizable, puede aceptar diferentes valores y devolver un resultado dependiendo de estos. Refactorizando los ejemplos anteriores, nos queda siguiente la función, que ahora acepta cualquier número y nos devuelve su doble:

```jsx
const multiplicarPor2 = x => x * 2
```

Lo mismo pasa con los componentes. En vez de tener dos componentes distintos:

```jsx
const BotonEnviar = () => (
  <button>Enviar</button>
)

const BotonCancelar = () => (
  <button>Cancelar</button>
)
```

dado que son iguales (devuelven un elemento `button`) y lo único que cambia es un cierto valor, podemos abstraer este valor en una variable, y tendríamos algo así como:

```jsx
const Boton = () => (
  <button>{texto}</button>
)
```

es decir, un componente que devuelve un elemento `button` con un cierto texto X, independientemente de cuál sea este texto. Ahora bien, de dónde podemos obtener esta variable `texto`?

React permite hacer esto mediante las **props.**

Las props son todos aquellos "atributos" custom que se pueden definir en un componente. Por ejemplo, para el siguiente componente:

```jsx
<Usuario nombre='Ada' apellido='Lovelace' pais='Inglaterra' />
```

sus props son `nombre`, `apellido` y `pais`. Dentro de un componente, podemos definir los props que querramos (aunque cuanto menos, mejor), ponerle los nombres que deseemos (mientras esten en `camelCase`) y a estos asignarle cualquier valor que necesitemos.

React arma con todos estos "atributos" un objeto, donde cada uno de ellos es una propiedad, y lo pasa como parámetro de la función/componente que invoca. Es decir, para el caso anterior, React armaría un objeto así:

```jsx
const props = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  pais: 'Inglaterra'
}
```

y llamaría internamente a la función/componente con ese objeto como parámetro, algo así:

```jsx
Usuario(props)
```

Por lo tanto, si queremos dentro de un componente acceder a esos valores, necesitamos declarar el parámetro primero para que este pueda ser "inyectado". Luego, teniendo en cuenta que es un objeto, dentro de nuestro componente podemos acceder y hacer uso de sus propiedades para lo que necesitemos:

```jsx
const Usuario = props => (
  <div>
    <h1>{props.nombre}</h1>
    <h2>{props.apellido}</h2>
    <small>{props.pais}</small>
  </div>
)
```

De esta manera, nos queda un componente genérico que acepta una serie de propiedades como parámetros, y devuelve un conjunto de elementos HTML con los valores de estas propiedades. Así, podemos reutilizar el componente, pasándole distintos valores:


```jsx
<Usuario nombre='Ada' apellido='Lovelace' pais='Inglaterra' />
<Usuario nombre='Grace' apellido='Hopper' pais='EEUU' />
```

Como los props son valores que se guardan dentro de las propiedades de un objeto, podemos utilizarlos no solo para definir el contenido, sino para otras cosas que nos permiten configurar y personalizar aún más cada componente, como determinar estilos, seleccionar opciones, definir comportamientos, etc.

Por otro lado, para dentro del componente evitar estar escribiendo `props` todo el tiempo, podemos aprovechar las ventajas de *destructuring* para hacer lo siguiente:

```jsx
const Usuario = ({nombre, apellido, pais}) => (
  <div>
    <h1>{nombre}</h1>
    <h2>{apellido}</h2>
    <small>{pais}</small>
  </div>
)
```
Así "desarmamos" el objeto **props** es sus distintas propiedades. Esto limpia mucho el código, y además nos permite reconocer inmediatamente cuáles son las propiedades que nuestro componente utiliza, en vez de tener que estar buscándolas por todo el código.

**No existe una cantidad máxima de props que puede tener un componente, pero en líneas generales, más de 5 props se considera mucho y llegado ese caso es recomendable analizar si ese componente no puede ser dividido en otros más pequeños.**
