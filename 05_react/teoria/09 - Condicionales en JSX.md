
# Condicionales en JSX
  
Dado que dentro de código JSX podemos insertar expresiones de JS (dentro de llaves), podemos aprovecharlo para definir el valor de los props de componentes y elementos HTML. Para esto se utiliza el **operador ternario**, ya que la ventaja que tiene es que *devuelve* un valor, es decir, toda la expresión se reemplaza por el valor devuelto dependiendo de cómo se valide la condición.

La sintaxis del operador ternario es la siguiente:

```jsx
condicion ? valorSiTrue : valorSiFalse
```

Donde `condicion` es una expresión de JS que devuelve un *booleano* (por ejemplo una comparación). En el siguiente caso:

```jsx
3 > 5 ? 'Es mayor' : 'Es menor'
```

el resultado devuelto es `'Es menor'` porque la condición resuelve en `false`.

Esto podemos usarlo de la siguientes formas:

1. Para dar estilos:

```jsx
const PopUp = ({tipo}) => (
  <div style={{ backgroundColor: tipo === 'importante' ? 'red' : 'gray' }}/>
)
```

Acá le estamos asignando al `div` un `backgroundColor` dependiendo del valor que tenga el `prop` `tipo`, si es `'importante'`, será `'red', si es cualquier otro valor (no importante), será `'gray'`.


2. Para agregar o definir clases:


```jsx
const Boton = ({tipo}) => (
  <div className={tipo === 'importante' ? 'button-important' : 'button-normal'} />
)
```

En este caso, si la `prop` `tipo` tiene el valor `'importante'`, al `div` se le agregará la clase `'button-important'`, sino, la clase `'button-normal'`
