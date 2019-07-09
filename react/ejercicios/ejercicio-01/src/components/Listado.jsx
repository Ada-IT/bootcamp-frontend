import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Listado extends Component {
  constructor (props) {
    super(props);

    this.state = {
      libros: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:3030/api/books')
      .then(res => res.json())
      .then(data => {
        this.setState({
          libros: data
        })
      })
  }

  render() {
    // localhost:3000/detalle?q=ID
    // localhost:3000/detalle/ID
    const libros = this.state.libros.map(l => <li>{l.isbn} <Link to={`/detalle/${l.isbn}`}><button>Ver detalle</button></Link></li>)

    return (
      <div>
        <h1>¡Listado!</h1>

        <Link to="/nuevo">Nuevo ISBN</Link>

        <ul className="isbns">
          {libros}
        </ul>
      </div>
    );
  }
}

export default Listado;
