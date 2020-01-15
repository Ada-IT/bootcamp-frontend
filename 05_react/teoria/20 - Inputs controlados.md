# Inputs controlados

Supongamos que queremos tener un `input` que, a medida que se va escribiendo algo dentro de este, se vaya mostrando a su vez lo que se escribre en un elemento `p`, y que tengamos un botón para borrar todo escrito. 

Nuestro componente inicial sería algo así:

```jsx
const LiveText = () => (
  <>
    <input type='text' />
    <p></p>
    <button>Borrar</button> 
  </>
)
```

El siguiente paso es agregarle nuestro estado:

```jsx
const LiveText = () => {
  const [text, setText] = useState('')

  return (
    <>
      <input type='text' />
      <p>{text}</p>
      <button>Borrar</button> 
    </>
  )
}
```

Y ahora necesitamos que a medida que ingresamos algo en el `input`, este vaya modificando el estado `text`. Para esto, podemos utilizar el evento `onChange`, que ejecuta un callback cada vez que un elemento con `value` (aquellos que se utilizan para formularios) cambia su valor.

Por lo tanto, tenemos que definir una función y asignarla como callback al `onChange` del `input`:

```jsx
const LiveText = () => {
  const [text, setText] = useState('')

  const changeText = () => setText(???)

  return (
    <>
      <input 
        type='text'
        onChange={changeText} 
        />
      <p>{text}</p>
      <button>Borrar</button> 
    </>
  )
}
```

El problema con el que nos encontramos es que no tenemos una forma (sencilla, al menos) de obtener el `value` del `input`. En React no es recomendable trabajar con los elementos del DOM directamente, a menos que no quede otra opción. 

Por suerte, para este caso, podemos contar con una cierta particularidad de React. Cuando a una función que actúa como callback de un evento le definimos un parámetro, como ser:

```jsx
const LiveText = () => {
  const [text, setText] = useState('')

  const changeText = event => setText(???)

  return (
    <>
      <input 
        type='text'
        onChange={changeText} 
        />
      <p>{text}</p>
      <button>Borrar</button> 
    </>
  )
}
```

ese parámetro React lo llena con un objeto que contiene mucha información sobre el evento generado. Lo bueno de este objeto es que tiene una propiedad, `target`, que tiene asignado el elemento donde se generó el evento (en este caso, el `input`), y dentro de ese `target` podemos acceder al `value` de dicho elemento.

Por lo tanto, podemos hacer lo siguiente:

```jsx
const LiveText = () => {
  const [text, setText] = useState('')

  const changeText = event => setText(event.target.value)

  return (
    <>
      <input 
        type='text'
        onChange={changeText} 
        />
      <p>{text}</p>
      <button>Borrar</button> 
    </>
  )
}
```

De esta forma, a medida que escribimos en el `input`, se dispara la función `changeText`, desde el cual obtenemos el `value` del `input` (el `target` del evento) y actualizamos el estado `text`. Como el elemento `p` muestra el contenido de dicho estado, se va a ir actualizando en vivo.

Agreguemos ahora una función para borrar el estado:


```jsx
const LiveText = () => {
  const [text, setText] = useState('')

  const changeText = event => setText(event.target.value)

  const deleteText = () => setText('')

  return (
    <>
      <input 
        type='text'
        onChange={changeText} 
        />
      <p>{text}</p>
      <button onClick={deleteText}>Borrar</button> 
    </>
  )
}
```

Si hacemos esto, nos vamos a encontrar con que cuando escribimos algo, se actualiza el contenido del texto, y cuando hacemos click, este se borra, pero en nuestro `input` va a seguir quedando lo que tenemos escrito. Por qué sucede esto? El problema acá es que el valor del input no depende del estado `text`. Esto es lo que se conoce como un **input no controlado**, es decir, un input cuyo estado (lo que está mostrando), no lo controla React, sino el navegador. 

Para solucionar esto, tenemos que hacer que el valor del `input` dependa del estado del componente. Esto lo hacemos usando la `prop` `value`:

```jsx
const LiveText = () => {
  const [text, setText] = useState('')

  const changeText = event => setText(event.target.value)

  const deleteText = () => setText('')

  return (
    <>
      <input 
        type='text'
        value={text}
        onChange={changeText} 
        />
      <p>{text}</p>
      <button onClick={deleteText}>Borrar</button> 
    </>
  )
}
```

De esta forma, el input se vuelve **controlado**. Cuando hay un cambio en el `value` del `input`, se dispara el callback del evento `onChange`, `updateText`, que actualiza el estado `text`. Al hacerlo, se actualiza también el `value` del `input` con el valor asignado en dicho estado, que, hasta el momento, es lo que acabamos de escribir.

Parece un paso extra e innecesario, pero lo bueno de controlar el `value` del `input` es que cuando modificamos el estado mediante algún otro elemento u componente (en este caso, el botón), el `input` también se actualiza. De esta forma, no hay discordancia entre el estado del input y el estado que manipula.

## 📄 Resumiendo

Para tener un input controlado necesitamos:

* Un estado donde ir guardando el `value` del `input`
* Una función que cambie dicho estado
* Asignar dicha función al `onChange` del `input`
* En dicha función, declararle un parámetro (por lo general, se llama `event`) y acceder al valor del input mediante `event.target.value`
* Asignarle al `value` del input dicho estado
