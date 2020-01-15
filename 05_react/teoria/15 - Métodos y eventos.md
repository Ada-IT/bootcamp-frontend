# Funciones y eventos

## Funciones

Dentro de un componente funcional podemos declarar otras funciones. Esto se hace antes del return del componente:

```jsx
const MiComponente = () => {
  const miFuncion = () => {
    // instrucciones de la función
  }
  return (
    // JSX retornado
  )
}
```

## Eventos

Un evento es algo que se ejecuta cuando sucede una cierta acción o pasas algo. Es la forma mediante la cual el usuario interactúa con la interfaz: con clicks, touchs, movimientos de mouse, teclas presionadas, etc. Podemos definir un evento un callback que va ejecutarse dentro de elementos HTML. Los nombres por lo general son bastante similares a los que ya conocemos desde HTML, solo que en `camelCase`:

  * onClick
  * onMouseOver
  * onKeyPressDown
  * onLoad
  * etc

Para utilizarlos, tenemos que asignarlos a un elemento HTML. **Asignarlos a un componente directamente no tiene efecto**, puesto que un componente es un conjunto de elementos, React no sabe a cuál de todos esos tiene que asociar dicho evento. El callback que definimos tiene que ser la referencia a un método, o puede ser la declaración de una función en línea. Volviendo al caso anterior:

Los componentes en React poseen la capacidad de reaccionar frente a una serie de eventos, al igual que los elementos del DOM. Las diferencias con estos son:

- Los eventos de React se nombran usando camelCase, en vez de minúsculas.
- Con JSX se pasa una función o la variable que la contiene como el manejador del evento, en vez de un string.

Por ejemplo, en HTML escribiríamos:

```html
<button onclick="calcularTotal()">
  Calcular total
</button>
```

Mientras que en React lo haríamos de la siguiente formas

```jsx
const MiComponente = () => {
  const calcularTotal = () => {
    // instrucciones de la función
  }

  return (
    <button onclick={calcularTotal}>
      Calcular total
    </button>
  )
}
```

llamamos a `calcularTotal` como callback del `onClick` del `button`. Si queremos pasarle un parámetro, no podemos hacer lo siguiente:


```jsx
const MiComponente = () => {
  const calcularTotal = total => {
    // instrucciones de la función
  }

  return (
    <button onClick={calcularTotal(total)}>
      Calcular total
    </button>
  )
}
```

Porque al hacer `calcularTotal(total)` estamos invocando directamente la función, y esta va a ejecutarse ni bien se interpreta. Lo que tenemos que hacer es definir un callback, es decir, dar la definición de un función. Como nuestro método ya está definido, necesitamos una función que llame al mismo con su parámentro:

```jsx
const MiComponente = () => {
  const calcularTotal = total => {
    // instrucciones de la función
  }

  return (
    <button onClick={() => calcularTotal(total)}>
      Calcular total
    </button>
  )
}
```

Por lo tanto, esto lo hacemos solamente cuando necesitamos que nuestro callback tenga uno o más parámetros.
