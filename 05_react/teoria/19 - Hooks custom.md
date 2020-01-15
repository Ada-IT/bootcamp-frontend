# Hooks custom

Supongamos que tenemos los siguientes componentes:

```jsx
import React, { useState } from 'react'

const PesosIncreaser = () => {
  const [pesos, setPesos] = useState(0)

  const increasePesos = () => setPesos(pesos + 1)

  return (
    <button onClick={increasePesos}>{`Tienes $${pesos}`}</button>
  )
}

const DolarsCounter = () => {
  const [dolars, setDolars] = useState(0)

  const increaseDolars = () => setDolars(dolars + 1)
  const decreaseDolars = () => setDolars(dolars + 1)

  return (
    <>  
			<button onClick={decreaseDolars}>Restar 1 dólar</button>
			<p>Tienes {dolars} dólares</p>
			<button onClick={increaseDolars}>Sumar 1 dólar</button>
    </>    
  )
}
```

Si los observamos, podemos ver que los componentes son lo suficientemente diferentes como para que no podamos generalizarlos en uno solo. Pero si bien no comparten los elementos que renderizan, sí comparten la lógica: el estado y las acciones que realizan. Por lo tanto, podemos afirmar que entre estos dos componentes tenemos código repetido. En este caso son sólo dos, por lo que no es un problema muy grave,pero quizás en nuestra aplicación tenemos varios de estos contadores, por lo que el código duplicado crecería con cada uno de ellos.

Por suerte, tenemos una forma de evitar este inconveniente. Una de las ventajas de que nos ofrecen los `hooks` es que nos permiten crear nuestros propios `hooks` personalizados.

Para hacerlo, tenemos que crear una función que comience con el prefijo `use-`. Dentro de esta función podemos definir la lógica que va a tener dicho `hook`. Veamos un caso concreto. Supongamos que queremos extraer el código repetido de ambos componentes. Primero necesitamos crear una función y ponerle un nombre adecuado, por ejemplo:

```js
const useCounter = () => {

}
```

La idea es que el `hook` personalizado sea un caso genérico, y pueda usarse para muchas situaciones. Por eso lo ideal es tratar de buscar el contenido en común que tiene el código y tratar de generalizarlo lo más que se pueda, esto incluye el nombre del propio hook. Podríamos haber utilizado algo como `useMoney` pero en ese caso lo estaríamos restringiendo a sólo casos de uso en los que esté involucrado dinero.

Ahora que tenemos nuestra `hook` definido, tenemos que incluir en este la lógica de los componentes repetida. Ya vimos que esta era:

```js
	// PesosIncreaser

	const [pesos, setPesos] = useState(0)

  const increasePesos = () => setPesos(pesos + 1)

	// DolarsCounter

  const [dolars, setDolars] = useState(0)

  const increaseDolars = () => setDolars(dolars + 1)
  const decreaseDolars = () => setDolars(dolars + 1)
```

¿Cómo generalizamos esto? Pensemos en qué consisten primero:

1. Un estado con un cierto valor inicial
2. Una función para incrementar en 1 ese valor
3. Una función para reducir en 1 ese valor

Por lo tanto, podríamos escribir nuestro hook de la siguiente forma:

```js
import { useState } from 'react'

const useCounter = (initialValue = 0) => {
	const [count, setCounter] = useState(initialValue)
	
	const increaseCounter = () => setCounter(counter + 1)
	const decreaseCounter = () => setCounter(counter - 1)
}
```

Para poder utilizar estos valores y funciones del `hook`, necesitamos que los devuelva. Esto podemos hacerlo así:

```js
import { useState } from 'react'

const useCounter = (initialValue = 0) => {
	const [count, setCounter] = useState(initialValue)
	
	const increaseCounter = () => setCounter(counter + 1)
	const decreaseCounter = () => setCounter(counter - 1)

	return [count, increaseCounter, decreaseCounter]
}
```

En este caso, estamos devolviendo `count` y las funciones que permiten incrementarlo y disminuirlo, y no `setCounter`, ya que esto permitiría setear el contador el cualquier valor, y no es lo que queremos (aunque tranquilamente podría ser el caso que sí lo necesitásemos). Como una función sólo puede devolver un valor, y en este caso queremos devolver tres, tenemos que devolverlos en alguna estructura de datos, por ejemplo un array o un objeto. Es importante destacar que *dentro de un hook personalizado podemos usar otros hooks*, lo que no se aplica dentro de funciones normales. 

No hay reglas para lo que un `hook` puede o no devolver, ni para lo que puede hacer o no hacer, o argumentos que puede necesitar. Un `hook` no deja de ser una función de JavaScript, y se aplican las mismas condiciones que para ellas.

Para poder utilizar este hook, necesitamos exportarlo e importarlo en lo componentes que lo requieran:


```js
import { useState } from 'react'

const useCounter = (initialValue = 0) => {
	const [count, setCounter] = useState(initialValue)
	
	const increaseCounter = () => setCounter(counter + 1)
	const decreaseCounter = () => setCounter(counter - 1)

	return [count, increaseCounter, decreaseCounter]
}

export default useCounter
```

```jsx
import React, { useState } from 'react'
import useCounter from 'path-to-file'

const PesosIncreaser = () => {
  const [pesos, increasePesos] = useCounter(0)

  return (
    <button onClick={increasePesos}>{`Tienes $${pesos}`}</button>
  )
}

const DolarsCounter = () => {
  const [dolars, increaseDolars, decreaseDolars] = useCounter(0)

  return (
    <>  
			<button onClick={decreaseDolars}>Restar 1 dólar</button>
			<p>Tienes {dolars} dólares</p>
			<button onClick={increaseDolars}>Sumar 1 dólar</button>
    </>    
  )
}
```

Al igual que `useState`, haciendo uso de `array destructuring`, podemos darle los nombres que querramos a los elementos que el `hook` devuelve. 

Como vemos, ahora nuestros componentes se volvieron más simples y limpios, y por lo tanto, más fáciles de leer. Además, evitamos duplicar código, y ganamos un `hook` reutilizable que podemos aplicarlo en otros componentes. Esta es la potencia y las ventajas que nos traer crear y utilizar nuestros propios `hooks`.

## 📄 Resumiendo

- Los `hooks` personalizados nos permiten reutilizar lógica entre componentes y evitar código duplicado
- Son funciones normales de JavaScript que tienen que empezar con el prefijo `use-`
- Dentro de ellas podemos usar otros `hooks`
		