// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props);

    // creo el estado con una propiedad isToggleOn para saber si tengo que mostrar on o off en el texto del boton
    this.state = {
      isToggleOn: true
    };

    // es importante agregar esta línea cuando pasamos funciones por atributos
    // esto es para que si dentro de la funcion utilizamos la palabra reservada `this`, funcione bien y sin problemas
    // si nos olvidamos esta linea, `this` dentro de la funcion seria `undefined`
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    // cambio el estado, asignandola el contrario de lo que tenía antes
    // si isToggleOn es true, pasa a false
    // si isToggleOn es false, pasa a true
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    return (
      <div>
        {/* para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        {/* en este caso, depende si la propiedad isToggleOn es true o false, muestro el texto ON u OFF */}
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
