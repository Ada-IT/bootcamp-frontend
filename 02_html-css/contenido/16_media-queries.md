## Media Queries
* Por medio de Media Query podemos establecer atributos visuales dependiendo del tipo de dispositivo que esta viendo el documento
* Varios de las librerías o framworks de vista que mencionamos (boostrap o foundation) ya vienen preparado para soportar este tipo de detección y adaptarse de la mejor forma
* Utilizamos **@media** para establecer que vamos a detectar un tipo de dispositivo
* También podemos agregar condicionales para detectar distintos tipos de dispositivos
* Pueden leer más en el [sitio de MDN](https://developer.mozilla.org/es/docs/CSS/Media_queries)

**Ejemplo:**
```css
@media (max-width: 600px) {
  p {
    color: red;
  }
}
```

* Se pueden agregar más condicionales utilizando la palabra reservada **and**

**Ejemplo:**
```css
@media (min-width: 200px) and (max-width: 600px) {
  .rojo {
    color: red;
  }
}
```

* Otra de las opciones es detectar la posición del dispositivo para saber si esta en formato vertical u horizontal
* Utilizamos la propiedad orientation y los valores **landscape** o **portrait**
* Pueden leer más sobre esto en el [sitio de MDN(inglés)](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

**Ejemplo:**
```css
@media (max-width: 600px) and (orientation: portrait) {
  .rojo {
    color: red;
  }
}
```

* Para trabajar con celulares u otros dispositivos es posible que tengamos que agregar el siguiente encabezado
* Pueden leer más sobre este tema en el [siguiente sitio (en inglés)](https://css-tricks.com/snippets/html/responsive-meta-tag)

**Ejemplo:**
```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

* Con las [developers tools](https://developers.google.com/web/tools/chrome-devtools/device-mode) podemos probar diferentes dispositivos

#### Práctica
[Ejercicio 49](../ejercicios_css/ej49.md)

### Flexbox
* Próxima sección de Flexbox

#### Práctica Especial Sitio 02
[Sitio 02](../ejercicios_css/sitio02.md)