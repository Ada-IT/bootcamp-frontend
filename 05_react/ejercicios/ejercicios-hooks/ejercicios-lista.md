# Ejercicios borrador

### 1. Intro JSX

En `App.js` agregar el JSX necesario para crear un componente similar al siguiente (card). Agregar los estilos en `styles.css`, dentro de la carpeta `public`

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
