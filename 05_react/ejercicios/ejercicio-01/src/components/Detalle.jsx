import React, { Component } from 'react';

class Detalle extends Component {
  constructor (props) {
    super(props)

    // aca voy a guardar el producto
    this.state = {
      book: {
        authors: []
      },
      loading: true
    }
  }
  componentDidMount () {
    // la api
    fetch('http://localhost:3030/api/books/' + this.props.match.params.isbn)
      .then(res => res.json())
      .then(data => {
        this.setState({
          book: data,
          loading: false
        })
      })
  }
  render() {
    if (this.state.loading) {
      return <p>cargando...</p>
    }
    return (
      <div>
        <h1>{this.state.book.title}</h1>
        <img src={this.state.book.cover} />
        <p>{this.state.book.description}</p>
        <ul>
          {this.state.book.authors.map(author => <li>{author}</li>)}
        </ul>
      </div>
    );
  }
}

export default Detalle;
