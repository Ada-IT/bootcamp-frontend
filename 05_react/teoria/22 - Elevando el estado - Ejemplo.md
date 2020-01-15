# Elevando el estado - Ejemplo

Supongamos que tenemos un modal que puede abrirse y cerrarse. El componente sería más o menos así:

```jsx
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const open = () => setIsOpen(true)
  
  const close = () => setIsOpen(false)

  return (
    isOpen &&
    <div className='modal'>
      <button onClick={close}>X</button>
    </div>
  )
} 
```

`Modal` tiene un estado `isOpen` que determina si el componente se renderiza o no. A su vez, tiene las funciones `open` y `close` que controlan el cambio de estado. 

El problema que tenemos es que un modal no tiene forma de mostrarse a si mismo. No tiene ningún botón ni nada que permita ejecutar la función `open`, porque para eso, *ya tendría que estar mostrándose*.

Entonces, necesitamos que algo más, es decir, otro componente, pueda abrir nuestro modal. Supongamos que nuestra aplicación tiene la siguiente estructura:

```
        App 
         |     
         |     
   .--Container--. 
   |             |
 Modal          Button
```

En nuestro caso, queremos que el componente `Button` pueda abrir nuestro modal. Como ya mencionamos, el estado tiene que encontrarse en un único lugar, es decir, tiene que haber una *única fuente de la verdad*, y si queremos que distintas funciones compartan un estado y las acciones que lo modifican, tenemos que nuclearlo en un único componente y compartir las funciones que cada uno necesitan.

Para eso, tenemos que **elevar el estado** del componente `Modal`. A dónde lo elevamos? **Al ancestro común entre los componentes que necesitan compartir el estado más inmediato**. En este caso, tanto `Modal` como `Button` son hermanos, por lo que su ancestro común más inmediato es `Container`. Por lo tanto, tenemos que elevar el estado de `Modal` a `Container`. 

Cómo hacemos esto? Primero tenemos que *extraer* el estado y las funciones que lo modifican, y cambiarlo de componente. En nuestro caso:

```jsx
const Container = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const open = () => setIsOpen(true)
  
  const close = () => setIsOpen(false)

  return (
    <>
      <Button />
      <Modal />
    </>
  )
} 
```

```jsx
const Modal = () => (
  isOpen &&
  <div className='modal'>
    <button onClick={close}>X</button>
  </div>
)
```

`Container` posee ahora el estado `isOpen` y las funciones `open` y `close`. Podemos renombrarlos a algo un poco más significativo:

```jsx
const Container = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const openModal = () => setIsModalOpen(true)
  
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Button />
      <Modal />
    </>
  )
} 
```

Cómo hacemos ahora para compartir este estado y estas funciones? Mediante **props**. Empecemos por compartirle el estado `isModalOpen` a nuestro componente `Modal`:

```jsx
const Container = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const openModal = () => setIsModalOpen(true)
  
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Button />
      <Modal isOpen={isModalOpen} />
    </>
  )
} 
```

Ahora `Modal` tiene un `prop` `isOpen` que va a depender del estado `isModalOpen`. Dentro de `Modal` tenemos que obtenerlo de los `props`.

```jsx
const Modal = ({isOpen}) => (
  isOpen &&
  <div className='modal'>
    <button onClick={close}>X</button>
  </div>
)
```

El siguiente paso es pasarle la función `closeModal` al componente `Modal`. Esto también lo hacemos mediante `props`:

```jsx
const Container = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const openModal = () => setIsModalOpen(true)
  
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Button />
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal} 
        />
    </>
  )
} 
```

Es importante destacar que lo que estamos pasándole a `Modal` en el prop `onClose` es una *referencia* a la función `closeModal`. Entonces, dentro de nuestro `Modal`, podemos utilizarla así:

```jsx
const Modal = ({isOpen, onClose}) => (
  isOpen &&
  <div className='modal'>
    <button onClick={onClose}>X</button>
  </div>
)
```

Dentro del prop `onClose` está la referencia a la función `closeModal`. Cuando se haga click en el botón y se ejecute el callback que tiene asignado, React encuentra que tiene una referencia a otra función, va a buscar esa función y luego la ejecuta. Por lo tanto, al hacer click en el botón en el componente `Modal` estamos ejecutando la función `closeModal` del componente `Container`.

Ahora sólo nos queda pasar de la misma forma a la función `openModal` a nuestro componente `Button`:

```jsx
const Container = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const openModal = () => setIsModalOpen(true)
  
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Button onClick={openModal} />
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal} 
        />
    </>
  )
} 
```

y en el componente `Button`, usar dicha `prop` con la función asiganada para algo:

```jsx
const Button = ({onClick}) => (
  <button onClick={onClick} />
)
```

Si bien `onClick={onClick}` puede prestarse a confusión, es importante entender qué significa cada cosa. El primer `onClick` representa un evento del elemento `button`, el segundo es un prop del componente `Button` que contiene la función que se le asignó cuando se creó el componente.

## 📄 Resumiendo

* Teníamos dos componentes, `Modal` y `Button`, que necesitaban compartir ciertas acciones que modificasen un estado en particular.
* Para esto buscamos el ancestro *común más inmediato*, el componente `Container`, de los cuales `Modal` y `Button` son componentes hijos.
* "Elevamos" el estado y las acciones que modifican dicho estado a dicho componente.
* Pasamos el estado y las funciones a cada componente que lo necesita mediante `props`.
* Dentro de cada componente, utilizamos esos `props` (que incluyen referencias a funciones del componente padre) para asignarlos a los elementos que corresponden.

Hecho esto, es importante destacar un par de cosas:

* Hay una única "fuente de la verdad" del estado `isModalOpen`, que reside en el componente `Container`.
* El flujo de la información es de arriba hacia abajo, `Container` pasa el estado y las funciones a sus componentes hijos, pero no a la inversa.
* `Container` en ningún momento hace uso de dicho estado o de dichas funciones, simplemente se encarga de compartirlos entre sus componentes hijos (esto no es un requisito, puede que tenga que hacer uso de ellos dependiendo de la ocasión).
