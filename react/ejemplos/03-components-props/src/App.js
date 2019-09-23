// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';
import Hola from './Hola'

// class y el nombre del componente (en mayúscula)
class App extends Component {
  render() {
    const nombre = 'Ada Lovelace'

    return (
      <div>
        <Hola nombre={nombre} />
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
