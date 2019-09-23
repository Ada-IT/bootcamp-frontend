## Listas

### Diseño de listas
* Por medio de la propiedad **list-style-type** podemos establecer que diseño tiene la lista
* Para listas desordenadas podemos utilizar:
  * none
  * disc
  * circle
  * square
* Para listas ordenadas:
  * decimal
  * decimal-leading-zero
  * lower-alpha
  * upper-alpha
  * lower-roman
  * upper-roman

**Ejemplo:**
```css
ul {
  list-style-type: none;
}

ol {
  list-style-type: decimal-leading-zero;
}
```

* De esta forma cambiamos la forma en que se ven las listas

### Posicionamiento
* También podemos definir la posición donde queremos posicionar el diseño/dibujo de la tabla
* Para esto tenemos la propiedad **list-style-position** que acepta 2 valores:
  * **outside:** Es la posición normal que tienen las listas
  * **inside:** Establece que el diseño tiene que ser parte del elemento li y se ve dentro de él

**Ejemplo:**
```css
ul {
  list-style-position: inside;
}

ol {
  list-style-position: inside;
}
```

### Imagenes
* Podemos establecer como diseño una imagen por medio de la propiedad **list-style-image**
* Acepta como valor una ruta de una imagen por medio de la funci´øn **url(imagen.png)**

**Ejemplo:**
```css
ul {
  list-style-image: url("garfield.png");
}
```

### Todo junto
* Podemos escribir todas estas propiedades utilizando la propiedad **list-style**
* El orden de los valores es: list-style: list-style-type list-style-position list-style-image

**Ejemplo:**
```css
ul {
  list-style: square inside;
}
ol {
  list-style: upper-roman outside;
}
```

#### Práctica
[Ejercicio 39](../ejercicios_css/ej39.md)

## Tablas
* Para las tablas podemos utilizar muchas de las propiedades que ya vimos como border, width, padding, height, background-color, margin, etc
* Nos quedan por conocer algunas propiedades que nos permiten modificar los bordes y como se comportan en las tablas
* Estas propiedades son: **border-spacing** y **border-collapse**

### Espaciado de borde
* Por medio de la propiedad **border-spacing** podemos establecer la distancia que tienen que tener los bordes entre si, esto va a dar más espacio exterior entre las celdas
* Acepta un valor para todos los lados
* Acepta dos valores siendo el primero el valor horizontal y el segundo el vertical
* Para saber más sobre esta propiedad pueden entrar en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/CSS/border-spacing)

**Ejemplo:**
```css
table {
  border-spacing: 10px 20px;
}
```

#### Práctica
[Ejercicio 40](../ejercicios_css/ej40.md)

### Agrupar Bordes
* Por medio de la propiedad **border-collapse** podemos establecer los siguientes comportamientos de la tabla y sus bordes:
* **collapse:** Los bordes son colapsados en un solo borde, es decir que no se pueden distanciar usando la propiedad **border-spacing**
* **separate:** Los bordes están sueltos por lo cual los podemos distanciar unos con otros

#### Práctica
[Ejercicio 41](../ejercicios_css/ej41.md)

## Forms
* Los formularios y los inpusts tienen las mismas propiedades que vimos hasta el momento

#### Práctica
[Ejercicio 42](../ejercicios_css/ej42.md)

#### Práctica Especial Sitio 01
[Ejercicio 43](../ejercicios_css/ej43.md)
