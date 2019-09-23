import React, { Component } from 'react';

class Navbar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filter: ''
    }

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchClear = this.handleSearchClear.bind(this);
  }

  handleChangeInput (e) {
    this.setState({
      filter: e.target.value
    });
  }

  handleSearch () {
    // ejecuto la funcion handleSearch que me paso como props el componente padre App, pasando como parametro lo que fuimos guardando en el estado
    this.props.handleSearch(this.state.filter);
  }

  // el clear simplemente vacia el state y llama a la funcion handleSearch()
  handleSearchClear () {
    this.setState({
      filter: ''
    });
    this.props.handleSearch('');
  }

  render() {
    return (
      <div>
        <label for="filter">Filtro: </label>
        <input id="filter" name="filter" value={this.state.filter} onChange={this.handleChangeInput}/>
        {/* ejecuto mi funcion handleSearch */}
        <button onClick={this.handleSearch}>Buscar</button>
        <button onClick={this.handleSearchClear}>Clear</button>
      </div>
    );
  }
}

export default Navbar;
