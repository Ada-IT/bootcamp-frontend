import React, { Component } from 'react';
import Modal from './Modal';
import './App.css'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      show: false
    }

    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({
      show: true
    })
  }

  closeModal () {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.openModal}>Abrir modal</button>
        <Modal message="¡Hola mundo, desde un modal!" show={this.state.show} close={this.closeModal.bind(this)}/>
      </div>
    );
  }
}

export default App;
