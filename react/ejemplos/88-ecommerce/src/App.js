import React, { Component } from 'react';
import Navbar from './Navbar'
import Products from './Products'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filter: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  // con esta funcion, el componente Navbar me avisa cuando alguien clickeo buscar
  // y me pasa como parametro lo que escribieron en el input del filtro
  handleSearch (filter) {
    // cambio la propiedad filter de mi estado, con lo que me paso en la funcion
    this.setState({
      filter
    });
  }


  render() {
    return (
      <div>
        {/* al componente Navbar le paso una funcion con la que me pueda avisar cada que vez que la persona hace click en buscar */}
        <Navbar handleSearch={this.handleSearch} />
        {/* al componente Products le paso el atributo filter, de esta forma cada vez que modifique mi estado porque navbar ejecuto la funcion handleSearch(), automaticamente refresca el componente hijo */}
        <Products filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
