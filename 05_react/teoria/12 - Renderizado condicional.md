# Renderizado condicional

El renderizado condicional es una técnica que permite mostrar componentes dependiendo de una cierta condición (por lo general, una comparación, o el valor de una variable). La diferencia entre esto y ocultarlo mediante estilos, es que el elemento *no se renderiza*, es decir, directamente no se crea en el DOM, lo que aumenta la performance. En cambio si lo hacemos con estilos va a seguir existiendo, nada más que escondido. Existen varias estrategias para realizarlo:

## if/else

Util para cuando queremos evitar que se renderize un componente. La idea es en el cuerpo de la función, chequear una cierta condición. Si se cumple, devolvemos `null`, lo que impide que se siga ejecutando la función. De lo contrario, continúa con su flujo normal y termina devolviendo el componente a renderizar.

Se puede usar if/else if/else para ir chequeando y mostrando diferentes componentes según ciertas condiciones, pero *esto no es recomendable* porque la sintaxis se vuelve muy densa y complicada de leer, además de que se oscurece la lógica del componente. Para estos casos, es mejor usar la técnica del enum.

```jsx
const Modal = ({isVisible}) => {
  if (!isVisible)
    return null
    
  return (
    <div className='modal' />
  )  
}
```

## Operador ternario

Util cuando queremos alternar entre dos componentes dependiendo de si se cumple una condición. La sintaxis es:

```jsx
condicion ? <ComponenteSiSeCumple /> : <ComponenteSiNoSeCumple />
```

como esto es código JS, tenemos que encerrarlo entre llaves si lo estamos incluyendo dentro de código JSX. Por ejemplo, si quisiéramos mostrar un menú de navegación dependiendo de si el usuario está logueado o no, podríamos hacer lo siguiente:

```jsx
const Nav = ({isAuthenticated}) => (
    <div className='modal'>
    {
      isAuthenticated ?
      <AuthenticatedNav /> :
      <NonAuthenticatedNav />
    }
    </div>
)
```

## Operadores lógicos y evaluación de circuito corto

Cuando JS encuentra una serie de operadores lógicos, no lee toda la expresión entera. Por ejemplo, si tiene la siguiente expresión:

```jsx
valor1 && valor2 && valor3 && valor4
```

si `valor1` es `true`, va a pasar a evaluar `valor2`. Pero si esta es `false`, como toda la expresión resulta falsa independientemente de los valores que tengan las otras variables, estos no pasan a evaluarse. Esto se conoce como **evaluación de circuito corto**.

Si en vez de tener variables, tenemos funciones:

```jsx
condicion && miFuncion()
```

`miFuncion` se ejecuta solo si `condicion` es verdadera, porque si es falsa, no importa el valor que tenga el resto de la expresión, va a seguir siendo falsa y JS no lo evalúa.

De la misma manera, si pensamos que internamente cuando estamos escribiendo JSX en realidad estamos llamando a funciones, si tenemos:

```jsx
condicion && <MiComponente />
```

`MiComponente` sólo va a mostrarse (ejecutarse) si `condicion` es válida. Por lo tanto, podemos utilizar esto dentro del JSX de un componente:

```jsx
const Banner = ({isSubscribed}) => (
  <Container>
    <Imagen />
    <Form />
    {
      isSubscribed &&
      <BannerDiscount />
    }
  </Container>
)
```

En este caso, `BannerDiscount` sólo va a renderizarse si `isSubscribed` es verdadero.

## Enums

La idea es usar un objeto de configuración (enum) donde cada propiedad tiene como valor un componente JSX, y poder elegir (por lo general, mediante props) cuál de todas esas opciones utilizar, y renderizar el componente que contenga.

```jsx
const NOTIFICATION_STATES = {
  info: <Info />,
  warning: <Warning />,
  error: <Error />,
};

const Notification = ({ state }) => (
  <div>
    {NOTIFICATION_STATES[state]}
  </div>
);
```

aprovechando la notación de corchetes, podemos elegir la propiedad del objeto de forma dinámica, y dependiendo del valor que tenga el prop `state`, obtener el componente que corresponde y renderizarlo. Esto se usaría de la siguiente manera:

```jsx
<Notification state="warning" />
```
