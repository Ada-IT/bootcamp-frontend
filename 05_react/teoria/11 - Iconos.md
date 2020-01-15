# Iconos

Para utilizar íconos de FontAwesome al estilo de React, tenemos que instalar las siguientes dependencias:

```terminal
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/react-fontawesome
```

Cada vez que queramos mostrar un ícono, tenemos que utilizar el componente `FontAwesomeIcon`

```jsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ... en alguna parte de algún componente
<FontAwesomeIcon icon={icon} />
// ...
```

El componente tiene una propiedad `icon` obligatoria, en la cual tenemos que declarar que ícono va a estar mostrando. Este ícono tenemos que importarlo de la librería `@fortawesome/free-solid-svg-icons` (íconos sólidos) o de `@fortawesome/free-regular-svg-icons` (íconos normales). No todos los íconos están en ambas. Los nombres de los íconos empiezan con fa (Font Awesome) más el nombre (que se puede buscar en la página de Font Awesome), todo en `camelCase`.  

```jsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'

// ... en alguna parte de algún componente
<FontAwesomeIcon icon={faCoffee} />
<FontAwesomeIcon icon={faHome} />
// ...
```

Si tenemos algún componente que tenga un ícono de Font Awesome, pero queremos que ese ícono sea personalizable, podemos pasarlo como prop de ese componente:

```jsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({icon, text}) => (
  <FontAwesomeIcon icon={icon} />
  {text}
)
```

y en algún lado donde necesitemos invocar ese componente:

```jsx
import React from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<Button icon={faCoffe} />
```
