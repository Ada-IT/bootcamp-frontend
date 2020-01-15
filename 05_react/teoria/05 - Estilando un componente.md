# Estilando un componente

React no determina una única forma de darle estilos a un componente, por lo que existen varias técnicas y herramientas para hacerlo. En nuestro caso, vamos a usar dos: una para estilos más "estáticos" o fijos, y otra para estilos que tengan que ser calculados dinámicamente.

Para aquellos estilos que no varíen (más allá de alguna transición, animación o cambio de clase), es decir, para estilos más fijos, vamos a declararlos en un archivo `.scss` propio del componente, que está dentro de la misma carpeta y tiene el mismo nombre que el componente.

Por ejemplo:
<br/>

```jsx
// MiComponente.js
import React from 'react'
import './MiComponente.scss'

const MiComponente = () => (
  <div className='mi-clase' />
)

export default MiComponente
```

```scss
/** MiComponente.scss */
.mi-clase {
  /** Estilos particulares del componente */
}
```
<br/>

Dentro del `.scss`, podemos aprovechar todas las ventajas que nos ofrece Sass, por ejemplo, selectores anidados y variables:

<br/>

```jsx
// Comment.js
import React from 'react'
import './Comment.scss'

const Comment = () => (
  <div className='comment'>
     <p className='comment-title'></p>
     <p className='comment-text'></p>
  </div>
)

export default Comment
```

```scss
/** _variables.scss */
$main-color: black;
$secondary-color: grey;
```

```scss
/** Comment.scss */
@import 'styles/variables'

.comment {
  .comment-title {
    color: $main-color;
  }
  
  .comment-text {
    color: $secondary-color;  
  }
}
```
<br/>

**Es buena práctica que los nombres de las clases de un componente sean lo más específicas posible, para evitar conflictos con otros estilos.** Por ejemplo, es mejor esto:

<br/>

```jsx
// Comment.js
import React from 'react'
import './Comment.scss'

const Comment = () => (
  <div className='comment'>
     <p className='comment-title'></p>
     <p className='comment-text'></p>
  </div>
)

export default Comment
```

a esto:

```jsx
// Comment.js
import React from 'react'
import './Comment.scss'

const Comment = () => (
  <div className='comment'>
     <p className='title'></p>
     <p className='text'></p>
  </div>
)

export default Comment
```
<br/>

Podemos aprovechar una ventaja interesante de Sass, los **mixins** que son porciones de estilos reutilizable, para darles estilos que se utilizan en nuestra aplicación seguido a distintos componentes. El mixin se declara con la siguiente sintaxis:

<br/>

```scss
/** _buttons.scss */
@mixin primary-button {
  background-color: 'green',
  border-radius: 5px;
}
```

y se utiliza así:

```scss
/** MiComponente.scss */
@import 'styles/buttons';

.mi-boton {
  @include primary-button;
}
```

<br/>

Por otro lado, dentro de nuestro componente, podemos definirle *a un elemento HTML* estilos con JS. Para esto, utilizamos la propiedad `style`, que toma como valor un objeto, cuyas propiedades son las propiedades de CSS en `camelCase`. Por ejemplo:

```jsx
const Comment = () => (
  <div className='comment' style={{ backgroundColor: 'red' }}/>
)
```

Como un componente es un conjunto de elementos HTML y/o otros componentes, aplicarle un estilo a un componente en general no tiene sentido, porque React no sabe a cuál de todos los que lo componen debería asignarle esos estilos. Por lo tanto, los estilos sólo se aplican a elementos HTML. Definir los estilos dentro de nuestro componente permite que, dado que es código JS, podamos utilizar expresiones y variables para calcular el valor de una propiedad. 
