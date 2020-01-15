# Personalizando un componente

Si bien no es una regla estricta (y depende mucho de cada componente), por lo general es una buena idea y una buena práctica darle a quien lo usa (ya seamos nosotras o alguien más) la posibilidad de personalizar o customizar un componente. Esto incrementa su reusabilidad y su vida de duración, ya que podemos reutilizar un mismo componente en distintos lugares especificándole las opciones que nos interesan, en vez de tener que estar creando nuevos componentes para cada versión distinta que necesitemos.

Como la mayoría de las cosas en React, no hay una línea fija en la que trazar hasta cuánto debería poder ser personalizable un componente y qué tanto debería poder cambiar, pero esto debería tenerlo en cuenta con el consejo de que no es lo ideal tener muchos props. Por lo tanto, no dependiendo del componente, no deberíamos tener más de 2 o 3 opciones para personalizarlo, si ya necesitamos, es probable que es componente esté intentando abarcar muchas cosas y pueda ser dividido en subcomponentes.

Un componente puede ser personalizado de varias formas: forma, estructura, comportamiento, disposición, etc. En este caso vamos a enfocarnos exclusivamente en los estilos.

## Clases personalizadas

Una opción posible, la más flexible y laxa, es darle la posibilidad a quien usa nuestro componente de agregarle clases extras. De esta forma, puede darle los estilos que desee y sobreescribir los propios del componente si lo considera necesario.

Si tenemos un componente y le agregamos una clase, por ejemplo así:

```jsx
<PopUp className='importante' />
```

En React esto no tiene ningún efecto. Un componente es un *conjunto* de elementos y/o componentes, por lo que aplicarle una clase a un conjunto no tiene sentido. React no sabe a cuál de todos esos componentes queremos agregarle dicha clase, y no puede decidir por nosotras. Por lo tanto, **en un componente el `className` se pasa como prop, y no se asigna como clase**. Solo a elementos HTML podemos asignarle `className`. Lo mismo pasa con la propiedad `style`.

No obstante, podemos aprovechar que eso se pasa como prop, y concatenarlo o agregarlo a algún elemento HTML de nuestro componente, por ejemplo:

```jsx
const PopUp = ({className}) => (
  <div className={`pop-up ${className}`} />
)
```

De esta forma, le estamos agregando la clase extra que se le defina al componente. El problema con esto es que si no se le define una clase, `className` llega como `undefined`, por lo tanto nuestro `div` nos quedaría con las clases `pop-up undefined`. Para evitar esto, podemos aprovechar los **parámetros por default**, una *feature* de JS ES6, que permite asignar un valor a un parámetro cuando este no está definido. Esto se declara asignándole al parametro el valor por default que queremos que tenga, mediante el símbolo `=`:

```jsx
const PopUp = ({className = ''}) => (
  <div className={`pop-up ${className}`} />
)
```

Si el componente `PopUp` se le declara una `className`, se agregará dicha clase a la clase `pop-up` del div, si no, no se le agregará nada. Otra alternativa es usar el operador OR y la evaluación de circuito corto:

```jsx
const PopUp = ({className}) => (
  <div className={`pop-up ${className || ''}`} />
)
```

Si `className` es `undefined` se pasará a evaluar y devolver el segundo operando, en este caso, las comillas vacías.

## Opciones personalizadas

Si tenemos ciertos estilos y variantes que se repiten mucho, y queremos evitar estar teniendo que declarar una clase extra cada vez que necesitamos modificarlos, o no queremos darle tanto control sobre los estilos de nuestro componente a quien lo usa, podemos definir un conjunto de opciones de las cuales escoger personalizar el componente.

La idea es básicamente la siguiente:

  1. Se define un objeto de configuración cuyas propiedades son las posibles opciones que se pueden elegir (el objeto representa la categoría de esas opciones, puede que necesitemos varios objetos)
  2. Cada propiedad/opción tiene asignado un valor que representa una clase
  3. Se exporta, junto con el componente, dicho objeto de configuración
  4. Cuando se utiliza el componente, se define algún prop cuyo valor sea alguna propiedad de este objeto
  5. En nuestro componente, agregamos el valor de dicho prop como clase extra
  6. Se definen estilos generales para nuestro componente y los estilos que pertenecen a cada clase/variación posible
  
```jsx
export const TIPO_BOTON = {
  PRINCIPAL: 'primary',
  SECUNDARIO: 'secondary',
  DEFAULT: 'default',
  IMPORTANTE: 'important'
}

const Boton = ({tipo = TIPO_BOTTON.DEFAULT}) => ( 
  <div className={`button ${tipo}-button`} />
)

export default Boton
```

```jsx
import Boton, {TIPO_BOTON} from 'boton'

<Boton tipo={TIPO_BOTON.PRIMARIO} />
```

```scss
.button {
  width: 200px;
  height: 100px;
  
  &.button-primary {
    background-color: green
  }
  &.button-secondary {
    background-color: blue
  }
  &.button-default {
    background-color: gray
  }
  &.button-important {
    background-color: red
  }
}
```

De esta forma, al utilizar las propiedades de un objeto, tenemos el autocomplete de nuestro editor que nos indica cuáles son las opciones disponibles, y es mucho menos probable que le erremos, además de evitarnos tener que buscar en el código cuáles son las posibles.

La sintaxis con mayúscula y guión bajo que usamos para el objeto de configuración no es obligatoria, pero es una convención que se utiliza para indicar que dicho objeto es de solo lectura, es decir, que no debe ser modificado. En JS no podemos hacer esto fácilmente, por lo tanto esto es una forma de advertirlo de manera visual, además de ser una convención que se utiliza en otros lenguajes. A este tipo de objetos de solo lectura se los conoce como **enums**.

En el `sass` aprovechamos el signo `&`, que indica el elemento padre o raíz, para definirle estilos cuando las dos clases se apliquen a un elemento.  
