import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nombre: 'Ada'
    }
  }

  render() {
    return (
      <div>
        {/* en el mensaje, muestro la constante que creamos en el state */}
        <h1>¡Hola, {this.state.nombre}!</h1>
      </div>
    );
  }
}

export default App;
