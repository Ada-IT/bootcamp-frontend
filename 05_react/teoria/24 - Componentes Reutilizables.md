# Componentes reutilizables

En JavaScript vainilla, cuando necesitamos reutilizar código, lo abstraemos en una función, y esta nos queda disponible para ser usada en cualquier lado. Con React ya vimos que podemos hacer algo parecido con los `hooks` cuando queremos reutilizar cierta lógica. Pero, ¿qué pasa con los componentes? Los componentes son los ladrillos con los que se construyen las aplicaciones en React. Imagina construir una casa donde cada ladrillo tuviese que ser distinto (o cada ventana, o cada puerta, o cada cerámica), sería muy costosa e improductiva. Lo mismo pasa en React.

Supongamos que necesitamos dos botones, uno que diga "Aceptar" y otro que diga "Cancelar". Podríamos hacer lo siguiente:

```jsx
const AcceptButton = () => (
	<button>Aceptar</button>
)

const CancelButton = () => (
	<button>Cancelar</button>
)
```

Estos botones son componentes específicos, sólo pueden usarse para un caso particular. Ahora imagina hacer lo mismo *para cada botón* que nuestra aplicación necesita. Ya puedes darte cuente que esto es totalmente impráctico, genera una duplicación innecesaria de código, requiere más tiempo de desarrollo y mantenimiento, y es mucho más propenso a bugs y problemas.

Gran parte de la arquitectura de una aplicación de React, y buena parte de su flexibilidad y potencia, consiste en crear **componentes reutilizables**. Un componente reutilizables es un componente lo suficientemente genérico que puede utilizarse en muchos casos y situaciones diferentes. Pero, ¿cómo hacer un componente reutilizable?


## Diseñando componentes reutilizables

Lamentablemente, no existe una fórmula o regla que podamos aplicar cada vez que necesitamos hacer un componente reutilizable, pero sí existen una serie de estrategias y tips que podemos poner en práctica. Al igual que con las funciones, abstraer y generalizar componentes es una tarea que tiene su complejidad, cuanto más genérico y flexible queremos que nuestro componente sea, es decir, cuantos más casos queremos que abarque, más tenemos que pensar con detenimiento cómo armarlo.

Utilicemos un caso en particular de un componente y vayamos viendo cómo podemos hacer para volverlo reutilizable. Supongamos que tenemos este alert:

```jsx
const AlertError = ({isOpen}) => (
	const [isVisible, setIsVisible] = useState(isOpen)

	const close = () => setIsVisible(false)

	return (
		isVisible &&
		<div>
			<CloseIcon onClick={close} />
			<h3>{title}</h3>
			<p>{message}</p>
		</div>
	)
)
```

Este es un componente poco reutilizable. Muestra siempre el mismo mensaje, y es una alerta de error. Si bien podemos usarlo cada vez que hay un error en la carga, no nos deja muchas opciones en otros casos. ¿Cómo podríamos hacerlo más genérico? Veamos algunas estrategias.

### Generalizar el componente

Consiste en tomar aquellas cosas específicas del componente, las que lo acotan a ciertos casos, y tratar de reemplazarlas por props que permitan personalizarlo:

```jsx
const Alert = ({isOpen, title, message}) => (
	const [isVisible, setIsVisible] = useState(isOpen)

	const close = () => setIsVisible(false)

	return (
		isVisible &&
		<div>
			<CloseIcon onClick={close} />
			<h3>{title}</h3>
			<p>{message}</p>
		</div>
	)
)
```

Al reemplazar el texto hardcodeado por props, ahora podemos utilizarlo para diferentes situaciones. Además, le cambiamos el nombre, ya que no solo vamos a usarlo cuando hay un error. Esto nos permite hacer lo siguiente:

```jsx
<Alert 
	isOpen={false} 
	title="Error" 
	message="Ha ocurrido un error en la carga, vuelva a intentarlo" 
	/>

<Alert 
	isOpen={false} 
	title="Producto agregado" 
	message={`${productName} se ha agregado exitosamente al carrito`} 
	/>
```

### Determinar variaciones de estilos

Ya vimos algunas formas diferentes de estilar un componente. Una de ellas implicaba usar `enums`, un objeto de configuración que nos permitía definir algunas opciones, en vez de dar absoluta libertad para modificarlo. Esto permite unificar y estandarizar estilos, y tener componentes que varían de forma limitada, para que se mantengan coherentes en cuanto al diseño general de la aplicación. Esto también hace que quienes usen nuestros componentes tengan que perder menos tiempo estilizándolos, y a la hora de trabajar en equipo, que no haya divergencias de estilos entre quienes lo usan.


