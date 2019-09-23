import React, { Component } from 'react';

class Nuevo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newIsbn: ''
    }
  }

  handleOnchangeInput (e) {
    this.setState({
      newIsbn: e.target.value
    })
  }

  crear () {
    fetch('http://localhost:3030/api/books', {
      method: "POST",
      body: JSON.stringify({
        isbn: this.state.newIsbn
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      this.props.history.push('/listado')
    })
  }

  render() {
    return (
      <div>
        <h1>Nuevo!</h1>

        <input value={this.state.newIsbn}
          onChange={this.handleOnchangeInput.bind(this)} />
        <button onClick={() => this.crear()}>Crearrrr</button>
      </div>
    );
  }
}

export default Nuevo;
