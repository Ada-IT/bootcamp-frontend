import React, { Component } from 'react';

class Products extends Component {
  constructor (props) {
    super(props);

    this.state = {
      products: [
        { id: 1, name: 'Magna sed amet no erat.', price: 150},
        { id: 2, name: 'Diam vero nonumy tempor dolor.', price: 50},
        { id: 3, name: 'Consetetur eos et sit magna.', price: 80},
        { id: 4, name: 'Et no erat no invidunt.', price: 120},
      ]
    }
  }

  render() {
    // cada vez que la propiedad filter que me pasa el componente padre App cambie, se vuelve a ejecutar este codigo
    let productsToShow = this.state.products;
    // si esa propiedad tiene algo, voy a filtrar los productos por el nombre
    if (this.props.filter && this.props.filter.length > 0) {
      productsToShow = productsToShow.filter(p => p.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0);
    }

    return (
      <ul>
        {productsToShow.map(p => <li key={p.id}>{p.id}. {p.name} - {p.price}</li>)}
      </ul>
    );
  }
}

export default Products;