```jsx
export const ALERT_VARIANTS = {
	SUCCESS: 'success',
	INFO: 'info',
	WARNING: 'warning'
}

const getBackgroundColor =  variant => {
	switch (props.variant) {
		case ALERT_VARIANTS.SUCCESS:
			return `background-color: green;`
		case ALERT_VARIANTS.INFO:
			return `background-color: blue;`
		case ALERT_VARIANTS.WARNING:
			return `background-color: red;`
		default: 
			return `background-color: gray;`
}

const AlertWrapper = styled.div`
	border: 2px solid black;
	${props => getBackgroundColor(props.variant)}
`

const Alert = ({isOpen, variant, title, message}) => (
	const [isVisible, setIsVisible] = useState(isOpen)

	const close = () => setIsVisible(false)

	return (
		isVisible &&
		<AlertWrapper variant={variant}>
			<CloseIcon onClick={close} />
			<h3>{title}</h3>
			<p>{message}</p>
		</AlertWrapper>
	)
)
```

En este caso, definimos un componente con `styled-components`. A dicho componente le asignamos un prop, `variant`, que lo tomamos originalmente del componente principal. Dentro de los estilos del `AlertWrapper`, obtenemos el prop que le pasamos, y lo usamos para obtener parte del `css` que necesitamos mediante la función `getBackgroundColor`. Esta no es la única forma de hacerlo, pero sí una buena estrategia para separar las responsabilidades y hacer el código más atómico.

De esta manera, ahora podemos definir la variante del componente según necesitemos, obteniendo distintos estilos para un mismo componente. 


```jsx
<Alert 
	isOpen={false}
	variant={ALERT_VARIANTS.WARNING} 
	title="Error" 
	message="Ha ocurrido un error en la carga, vuelva a intentarlo" 
	/>

<Alert 
	isOpen={true}
	variant={ALERT_VARIANTS.SUCCESS} 
	title="Producto agregado" 
	message={`${productName} se ha agregado exitosamente al carrito`} 
	/>
```

### Permitir estilos personalizados

De todas formas es buena práctica dejar la posibilidad de agregar estilos propios. Nunca podemos predecir todos los casos donde va a ser usado, y sería un desperdicio que por un situación extraordinaria se tenga que crear un nuevo componente, si es que podemos evitarlo. Para el caso de `styled-components` tenemos que agregar el atributo `className`.


```jsx
const Alert = ({
	isOpen,
	className, 
	variant, 
	title, 
	message
}) => (
	const [isVisible, setIsVisible] = useState(isOpen)

	const close = () => setIsVisible(false)

	return (
		isVisible &&
		<AlertWrapper variant={variant} className={className}>
			<CloseIcon onClick={close} />
			<h3>{title}</h3>
			<p>{message}</p>
		</AlertWrapper>
	)
)
```

Esto permite que el mismo componente pueda ser estilizado con `styled-components`.

```jsx
const StyledAlert = styled(Alert)`
	border-radius: 5px; 
`

// En algún componente
// ...

<StyledAlert
	isOpen={true}
	variant={ALERT_VARIANTS.SUCCESS}
	title="Compra realizada"
	message="Gracias por su compra"
	/>
```

### Evitar estilos de layout

Un componente reutilizable sólo debe importarle aquello que le concierne a sí mismo, es una unidad independiente, no tiene que interesarle en qué parte de la aplicación es utilizado. Esto implica que no debemos definirle estilos relacionados a layout, ya que, por ejemplo, si determinamos que un componente tiene que estar posicionado de forma absoluta, luego no vamos a poder cambiarlo a una posición relativa. No obstante, *sí exiten componentes que sólo pueden estar ubicados en ciertas posiciones* (o que no deseamos dar tanta libertad de decisión al respecto), por lo que hay que evaluar bien cada caso. Por ejemplo, componentes como `modales`, o `headers`, tienen posiciones regulares en la mayoría de las aplicaciones.

Podemos tomar entonces como guía evitar todos los estilos de layout en primera instancia, a menos que el componente realmente lo requiera, y delegar las decisiones concernientes a los componentes que lo contienen.

