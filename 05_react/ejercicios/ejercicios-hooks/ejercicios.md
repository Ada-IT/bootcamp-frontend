# Ejercicios React 

## Nuestro primer componente

  1. Crear dentro de `src` una carpeta `components`
  2. Crear dentro de `components` una carpeta `Post` 
  3. Crear dentro de `Post` un archivo `Post.js`
  4. Crear dentro de `Post.js` crear un componente funcional llamado `Post` (recordar importar la librería React)
  5. Pasar el JSX que estaba en `App.js` al componente `Post`
  6. Exportar el componente `Post`
  7. Dentro de `App.js`, importar el componente `Post` e incluirlo dentro del mismo

**[Link ejercicio](https://codesandbox.io/s/react-ejercicio-1-8mn6y)**

---

## JSX

  1. Reemplazar la información hardcodeada previamente en el componente `Post` por la información contenida en el objeto `postInfo`, accediendo a las propiedades del objeto correspondientes y agregándolas donde vayan, alternando entre contexto de JSX y JS para poder visualizarlo correctamente
  2. Para la fecha de publicación, crear una función `formatDate` en el mismo archivo (fuera del componente), que tome un objeto `Date` como argumento y devuelva un `string` con la fecha formateada. Utilizar dicha función para renderizar la fecha dentro del componente.
  3. Poner la función dentro de un archivo `index.js` en una carpeta `utils`, en la misma jerarquía que `components`, exportarla como variable nombrada e importarla en `Post`

**[Link ejercicio](https://codesandbox.io/s/react-ejercicio-2-05rr7)**

---

## Props

  1. Mover el objeto `postInfo` a `App.js`
  2. Asignar cada una de sus propiedades como `props` del componente `Post`
  3. En el componente `Post`, desestructurar los props y asignarlos donde corresponde

**[Link ejercicio](https://codesandbox.io/s/react-ejercicio-3-ug57d)**

---

## Props Types

  1. Agregar la dependencia `prop-types`
  2. Agregar las definiciones de `prop-types` para las `props` del componente `Post`

**[Link ejercicio](https://codesandbox.io/s/react-ejercicio-4-7s38w)**

---

## Dividiendo en components

  1. Dividir `Post` en dos componentes: `PostAuthor` y `PostContent`. Para eso:
  2. Crear las carpetas y los archivos necesarios
  3. En cada archivo crear el componente correspondiente y exportarlo 
  4. Pasarle el `JSX` actual en `Post` a dichos componentes según corresponda
  5. Declarar los `props` y las definiciones de `propTypes` necesarias en cada componente
  6. Importar los componentes en `Post` y agregarlos dentro de mismo
  7. Pasarles los `props` que correspondan

**[Link ejercicio](https://codesandbox.io/s/react-ejercicio-5-wtr49)**

---

## Children y composición

  1. Cambiar los `props` y `propTypes` del componente `Post` para que reciba `children` (elementos anidados), y agregar `children` dentro del componente, donde debería renderizarse
  2. Mover los componentes `PostInfo` y `PostContent` utilizados en `Post` a `App`, e incluirlos anidados dentro del componente `Post` ahí utilizado
  3. Corregir los datos pasados a los `props` que utiliza para que se renderice correctamente

**[Link ejercicio](https://codesandbox.io/s/react-ejercicio-6-children-y-composicion-dvkiu)**

--- 

## Agregando componentes

  1. Crea dos componentes, `Comments` y `Comment`
  2. `Comment` que debe contener un `article` con clase `comment`, el cual debe tener anidado un componente `PostInfo` y un elemento `p` que contenga el texto del comentario, con la clase `comment-content`. Importar `PostInfo` con el nombre de `CommentInfo`.
  3. Agregar a `Comment` los `props` y `propTypes` que correspondan
  4. `Comments` debe contener un `section` con la clase `comments`, un `h2` con el texto "Comentarios" y la clase "comments-title", y un componente `Comment`. Pasarle al componente `Comment` los props necesarios con datos cualquiera para que se renderice.
  5. Agregar `Comments` a `App.js`, dentro del componente `Post`

**[Link ejercicio](https://codesandbox.io/s/react-ejercicio-7-agregando-componentes-7052e)**

--- 
  
## Listas

  1. Pasar el objeto `postInfo` a un archivo del mismo nombre, ubicado en el mismo nivel que `App.js`, exportarlo e importarlo en `App.js`
  2. Agregar a `Comments` un `prop` llamado `comments`
  3. Pasar la propiedad `comments` (que contiene el array con comentarios) de `postInfo` como `prop` al componente `Comments`
  4. En `Comments`, después de `comments-title`, agregar un `ul` con clase `comments-list`
  5. Dentro del `ul`, iterar sobre la `prop` `comments`, y por cada item, mapear el componente `Comment` dentro de un `li` con clase `comment-item`, pasándole las `props` correspondiente

**[Link ejercicio](https://codesandbox.io/s/react-ejercicio-8-listas-5g11r)**
