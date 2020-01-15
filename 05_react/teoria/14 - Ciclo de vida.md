# Ciclo de vida

En React, un componente tiene lo que se conoce como un *ciclo de vida*. Al igual que los seres vivos, que nacen, crecen, se desarrollan y mueren, un componente se monta (nace), se actualiza (crece), y se desmonta (muere). *Montar* se refiere a que un componente se agrega al DOM.

Cada ciclo de vida de un componente tiene un método propio que le corresponde y que se ejecuta cuando el componente llega a esa etapa. Los métodos de ciclos de vida *sólo pueden ser accedidos y utilizados en un componente de clase*, que es otra de las ventajas que tiene sobre los componentes funcionales.

Muchos de estos métodos rara vez los utilizamos, pero es importante saber que existen por si en alguna ocasión necesitamos hacer uso de ellos. La lista de métodos son:

## Montado
  * `constructor()`
  * `componentWillMount()`
  * `render()`
  * `componentDidMount()`

## Actualización
  * `componentWillReceiveProps()`
  * `shouldComponentUpdate()`
  * `componentWillUpdate()`
  * `render()`
  * `componentDidUpdate()`

## Desmontado
  * `componentWillUnmount()`

<br />

## Diagrama de flujo del ciclo de vida de un componente

![React Life Cicle](https://miro.medium.com/max/1838/1*u8hTumGAPQMYZIvfgQMfPA.jpeg)

<br />

##  constructor

Este método es invocado cuando el componente está siendo creado y *antes* de ser montado (de ser agregado al DOM). Su función primaria es inicializar estado.

```jsx
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       clicks: 0
    };
  }
  handleClick = () => {
    this.setState({ 
      clicks: this.state.clicks + 1
    });
  }
  //...
}
```

De todas formas, con la nueva sintaxis de JS llamada propiedades de clase, podemos evitar declarar el constructor para inicializar estado:

```jsx
class Clicker extends React.Component {
  state = {
       clicks: 0
  }
  handleClick = () => {
    this.setState({ 
      clicks: this.state.clicks + 1
    });
  }
  //...
}
```

<br/>

## componentWillMount

Este método se ejecuta inmediatamente antes de que un componente es agregado al DOM / renderizado. Se incluye por cuestiones de retrocompatibilidad (para que las versiones viejas de React sigan funcionando), pero no deberíamos tener que utilizarlo nunca, además de que no tiene demasiada utilidad porque el componente todavía no existe en el DOM, por lo tanto no podemos cambios de estado.

<br/>

## render

El ciclo de vida más utilizado, ya que lo requiere obligatoriamente todo componente de clase. Controla el renderizado de un componente durante la fase de montado y actualización. No se puede cambiar el estado en este método.

<br/>

## componentDidMount

Uno de los más importantes y utilizados, se ejecuta inmediatamente después de que el componente se agrega al DOM / renderiza. Aquí es dónde hacemos llamadas mediante `fetch`, agregamos eventos, o modificamos cosas que requieran del DOM. Cualquier modificación del estado con `setState` hará que el componente se vuelva a renderizar.

```jsx
class Username extends React.Component {
  state = {
    username: ''
  }
  componentDidMount = () => {
    fetch('https://api.com')
    .then(response => response.json())
    .then(data => {
      this.setState({
        user: data.user
      });
    });
  }
}
```

<br/>

## componentWillReceiveProps

Cuando un componente va a recibir nuevos props de su padre, este método se dispara. Este es un buen lugar para chequear si hay cambios reales en los actuales props y triggerear un cambio de estado basado en los nuevos valores. `componentWillReceiveProps` recibe un parámetro con los nuevos props.

```jsx
componentWillReceiveProps(nextProps) {
  if (this.props.id !== nextProps.id) {
    this.setState({
      feedContent: []
    })
  }
}
```

<br/>

## shouldComponentUpdate

Este método existe solamente para mejorar la performance en situaciones que lo requieran. Renderizar un componente y chequear la diferencia del shadow DOM con el DOM actual (esto se llama *reconciliacíon*) son operaciones costosas y que consumente bastante. Por defecto, React renderiza todo el componente ante cualquier cambio. Este método da la posibilidad de devolver un booleano `true`/`false` que deteremine si React debería actualizar o no el componente. Si `shouldComponentUpdate()` devuelve `false`, entonces `componentWillUpdate()`, `render()`, y `componentDidUpdate()` no serán invocados.

`shouldComponentUpdate` recibe dos parámetros, el primero con los props a actualizar, y el siguiente con el estado a actualizar.

```jsx
shouldComponentUpdate(nextProps, nextState) {
  return this.props.clicks !== nextProps.clicks;
}
```

<br/>

## componentWillUpdate

React invoca este método inmediantamente antes de renderizar el componente cuando nuevos props o estado fueron recibidos. No hay mucho para hacer en este método e idealmente debería ser evitado.

<br/>

## componentDidUpdate

Ejecutado inmediatamente después de que React actualiza (re renderiza) un componente una vez que recibió nuevos props o estados. Este es un buen momento para hacer nuevos `fetch` o interactuar con otras partes de componente que lo requieran.

<br/>

## componentWillUnmount

Se ejecuta cuando el componente se remueve del DOM (deja de renderizarse). Es un buen momento para limpiar todo aquello que haya quedado asociado al componente (información, eventos, etc)

<br/>


## Qué hacer y no hacer en cada ciclo de vida

### constructor
* **SI:** iniciar estado
* **NO:** causar efectos secundarios (llamadas fetch, etc)

### componentWillMount
* **SI:** actualizar estado con `setState`, realizar mejoras de performance
* **NO:** causar efectos secundarios (llamadas fetch, etc)

### componentWillReceiveProps(nextProps)
* **SI:** sincronizar estados y props
* **NO:**  causar efectos secundarios (llamadas fetch, etc)

### shouldComponentUpdate(nextProps, nextState, nextContext)
* **SI:** realizar mejoras de performance
* **NO:** causar efectos secundarios (llamadas fetch, etc), llamar a `setState`

### componentWillUpdate(nextProps, nextState)
* **SI:** sincronizar estados y props
* **NO:** causar efectos secundarios (llamadas fetch, etc)

### componentDidUpdate(prevProps, prevState, snapshot)
* **SI:** causar efectos secundarios (llamadas fetch, etc)
* **NO:** llamar a `setState`

### componentDidMount
* **SI:** causar efectos secundarios (llamadas fetch, etc)

### componentWillUnmount
* **SI:** remover timers, remover eventos
* **NO:** llamar a `setState`, ejecutar eventos, crear timers



