# Componentes hijos

Cuando definimos un componente, tenemos la posibilidad de hacerlo de forma abierta o cerrada. Si lo hacemos con las etiquetas de apertura y cierre, podemos anidar componentes adentro. Por ejemplo:

```jsx
<Header>
  <Title />
  <Subtitle />
  <Date />
</Header>
```

Ahora bien, dónde se renderizan estos componentes anidados? Un componente es un conjunto de elementos y/o componentes (por más que esté compuesto por uno, se considera un conjunto), por lo tanto React no sabe ni puede decidir dentro de cuál de todos esos elementos debe insertarlos.

Para que dichos componentes se muestren, debemos especificar en qué lugar queremos que se renderizen. Los componentes anidados o hijos, se pasan al elemento padre de la propiedad `children` de los `props`, por lo tanto, dentro del elemento padre, tenemos que definir dónde queremos que se incluyan:

```jsx
const Header = ({children}) => (
  <div className='header'>
    <Logo />
    {children}
  </div>
)
```

Esta técnica permite también tener componentes más reutilizables, ya que pueden contener distintas combinaciones de otros componentes, y no siempre la misma.
