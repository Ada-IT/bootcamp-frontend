// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';
import Botonera from './Botonera';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  constructor() {
    super();
    this.state = { seconds: 5 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  clearTimer () {
    clearInterval(this.timer);
    this.timer = 0;
    this.setState({
      message: "",
      seconds: 5
    });
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      this.timer = 0;
      this.setState({
        message: "¡Fin!",
      });
    }
  }

  render() {
    return(
      <div>
        <br/>
        <br/>
        {this.state.seconds}
        <br />
        {this.state.message}
        <br/>
        <button onClick={this.startTimer}>Iniciar</button>
        <button onClick={this.clearTimer}>Limpiar</button>
      </div>
    );
  }
}

export default App;