Con propiedades de layout nos referimos a:

- `position`
- `top`, `right`, `bottom` y `left`
- `display`
- `width`, `height`, `min-width`, `min-height`, `max-width` `max-height`
- `margin` y `padding` 
- todas las relacionadas a `flexbox`


De nuevo, esta es una guía más que una regla estricta, por lo que no debemos tomarla como un absoluto, cada componente es un caso particular y tenemos que analizar qué es lo que∂ necesita.

### Permitir atributos extras

De la misma forma que no podemos cubrir todos los estilos necesarios de antemano, tampoco podemos predecir todos los atributos que un componente va a requerir en un cierto caso dado. La principal razón por la que los atributos que determinamos no son suficientes es que herramientas o librerías de terceros pueden necesitarlos para funcionar.

Para permitir, podemos aprovechar el `spread operator`


```jsx
const Alert = ({
	isOpen,
	className, 
	variant, 
	title, 
	message,
	...customProps
}) => (
	const [isVisible, setIsVisible] = useState(isOpen)

	const close = () => setIsVisible(false)

	return (
		isVisible &&
		<AlertWrapper variant={variant} className={className} {...customProps}>
			<CloseIcon onClick={close} />
			<h3>{title}</h3>
			<p>{message}</p>
		</AlertWrapper>
	)
)
```

Combinando `spread operator` y `destructuring`, podemos obtener todos los atributos pasados como props que no coinciden con los declarados, y asignarlos al componente usando nuevamente `spread operator`. De esta forma, cuando utilizamos el componente, podemos declarar nuevos atributos y estos no van a ser ignorados, dándole así una mayor capacidad de personalización.

```jsx
<Alert
	isOpen={true}
	variant={ALERT_VARIANTS.SUCCESS}
	title="Compra realizada"
	message="Gracias por su compra"
	customAttribute={someValue}
	otherCustomAttribute={someOtherValue}
	/>
```

### Incorporar la composición

¿Qué sucede si queremos que nuestro `Alert` tenga, además de un `h3` y un `p`, un botón? ¿U otro componentes? Tampoco podemos cubrir todos los casos de uso posible. Una buena estrategia para esto es permitir que el componente sea compuesto con otros, y que esta decisión recaiga en quién lo usa. Ya hemos visto esta estrategia anteriormente, se trata de utilizar el prop `children` para que el componente incorpore aquellos componentes que se le aniden. Podemos hacerlo de la siguiente forma:

```jsx
const Alert = ({
	isOpen,
	className, 
	variant, 
	children,
	...customProps
}) => (
	const [isVisible, setIsVisible] = useState(isOpen)

	const close = () => setIsVisible(false)

	return (
		isVisible &&
		<AlertWrapper variant={variant} className={className} {...customProps}>
			<CloseIcon onClick={close} />
			{children}
		</AlertWrapper>
	)
)
```

Esto permite que utilicemos el componente anidándole los componentes que querramos:

```jsx
<Alert
	isOpen={true}
	variant={ALERT_VARIANTS.SUCCESS} />
	<header>Un error ha ocurrido</header>
	<section>
		<div>
			<ErrorIcon />
			<h3>Error</h3>
		<div>
		<p>Ha surgido un problema al intentar la operación</p>
		<p>Si no se resuelve, por favor completar el siguiente
			<Link to='/error-form'>formulario</Link>
		</p>
	</section>
</Alert>
```

Incluso, si este es un componente que vamos a usar en muchas situaciones, podemos hacer un componente más complejo a partir de este:

```jsx
const AlertError = () => (
	<Alert
		isOpen={true}
		variant={ALERT_VARIANTS.SUCCESS} />
		<header>Un error ha ocurrido</header>
		<section>
			<div>
				<ErrorIcon />
				<h3>Error</h3>
			<div>
			<p>Ha surgido un problema al intentar la operación</p>
			<p>Si no se resuelve, por favor completar el siguiente
				<Link to='/error-form'>formulario</Link>
			</p>
		</section>
	</Alert>
)
```

Parece que hemos dado una vuelta en círculos y terminado donde empezamos, pero en realidad, pasamos de tener un componente poco reutilizable, a uno sumamente flexible, que utilizamos para componer el mismo componente, y que podamos usar en muchos otros casos y para componer muchos otros componentes según lo necesitemos.

- Componentes idiotas / No logica
- Partir componentes



