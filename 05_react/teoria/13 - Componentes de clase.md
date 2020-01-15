# Componentes de clase

Los componentes de clase son otra forma de declarar componentes en React. Nos permiten generan componentes más dinámicos que pueden cambiar y manipular su estado interno. Un componente puede ser funcional o de clase, no puede ser los dos a la vez. Lo mejor es siempre empezar con un componente funcional (porque es más simple y liviano), y si lo necesitamos, convertirlo a componente de clase.

Los pasos para pasar un componente funcional a uno de clase son los siguientes:

1. Crear una clase con el nombre del componente
2. Extender dicha clase de la clase `React.Component`
3. Agregarle un método `render` a la clase
4. Dentro de dicho método, poner un `return()`
5. Dentro de los paréntesis del `return` poner todo el JSX que estaba en el componente funcional

Por ejemplo, supongamos que tenemos el siguiente componente:

```jsx
import React from 'react'
// ...otros imports

const PopUpSubscription = () => (
  <PopUp>
    <EmailForm />
    <Button type="submit" />
  </PopUP>
)

export default PopUpSubscription
```

y queremos pasarlo a un componente de clase. 

#### 1. Crear una clase con el nombre del componente

```jsx
class PopUpSubscription {

}
```

#### 2. Extender dicha clase de la clase `React.Component`


```jsx
class PopUpSubscription extends React.Component {

}
```

#### 3. Agregarle un método `render` a la clase


```jsx
class PopUpSubscription extends React.Component {
  render(){
  
  }
}
```

#### 4. Dentro de dicho método, poner un `return()`

```jsx
class PopUpSubscription extends React.Component {
  render(){
    return(
    
    )
  }
}
```

#### 5. Dentro de los paréntesis del `return` poner todo el JSX que estaba en el componente funcional

```jsx
class PopUpSubscription extends React.Component {
  render(){
    return(
      <PopUp>
        <EmailForm />
        <Button type="submit" />
      </PopUP>
    )
  }
}
```

Esto finalmente nos quedaría así:

```jsx
import React from 'react'
// ... otros imports

class PopUpSubscription extends React.Component {
  render(){
    return(
      <PopUp>
        <EmailForm />
        <Button type="submit" />
      </PopUP>
    )
  }
}

export default PopUpSubscription
```

Esto es lo mínimo que necesitamos para tener un componente de clase funcionando. Un componente de clase tiene que tener sí o sí un método `render`, y dicho método tiene que devolver JSX válido.


## Props

Los props son pasados internamente por React cuando crea un componente funcional, por lo tanto, en cualquier parte de la clase tenemos acceso a estos mediante `this.props`. Si queremos usarlo por ejemplo en el método `render`, por ejemplo, podríamos hacer esto:

```jsx
class Button extends React.Component {
  render(){
    return(
      <div>{this.props.text}</div>
    )
  }
}
```

También podemos *desestructurar* los props para que queden de forma más visible y sean fácilmente reconocibles, además de permitirnos usarlos sin `this.props`

```jsx
class Comment extends React.Component {
  render(){
    const {title, text, username, date} = this.props
    return (
      <div className='comment'>
        <p>{title}</p>
        <p>{text}</p>
        <p>{username}</p>
        <p>{date}</p>
      </div>
    )
  }
}
```


## Métodos

Al igual que un objeto (una clase no es más que un objeto en última instancia) una clase puede tener métodos, es decir, acciones que puede realizar. Ya vimos un método que necesita todo componente, `render`, y que se encarga de devolver la lista de elementos que el componente tiene que renderizar. La sintaxis para otros métodos es la misma, dentro de las llaves de la clase, se escribe el nombre del método, paréntesis, donde van los parámentros, en caso de que los tenga, y luego llaves, donde va el cuerpo de instrucciones que se ejecuta al llamar el método:

```jsx
class MiComponente extends React.Component {
  miMetodo() {
    // acciones del metodo
  }
  render() {
    // ...
  }
}
```

A diferencia de un objeto, los métodos de una clase no se separan con coma. Esta sintaxis tiene un problema, y es que no asegura cuando se hace uso de un método, dentro de ese método, `this` refiera a la clase.

Por ejemplo, 

```jsx
class MiComponente extends React.Component {
  miMetodo() {
    console.log(this.props.name)
  }
  render() {
    return (
      <button onClick={this.miMetodo}>Clickeamos</button>
    )
  }
}
```

si hacemos click en el `div de este componente, nos va a tirar que `props` no es una propiedad de `undefined`. Esto es porque el `this` del método `render` sí refiere a la clase, mientras que el del `console.log`. El problema es que `this` es una palabra **contextual**, su valor depende de dónde está siendo llamada.

Para evitar esto, tenemos que usar en los métodos la sintaxis de propiedad de clase, junto a la de funciones flecha. Es decir, asignarle una propiedad de la clase una función, es decir:


```jsx
class MiComponente extends React.Component {
  miMetodo = () => {
    console.log(this.props.name)
  }
  render() {
    return (
      <button onClick={this.miMetodo}>Clickeamos</button>
    )
  }
}
```

De esta forma, `this` siempre refiere a la clase. Esto se debe a que las funciones flecha no crean su propio contexto, por lo que siempre utilizan la referncia al `this` del contexto superior desde donde son llamadas.

El método `render` no lo ponemos de esta forma y sí lo usamos con la sintaxis normal por una cuestión de performance. Este método, dependiendo el caso, puede llegar a tener que ejecutarse muchas veces. La función flecha es una función que se crea cada vez que se ejecuta, por lo tanto es una pequeña porción de memoria que ocupa y se va acumulando en caso de que haya muchas. En la práctica esto es pocas veces evidente, pero es una buena costumbre ya prevenir esto simplemente teniendo en cuenta este detalle. De esta forma, tenemos lo mejor de ambos mundos: `this` no contextual y performance.

Si queremos que el método tenga parámetros, tenemos que declararlo como callback dentro del atributo del evento, ya que si lo llamásemos directamente con paréntesis, el método se ejecutaría inmediatamente. Por lo tanto, tenemos que declararlo así:

```jsx
class MiComponente extends React.Component {
  imprimirEnConsola = valor => {
    console.log(valor)
  }
  render() {
    return (
      <button onClick={() => this.imprimirEnConsola(3)}>Imprimir</button>
    )
  }
}
```

## Estado

En un componente de clase, es estado podemos definirlo como un propiedad de clase. Para esto, tenemos que crear una propiedad que se llame `state`. Esta propiedad tiene que ser un objeto, dentro del cual podemos crear distintas estados con sus valores.


```jsx
class Contador extends React.Component {
  state = { cantidad: 0}

  render() {
    const { cantidad } = this.state
    return (
      <div>{cantidad}</div>
    )
  }
}
```

Para modificar dicho estado, no podemos hacerlo directamente, ya que el estado en React es inmutable. Para esto, necesitamos utilizar el método `setState`. Este método se hereda de la clase `React.Component`, por lo tanto podemos accederlo mediante `this`. `setState` tomar como argumento un objeto, donde tenemos que definir como propiedades aquellos estados que queremos manipular (no hace falta definir el resto) con el nuevo valor que deseamos que tenga. Por ejemplo:


```jsx
class Contador extends React.Component {
  state = { cantidad: 0}

  incrementarCantidad = () => {
    this.setState({ cantidad: this.state.cantidad + 1 })
  }

  render() {
    const { cantidad } = this.state
    return (
      <>
        <button onClick={this.incrementarCantidad}>Incrementar</button>
        <div>{cantidad}</div>
      </>  
    )
  }
}
```


