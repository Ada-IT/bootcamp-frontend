// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  constructor (props) {
    super(props);
    // creo el objeto state
    // this hace referencia al componente
    this.state = {
      contador: 0
    }

    this.sum = this.sum.bind(this)
    this.sub = this.sub.bind(this)
  }

  sum () {
    // this.state.contador++
    // this.state.contador = this.state.contador + 1
    this.setState({
      contador: this.state.contador + 1
    })
  }

  sub () {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    // bind
    return (
      <div>
        <button onClick={this.sum}>+</button>
        <span>{this.state.contador}</span>
        <button onClick={this.sub}>-</button>
      </div>
    )
  }
}

export default App;
