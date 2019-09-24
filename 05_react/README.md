# React

## ¿Qué es React?

React es una librería (**no** un framework) que falicita el desarrollo de intarfaces de usuario. Permite la crear interfaces complejas utilizando piezas chicas de código, reutilizables, que llamaremos `componentes`.

## Creación de un proyecto con "create-react-app"

Cuando vamos a comenzar un nuevo proyecto con React, generalmente tenemos que lidiar con una gran cantidad de herramientas como gestores de paquetes, transpiladores, etc. Por esto, el equipo de facebook creo **![Create React App](https://github.com/facebook/create-react-app)**, una herramienta que realizará la configuración necesaria y nos permitirá comenzar a desarrollar con React de una forma rápida y sencilla.

* Lo primero que tenemos que hacer es instalar la herramienta con NPM
    ```bash
    npm i -g create-react-app
    ```
* Una vez instalada, dentro de la carpeta donde queremos crear un proyecto nuevo, podemos ejecutar:
    ```bash
    create-react-app first-app
    ```
* Este último comando creará una carpeta `first-app` (esta tarea puede demorar unos cuantos minutos), y dentro todo el contenido necesario para ejecutar nuestra primer app con React.
* Una vez que finalizó el proceso anterior, podemos ingresar a la carpeta
    ```bash
    cd first-app
    ```
* Dentro de la carpeta, vamos a tener el siguiente contenido (que puede variar un poco dependiendo de la versión de `create-react-app`):
    ```bash
    first-app/
        .gitignore
        package-lock.json
        package.json
        README.md
        node_modules/
        public/
            favicon.ico
            index.html
            manifest.json
        src/
            App.css
            App.js
            App.test.js
            index.css
            index.js
            logo.svg
            serviceWorker.js
    ```

    * node_modules: es la carpeta donde se guardan las dependencias del proyecto
    * public: es la carpeta raíz del proyecto donde se encuentra el index.html
    * src: es el directorio donde vamos a colocar los archivos de nuestros componentes

* Para ejecutar la app de ejemplo que configura por defecto `create-react-app`, solo tenemos que ejecutar `npm start`. Una vez que termine, vamos a poder acceder desde un navegador a la dirección `localhost:3000` y ver algo similar (ya que depende de la versión) a lo siguiente:
![App Ejemplo Create React App](https://file-ztpprazfpx.now.sh/)

### Componente principal

* El punto de entrada a la aplicación es el archivo `scr/index.js`. Acá se inicializa el componente principal App.js, a través del método ReactDOM.Render. Dicho método recibe como primer parámetro el componente a renderizar y como segundo el elemento del DOM donde el componente va ser renderizado:

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import * as serviceWorker from './serviceWorker';

    // recibe como primer parametro el componente App, y como segundo en que elemento del DOM quiero que sea vea
    ReactDOM.render(<App />, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
    ```

* Y el componente App, nuestro componente principal y donde vamos a comenzar el desarrollo, tiene el siguiente código:
    ```js
    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';

    class App extends Component {
        render() {
            return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </header>
            </div>
            );
        }
    }

    export default App;
    ```

* Para seguir con la teoría, vamos a limpiar un poco el código, dejándolo lo más limpio posible:
    ```js
    import React, { Component } from 'react';

    class App extends Component {
        render() {
            return (
                <div>
                    <h1>¡Hola Mundo!</h1>
                </div>
            );
        }
    }

    export default App;
    ```

* _El código del ejemplo desarrollado hasta ahora se encuentra dentro de la carpeta ejemplos/01-first-app_

## JSX

* La sintáxis de HTML que vemos en el componente App, no es realmente HTML, sino JSX. Es una sintáxis extendida de Javascript que nos permite escribir código JS con etiquetas del estilo HTML.
* Al igual que en HTML, las etiquetas que usamos en JSX pueden tener atributos y elementos hijos. Si un atributo está escrito entre llaves `{}`, entonces el valor es una expresión de Javascript.
* Aclaración: JSX no usa comillas para encerrar a las etiquetas de HTML

**Ejemplo:**
```js
    class App extends Component {
        render() {
            return (
                <div>
                    <h1>¡Hola Mundo!</h1>
                </div>
            );
        }
    }
```
* Como JSX es más cercano a Javascript que HTML, React usa camelCase como convención para las propiedades en lugar de los atributos HTML.
* Por ejemplo, el atributo `class` se convierte es `className`, `tabindex` se convierte en `tabIndex` y `onclick` se convierte en `onClick` (entre otros).
* Vamos a modificar un poco nuestro ejemplo del `Hola Mundo`
**Ejemplo:**
```js
    class App extends Component {
        render() {
            const elementoH1 = <h1>¡Hola Mundo!</h1>
            return (
                <div>
                    {elementoH1}
                </div>
            );
        }
    }
```
* Movimos, a una variable llamada `elementoH1`, una porción del código JSX.
* Para que JSX funcione, es necesario que todos los elementos que usemos esten encerrados en una sola etiqueta padre.
* La expresiones dinámicas, o expresiones de Javascript, se engloban dentro de las llaves `{}`
**Ejemplo 1:**
```js
    class App extends Component {
        render() {
            const nombre = 'Ada'
            return (
                <div>
                    <h1>¡Hola {nombre}!</h1>
                </div>
            );
        }
    }
```
**Ejemplo 2:**
```js
    class App extends Component {
        render() {
            const persona = {
                nombre: 'Ada',
                apellido: 'Lovelace'
            }
            return (
                <div>
                    <h1>¡Hola {persona.nombre} {persona.apellido}!</h1>
                </div>
            );
        }
    }
```

## Componentes

* Los componentes permiten separar la web en piezas inependientes y reutilizables. Son los ladrillos de cualquier aplicación desarrollada con React, y una aplicación típica puede tener muchos.
* En pocas palabras, un componente es una clase o función de Javascript que puede aceptar algún input (llamados `props`) y retorna elementos de React, describiendo como una sección de la UI debería verse.

### Primer componente

* Creá un archivo llamaddo `Hola.js` dentro de la carpeta `./src`
* Copia el siguiente contenido:
```js
import React, { Component } from 'react';

class Hola extends Component {
  render() {
    return (
      <div>
        <h1>¡Hola mundo!</h1>
      </div>
    );
  }
}

export default Hola;
```
* Para poder ver el componente que creamos, vamos a cambiar el contenido de `App.js`.
* En JSX, los elementos HTML (etiquetas) también representan a los componentes definidos por el usuario.
* Debería quedar de la siguiente forma:
```js
import React, { Component } from 'react';
// acá estamos "importando" el componente "Hola"
import Hola from './Hola'

class App extends Component {
  render() {
    return (
      <div>
        {/* para usar el componente, podemos usarlo como cualquier otra etiqueta de HTML, recordando que el nombre comienza con mayuscula */}
        <Hola />
      </div>
    );
  }
}

export default App;

```
* En la segunda línea estamos `importando` nuestro componente.
* En la línea `<Hola />` estamos utilizando nuestra "etiqueta" propia.
* Veamos que pasó en este ejemplo:
    1. En la función `render()` de App utilizamos la etiqueta `<Hola />`.
    2. React llama/ejecuta al componente `Hola`.
    3. Nuestro componente `Hola` retorna un elemento <h1>¡Hola mundo!</h1> como resultado de la función `render()`

* **IMPORTANTE**: Los nombre de los componente siempre tienen que empezar con mayúscula.
* _El código de este ejemplo está en `./ejemplos/02-components`_

## Props y State

* Hay dos tipos de datos en React: `props` y `state`
* La diferencia es complicada de ver al principio, pero con la práctica se va a empezar a notar más la separación entre cada término
* La principal diferencia es que el estado es **privado** y solo puede ser modificado por el mismo componente.
* Las propiedades son externas, y no pueden ser editadas por el componente que las recibe.
* Las `props` son información pasadas para abajo desde un componente padre a un componente hijo.
* Entonces, mientras que las `props` no pueden ser modificadas directamente (_si se pueden modificar indirectamente, que lo vamos a ver más adelante_), si puede modificar su **propio** estado.

### Propiedades

* Las propiedades de un componente pueden definirse como atributos de configuración de ese componente
* Las propiedades son recibidas desde un nivel superior y son inmutables
* Esto quiere decir que las propiedades se pasan de un componente padre a un componente hijo
* Para acceder a la información que nos llega en una propiedad, vamos a utilizar una variable `props`

**Ejemplo:**
* Si continuamos con el ejemplo anterior `02-components`
* Si queremos que el mensaje sea `¡Hola {nombre}!`, y la variable nombre sea configurable, podemos pasarsela mediante una prop
* Vamos a modificar un poco el código del componente `Hola`:
```js
import React, { Component } from 'react';

class Hola extends Component {
  render() {
    return (
      <div>
        {/* en lugar de poner un nombre fijo, utilizamos un nombre que nos va a llegar a traves de un atributo nombre*/}
        <h1>¡Hola {this.props.nombre}!</h1>
      </div>
    );
  }
}

export default Hola;
```
* Las `props` no son más que los atributos de un elemento, y pueden ser de cualquier tipo de dato
* Entonces, en `App.js`, el código quedaría
```js
class App extends Component {
  render() {
    const elNombreQueQueremosMostrar = 'Ada Lovelace'

    return (
      <div>
        <Hola nombre={elNombreQueQueremosMostrar} />
      </div>
    )
  }
}
```
* Con las llaves, a nuestro atributo `nombre` le estamos pasando una expresión de JS (en este caso, el valor de una variable)
* Si a un atributo le queremos pasar simplemente un texto/string, podemos usar las comillas
```js
class App extends Component {
  render() {
    return (
      <div>
        <Hola nombre="Ada Lovelace" />
      </div>
    )
  }
}
```

* _El código de este ejemplo está en `./ejemplos/03-components-props`_

### Estado

* Otra forma de guardar información en React, es utilizando el estado del componente.
* A diferencia de las `props` (que son inmutables), el estado es **mutable**.
* Entonces si la información de tu aplicación va a cambiar (por ejemplo, basada en interacciones con el usuario), tiene que ser almacenada en el estado de algún componente.
* Como el estado es **privado** de solo un componente, no puede compartirse para abajo con componentes hijos.
* Si necesitamos pasar información a comopnentes hijos, tenemos que pasarselas mediante `props`
* Para inicializar el estado, vamos a hacerlo en una nueva función `constructor` dentro del componente que queremos que tenga `state`
**Ejemplo:**
```js
// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props)

    // creamos el estado del componente
    // el estado es simplemente un objeto de JS que va a guardar datos para operar o mostrar en el render
    // con el 'this' nos referimos estrictamente al componente que estamos creando
    // entonces a nuestro componente App le creamos un estado
    // la propiedad SIEMPRE tiene que llamarse state, y el objeto puede tener cualquier cantidad y tipo de propiedades
    this.state = {
      nombre: 'Ada Lovelace'
    }
  }

  render() {
    return (
      <div>
        {/* para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        <h1>¡Hola, {this.state.nombre}!</h1>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
```

* Para modificar el estado, vamos a utilizar la función `setState`
* La función recibe por parámetro un objeto con las propiedades que queremos modificar

**Ejemplo:**
* Agregamos un setTimeout para ejecutar un cambio de state a los 5 segundos
* Cuando `mutamos` el nombre, se va a modificar automáticamente el DOM, por lo que no tenemos que hacer nada para ver el cambio en la web

```js
// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props)

    // creamos el estado del componente
    // el estado es simplemente un objeto de JS que va a guardar datos para operar o mostrar en el render
    // con el 'this' nos referimos estrictamente al componente que estamos creando
    // entonces a nuestro componente App le creamos un estado
    // la propiedad SIEMPRE tiene que llamarse state, y el objeto puede tener cualquier cantidad y tipo de propiedades
    this.state = {
      nombre: 'Ada Lovelace'
    }

    // a los 5 segundos ejecutamos una funcion que edita la propiedad `nombre` del state
    // pasamos la funcion como una arrow function para que el `this` que utilizamos adentro siga funcionando bien
    // despues de ejecutarse la funcion setState, se vuelve a ejecutar la funcion render() que tenemos abajo y modifica lo que vemos en el html
    setTimeout(() => {
      this.setState({
        nombre: 'Grace Hopper'
      })
    }, 5000)
  }
  render() {
    // bind
    return (
      <div>
        {/* para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        <h1>¡Hola, {this.state.nombre}!</h1>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;

```
* _El ejemplo de esta sección está en ./ejemplos/06-components-set-state_


* Los componentes que tienen estado, se denominan **stateful components**.
* Tenemos que tratar de tener la menor cantidad de **stateful components** posible, y tratar de minimizar la información que guardamos en ese estado.
* Si un componente abajo en la jerarquía (algún componente hijo) necesita acceder a información del estado, podemos pasarla con las `props`
* Para definir en donde vamos a crear un estado, podemos hacernos las siguientes preguntas:
    * Identificar cada componente que pinta/renderea/muestra algo basado en el estado
    * Encontrar un componente dueño en común que guarda el estado y pase la información a los hijos
    * El componente en común o un componente más arriba puede ser el dueño del estado
    * Si no encontrás un componente donde poner el estado, podés crear un componente nuevo que guarde el estado y agregarlo en la jerarquía de componentes por arriba de los componentes en común, pasándole la información a los hijos vía `props`.

## Eventos

* Manejar eventos con React es bastante similar a como lo hacíamos con el DOM, pero con algunas diferencias de sintáxis.
* Todos los atributos de cada elemento (eventos incluídos) se nombran usando camelCase, en lugar de lowercase. Entonces, por ejemplo, utilizaríamos `onClick`, en lugar de `onlick`.
* Vamos a pasar una referencia a una función como handler de un evento, en lugar de un string. Por ejemplo, vamos a tener `onClick={this.handleClick}` en lugar de `onClick="handleClick"`.

**Ejemplo:**
```js
// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props)

    // es importante agregar esta línea cuando pasamos funciones por atributos
    // esto es para que si dentro de la funcion utilizamos la palabra reservada `this`, funcione bien y sin problemas
    // si nos olvidamos esta linea, `this` dentro de la funcion seria `undefined`
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    alert('¡Hola mundo!')
  }

  render() {
    // bind
    return (
      <div>
        {/* para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        <button onClick={this.handleClick}>¡Saludar!</button>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
```

* _El ejemplo de esta sección está en ./ejemplos/06-events-handler_

* En el constructor() agregamos la linea `this.handleClick = this.handleClick.bind(this)`.
* Esto es importante que este por cada función que definamos y utilicemos en eventos o atributos de nuestros elementos.
* Si no agregamos esta línea y dentro de la función utilizamos `this`, entonces en ese caso `this` va a ser `undefined`.
* Hay otras 2 formas de solucionar este mismo problema, que veremos más adelante.
* En las funciones que ejecutamos en eventos, también podemos modificar el estado.

**Ejemplo 2**
* En este ejemplo vamos a hacer una aplicación donde tengamos un botón con un texto dinámico
* Cada vez que hacemos click en el botón, tenemos que prender o apagar el botón (mostrar ON si está encendido u OFF si está apagado)
* Para esto, podemos utilizar una variable boolean que marquemos como true o false en cada click

```js
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props);

    // creo el estado con una propiedad isToggleOn para saber si tengo que mostrar on o off en el texto del boton
    this.state = {
      isToggleOn: true
    };

    // es importante agregar esta línea cuando pasamos funciones por atributos
    // esto es para que si dentro de la funcion utilizamos la palabra reservada `this`, funcione bien y sin problemas
    // si nos olvidamos esta linea, `this` dentro de la funcion seria `undefined`
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    // cambio el estado, asignandola el contrario de lo que tenía antes
    // si isToggleOn es true, pasa a false
    // si isToggleOn es false, pasa a true
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    return (
      <div>
        {/* para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        {/* en este caso, depende si la propiedad isToggleOn es true o false, muestro el texto ON u OFF */}
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    )
  }
}
```

**_Los ejemplos completos de esta sección están en: ./ejemplos/07-components-set-state-click, ./ejemplos/08-counter, ./ejemplos/09-countdown_**

## Conditional rendering