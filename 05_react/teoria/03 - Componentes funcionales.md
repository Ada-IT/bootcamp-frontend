# Componentes funcionales

Un componente no es más que una función que devuelve un conjunto de elementos HTML (u otros componentes que a su vez devuelven elementos HTML). Para definir un componente necesitamos:

1. Importar la librería React
2. Crear nuestra función/componente con nombre **comenzando en mayúscula** (PascalCase), ya que React lo necesita para diferenciar componentes de elementos HTML (`Button` es distinto de `button`)
3. Dicho componente debe devolver **al menos un elemento** HTML (u otro componente)
4. Los componentes u elementos que devuelva deben estar englobados en un **único elemento padre/raíz**
5. Exportar como **default** nuestro componente

Lo mínimo e indispensable que necesitamos para tener un componente funcional en React es lo siguiente:

```jsx
import React from 'react'

const MiComponente = () => (
  <></>
)

export default MiComponente
```
