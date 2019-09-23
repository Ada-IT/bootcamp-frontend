// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props)

    // creamos el estado del componente
    // el estado es simplemente un objeto de JS que va a guardar datos para operar o mostrar en el render
    // con el 'this' nos referimos estrictamente al componente que estamos creando
    // entonces a nuestro componente App le creamos un estado
    // la propiedad SIEMPRE tiene que llamarse state, y el objeto puede tener cualquier cantidad y tipo de propiedades
    this.state = {
      nombre: 'Ada Lovelace'
    }

    // a los 5 segundos ejecutamos una funcion que edita la propiedad `nombre` del state
    // pasamos la funcion como una arrow function para que el `this` que utilizamos adentro siga funcionando bien
    // despues de ejecutarse la funcion setState, se vuelve a ejecutar la funcion render() que tenemos abajo y modifica lo que vemos en el html
    setTimeout(() => {
      this.setState({
        nombre: 'Grace Hopper'
      })
    }, 5000)
  }
  render() {
    // bind
    return (
      <div>
        {/* para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        <h1>¡Hola, {this.state.nombre}!</h1>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
