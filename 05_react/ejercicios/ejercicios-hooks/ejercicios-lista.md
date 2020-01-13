# Ejercicios borrador

### 1. Intro JSX

En `App.js` agregar el JSX necesario para crear un componente similar al siguiente (card). Agregar los estilos en `styles.css`, dentro de la carpeta `public`

```html
 <div className="post-container">
  <section class="post">
   <header className="info-usuario">
     <img className="avatar" src={props.autor.urlAvatar} alt={props.autor.nombre} />
     <h3 className="info-usuario-nombre"></h3>
   </div>
   <section className="post-content">
     <h1 className="post-title"></h1>
     <p className="post-text"></p>
   </section>
   <footer className="fecha-comentario">
     <p className="comment-date">Publicado el <time>01-01-2020</time></p>
   </footer>
 </section>
 <section class="comments">
  <h2>Comentarios</h2>
   <ul>
    <li>
     <article className="comment">
       <h2 className="comment-user"></h2>
       <p className="comment-content"></p>
       <footer>
         <p className="comment-date">Comentado el <time>01-01-2020</time></p>
       </footer>
     </article>
   </li>
  </ul>
 </section> 
</div>  
```

### 2. Nuestro primer componente

  1. Crear dentro de `src` una carpeta `components`
  2. Crear dentro de `components` una carpeta `Card` 
  3. Crear dentro de `Cards` un archivo `Card.js`
  4. Crear dentro de `Cards.js` crear un componente funcional llamado `Card` (recordar importar la librería React)
  5. Pasar el JSX que estaba en `App.js` al componente `Card`
  6. Exportar el componente `Card`
  7. Dentro de `App.js`, importar el componente `Card` e incluirlo dentro del mismo

### 3. JSX (Contexto)

  1. Dentro del archivo `Card.js`, antes del componente, agregar el siguiente objeto:

```javascript
const ada = {
  firstname: 'Ada',
  lastname: 'Lovelace',
  job: 'Programadora',
  avatarImg: '',
  comment: {
    date: new Date(),
    text: 'React es genial'
  }
}
```

  2. Reemplazar la información hardcodeada en el componente por la información contenida en el objeto `ada`, accediendo a las propiedades correspondientes y alternando entre contexto de JSX y JS para poder visualizarlo correctamente

### 4. Props

  1. Mover el objeto `ada` a `App.js`
  2. Asignarlo a una `prop` `user` del componente `Card`
  3. En el componente `Card`, declarar la `prop` `user` y modificar el componente para que muestre la información necesaria a partir de dicha prop


### Children

### Listas

### Composición

1. Crea un componente `Link` que renderice un elemento `a`, y que tenga la `prop` `to` (url a dónde lleva) y que permita agregar texto dentro de este, por ejemplo:

```jsx
<Link to="/home">Home</Link>
```

Debe generar:

```html
<a href="/home">Home</a>
```

2. Crear un componente `Navbar` que renderice un elemento `header` con un elemento `nav` anidado y un `ul` anidado dentro del `nav`. Dicho componente debe permitir agregar elementos anidados (como hijos), y por cada uno de ellos, agregarlos dentro de `li` al `ul`.

Por ejemplo:

```jsx
<Navbar>
  <Link to="/home">Home</Link>
  <Link to="/about">About</Link>
</Navbar>
```

Debe generar:

```html
<header>
  <nav>
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">Sobre mí</a>
      </li>
    </ul>
  </nav>
</header>
```

4. Crear un componente `Footer` que renderice un elemento `footer` y que permita anidar elementos como hijos dentro de sí.
5. Crear un componente `Main` que renderice un elemento `main` y que permita anidar elementos como hijos dentro de sí.
6. Crear un componente `Title` que renderice un elemento `h1` y que permita anidar elementos como hijos dentro de sí.
7. Crear un componente `Texto` que renderice un elemento `p` y que permita anidar elementos como hijos dentro de sí.
8. Utilizar los componentes creados dentro de `App`, de la siguiente forma:

```jsx
const App = () => (
  <>
    <Navbar>
      <Link to="/home">Home</Link>
      <Link to="/about">Sobre mí</Link>
      <Link to="/contact">Contacto</Link>   
    </Navbar>
    <Main>
      <Title>¡Hola!<Title>
      <Text>¿Qué puedo hacer para ayudarte?<Text>
    </Main>
    <Footer>
      ® 2020 - Todos los derechos reservados
    </Footer>
  </>
)
```

Que debería renderizar lo siguiente:

```html
<header>
  <nav>
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">Sobre mí</a>
      </li>
      <li>
        <a href="/contact">Contacto</a>
      </li>
    </ul>
  </nav>
</header>
<main>
  <h1>¡Hola!</h1>
  <p>¿Qué puedo hacer para ayudarte?</p>
</main>
<footer>
  ® 2020 - Todos los derechos reservados
</footer>  
```
