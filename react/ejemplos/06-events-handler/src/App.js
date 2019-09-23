// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props)

    // es importante agregar esta línea cuando pasamos funciones por atributos
    // esto es para que si dentro de la funcion utilizamos la palabra reservada `this`, funcione bien y sin problemas
    // si nos olvidamos esta linea, `this` dentro de la funcion seria `undefined`
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    alert('¡Hola mundo!')
  }

  render() {
    // bind
    return (
      <div>
        {/* para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        <button onClick={this.handleClick}>¡Saludar!</button>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
