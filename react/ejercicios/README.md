# Ejercicios

1. Crear una aplicación de React que muestre por pantalla el mensaje `¡Hola, {nombre}!`, donde nombre sea una variable de javascript.

2. Siguiendo el ejercicio del punto 1, que la aplicación muestre por pantalla el mensaje `¡Hola, {this.state.nombre}!`, donde nombre sea una variable guardada en el `state` del componente `App`.

3. Crear una aplicación con React, con un nuevo componente `HolaMundo`, en el que mostremos el mensaje `¡Hola mundo!`. Esta aplicación va a tener dos componentes: `App` y `HolaMundo`.
  ![Componentes ejercicio 3](https://file-zbdbbpuzqh.now.sh/)

4. Tomando como punto de partida el ejercicio del punto 3, ahora queremos que en el mensaje que mostramos dentro del componente `HolaMundo`, sea dinámico. Para eso, vamos a cambiar el mensaje por `¡Hola, {this.state.nombre}!`. Agregar el código restante para que el texto final que vemos en pantalla sea '¡Hola Ada!'

5. Si el mensaje dentro del componente `HolaMundo` del ejercicio anterior, fuese `¡Hola, {this.props.nombre}!`, ¿qué debería modificar en `App` para que el texto final en la pantalla sea '¡Hola, Grace!'?

6. Crear una nueva aplicación de React, con un componente `Saludador`. En el mismo, queremos visualizar un botón con el texto 'Saludar' y al hacer click mostrar un alert con el mensaje '¡Hola mundo!'. El código de App solo debería importar el componente `Saludador`.

    En App.js:
    ```
    render () {
      return (
        <Saludador />
      )
    }
    ```
7. Siguiendo el código del ejercicio **6**, en el componente `Saludador` queremos agregar un `<input>` en el cual permitimos a la persona ingresar su nombre. Al hacer click en el botón saludar (ya creado en el ejercicio anterior) tenemos que mostrar un alert con el texto `¡Hola, {this.state.nombre}!`. La variable nombre que estamos mostrando, debe ser la que ingresa la persona en el input.

8. Crear una aplicación que tenga solamente un botón. El texto del botón, debe mostrar el valor de una propiedad del state llamada `counter`. Cada vez que hacemos click en ese botón, debemos incrementar en 1 esa variable.
  ![Ejemplo contador clicks](http://g.recordit.co/SprjBIleW1.gif)

9. Crear una aplicación que tenga dos botones y un span. El texto del span, debe mostrar el valor de una propiedad del state llamada `counter`. Cada botón va a incrementar o decrementar la variable `counter`.
  ![Ejemplo contador + -](http://g.recordit.co/nFjLUwDvZw.gif)

10. Crear un componente `Modal`, el cual mostrará una ventana modal con el mensaje `¡Hola mundo, desde un modal!`. En el componente principal `App` vamos a llamar a nuestro componente `Modal` y un elemento `<button>` con el que, al hacer click, mostraremos el modal.
    En App.js:
    ```
    render () {
      return (
        <button onClick={}>Abrir modal</button>
        <Modal message show={} hide={} />
      )
    }
    ```

    ![Ejemplo modal](http://g.recordit.co/qRlW09Vzfx.gif)

11. Escribir una app con React para convertir temperaturas de grados centígrados a fahrenheit y viceversa.

    Fahrenheit y centigrados son dos escalas para medir la temperatura.

    En la escala Fahrenheit, el agua se congela a los 32 grados y hierve a las 212.

    En la escala Centígrados (también conocida como Celsius), el agua congela a 0 grados y hierve a las 100.

    La fórmula para convertir de Fahrenheit a Celsius: `C = (5/9) * (F - 32)`

    La fórmula para convertir de Celsius a Fahrenheit: `F = (1.8 * C) + 32`

    ![Ejemplo app celsius a fahrenheit](http://g.recordit.co/ckB8hxfSC2.gif)

11. Crear una aplicación de React que permita calcular tu peso en otros planetas.
  ![App peso en otros planetas](http://g.recordit.co/mSOHY8ImCh.gif)

    * La misma debe tener un formulario con dos campos: peso y planeta.
    * Peso es un campo donde la persona ingresará un dato numérico
    * Planeta debe ser un select con todos los planetas del sistema solar
    * Al hacer click en el botón calcular, aparecerá un mensaje con la leyenda **Tu peso en `[PLANETA]` es `[PESO]`**
    * Para calcular el peso se debe hacer la siguiente operación:
      * Si elegimos Mercurio: Peso * 0.0387;
      * Si elegimos Venus: Peso * 0,9051;
      * Si elegimos Marte: Peso * 0,3775;
      * Si elegimos Jupiter: Peso * 2,5306;
      * Si elegimos Saturno: Peso * 1,0653;
      * Si elegimos Urano: Peso * 0,8877;
      * Si elegimos Neptuno: Peso * 1,1377;
      * Si elegimos Pluton: Peso * 0,0632;

    * El esquema de componentes a crear en React es el siguiente:
    ![Componentes](https://file-mseiienkbd.now.sh/)

      * App: componente principal que va a incluir a los otros dos:
        ```
          <div>
            <Form />
            <Resultado />
          </div>
        ```
      * Form: componente que va a incluir los dos campos (input de peso y select de planetas), y el botón calcular para calcular el peso. Al hacer click en el botón, se deberá calcular el peso según el planeta elegido e informar al componente App
      * Resultado: componente con una etiqueta `<p>` con el mensaje: Tu peso en `[PLANETA]` es `[PESO]`. El nombre del planeta y el peso lo va a sacar de las props.