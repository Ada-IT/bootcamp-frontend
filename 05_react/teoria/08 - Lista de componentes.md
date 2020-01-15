# Lista de componentes

Algo muy usual en toda interfaz en tener una lista de componentes del mismo tipo. Una lista no necesariamente tiene que representarse visualmente como tal, pero conceptualmente y jerárquicamente, dichos componentes están agrupados y en el mismo nivel, uno seguido de otro. Puede ser una lista de botones, de comentarios, de noticias, de submenus, de imagenes, de emojis, etc. Se pueden mostrar de forma horizontal, vertical, en grilla, o de cualquier otra disposición. Una lista sigue siendo una lista independientemente de cómo se visualice.

En React una lista es un **array de componentes del mismo tipo**. Por lo general, la cantidad de componentes de una lista es dinámica, es decir, no sabemos de antemano cuántos componentes va a tener, e incluso puede ir variando. Si tenemos una cantidad de componentes fijos y conocemos su cantidad, a menos que sean muchos, conviene ponerlos de forma explícita normalmente como haríamos con cualquier componente, por más que estén repetidos.

Una tarea usual que se necesita hacer en casi toda aplicación, es generar una cantidad de componentes X dada cierta información (que puede venir de una base de datos, de una API, que la ingresó el usuario, etc). Por ejemplo, si tenemos un anotador, a medida que el usuario va agregando notas, la información de esas notas se va guardando, y luego con esos datos, tenemos que generar un componente de nota por cada uno de ellos.

Dicha información, como estamos hablando de un conjunto de cosas, es común encontrarla en la forma de un array de objetos, donde cada objeto representa el conjunto de datos de uno de los elementos en particular. Por cada uno de estos objetos, tenemos que generar un nuevo componente con dicha información.

Dado que tenemos un array, y por cada ítem tenemos que generar un componente, podemos pensarlo como que tenemos que *mapear* cada ítem (objeto) a un componente que contenga dicha información en específico. Por lo tanto, podemos utilizar para esto el método `map`.

```jsx
const ListaComentarios = ({comentarios}) => (
  <>
  {
    comentarios.map(comentario => 
      <Comentario 
        texto={comentario.texto}
        usuario={comentario.usuario}
        fecha={comentario.fecha}
      />)
  }
  </>
)
```

De esta forma, con `map` recorremos el array de objetos, y por cada objeto, ejecutamos un callback. Dicho callback toma como parámetro el objeto que se está recorriendo, y devuelve un componente con la información de dicho objeto. Ese componente se guarda en un nuevo array, por lo que al finalizar su recorrido, `map` devuelve un array de componentes.

Cuando laburamos con listas de componentes (arrays de componentes, y en la mayoría de los casos, cuando los generamos mediante esta técnica utilizando `map`), tenemos que definirle a los ítems de la lista una propiedad propia de React, llamada `key`. Esta propiedad React la utiliza para diferenciar los elementos de una lista, y cuando esta lista cambia, saber de todos esos elementos cuál se modificó. Por lo tanto, la key tiene que ser un identificador único y diferente al de los demás elementos de la lista. Por lo general se utiliza algún `id` que venga ya en la información: 

```jsx
const ListaComentarios = ({comentarios}) => (
  <>
  {
    comentarios.map(comentario => 
      <Comentario
        key={cometario.id}
        texto={comentario.texto}
        usuario={comentario.usuario}
        fecha={comentario.fecha}
      />)
  }
  </>
)
```

*En última instancia podemos utilizar un índice*, aunque esto está desanconsejado, es preferible a no declarar ninguna `key` cuando no tenemos otro dato.

```jsx
const ListaComentarios = ({comentarios}) => (
  <>
  {
    comentarios.map((comentario, index) => 
      <Comentario
        key={index}
        texto={comentario.texto}
        usuario={comentario.usuario}
        fecha={comentario.fecha}
      />)
  }
  </>
)
```
