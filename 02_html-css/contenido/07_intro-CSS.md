## ¿Qué es CSS y para qué sirve?

**CSS** significa **C**ascade **S**tyle **S**heet o hoja de estilo en cascada y nos permite crear reglas que definen propiedades visuales para nuestros elementos.

**Ejemplo de código CSS:**
```CSS
span {
  color: white;
}
```

* En el código de ejemplo definimos que todos los elementos span de nuestro documento/s deben tener la tipografía de color blanco.
* De esta definifición vemos que tenemos una forma de seleccionar elementos y que podemos aplicar una propiedad para modificar la forma en que se ve el contenido de la etiqueta seleccionada.

**Ejemplo de código CSS:**
```CSS

selector {
  nombrepropiedad: valor;
}
```

* En CSS todo el tiempo vamos a estar utilizando estos dos conceptos:
  * Seleccionar elementos
  * Definir como queremos que se vean
* Según como utilizemos CSS podemos definir como se ve un elemento, un documento o todo nuestro sitio


**IMPORTANTE**
* Una herramienta muy útil a la hora de trabajar con CSS y JavaScript es la [Devtools de Chrome](https://developers.google.com/web/tools/chrome-devtools)

## ¿Cómo seleccionar elementos y definir el color de texto?

### Color de texto
* Por medio de la propiedad **color** podemos establecer el color de tipografía que tiene un elemento
* Esta propiedad **color** acepta un color como valor, dentro de las opciones puede ser:
  * Nombre de color en ingles (white, red, blue, yellow, gray, etc)
  * Color en formato RGB (rgb(0,0,0)) donde cada valor va de 0 a 255 siendo 0 el apagado y 255 prendido
  * [Color Hexadecimal](http://www.blogoff.es/2008/11/19/colores-en-hexadecimal-una-introduccion/)
* Para saber más pueden visitar el [sitio de MDN](https://developer.chrome.com/devtools/docs/elements-styles)

### Selector básico por tipo de elemento
* Utilizando el selector por tipo de elemento podemos agrupar la forma de aplicar estilos a los elementos según el nombre de su etiqueta
* Este es un selector general ya que va a seleccionar **TODOS** los elementos del mismo tipo

**Ejemplo:**
```css
  p {
    color: blue;
  }

  div {
    color: rgb(255, 0, 0);
  }

  span {
    color: #00FF00;
  }
```

```html
<p>Texto en color azul</p>
<p>Texto en color azul y <span>verde</span></p>
<div>Texto en color rojo</div>
<div>Texto en color rojo y <span>verde</span></div>
<span>Texto en color verde</span>
```