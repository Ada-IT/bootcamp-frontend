import React, { Component } from 'react';
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Nuevo from './components/Nuevo';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    // creo una constante con el valor Ada
    const nombre = 'Ada'

    return (
      <div>
        {/* en el mensaje, muestro la constante que creamos mas arriba */}
        <BrowserRouter>
          <div>
            <Route exact path="/listado" component={Listado} />
            <Route exact path="/nuevo" component={Nuevo} />
            <Route exact path="/detalle/:isbn" component={Detalle} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
