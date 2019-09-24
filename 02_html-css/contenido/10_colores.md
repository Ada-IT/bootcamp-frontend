## Colores
* Los colores en las computadoras están compuestos por 3 colores básicos llamados RGB que vienen de **R**ed, **G**reen y **B**lue, es decir Rojo, Verde y Azul
* Los monitores estan compuestos de píxeles que son como pequeñas lucecitas que pueden mostrar estos colores
* Cuando la luz esta **apagada** obtenemos el color **negro**
* Cuando la luz está en su **máxima intensidad en todos los colores** obtenemos el color **blanco**
* Existen diferentes sistemas para especificar un color:
  * Colores por nombre
  * RGB
  * HEXA
  * HUE

![Colores](https://file-ulyttqkltc.now.sh/)

### Nombre de color
* Existen nombres de colores que podemos utilizar directamente y el browser sabe como mostrarlos
* La lista de colores que podemos utilizar no es muy extensa por lo cual nos limita a la hora de elegir un color
* El nombre del color es en inglés (ejemplo: white/blanco)
* Son fáciles de utilizar
* En cada nueva versión de CSS se agregan más colores
* Ejemplos de colores: **white, silver, gray, black, red, blue, green, orange, pink, brown and yellow**

**Ejemplo:**
```css
body { color: black; }

p { color: gray; }

a { color: orange; }
```

[Lista de colores según versión de CSS](https://developer.mozilla.org/es/docs/Web/CSS/color_value)

### RGB
* Para este color utilizamos la función de CSS llamada **rgb**
* Podemos asignar un valor entre 0 y 255 a cada color
* Si todos los valores son 0 obtenemos el color negro
* Si todos los valores son 255 obtenemos el color blanco
* El orden de los colores es el especificado en el nombre, es decir que el primer valor es para rojo, el segundo para verde y el tercero para azul
* Ejemplos:
  * rojo: rgb(255, 0, 0)
  * verde: rgb(0, 255, 0)
  * azul: rgb(0, 0, 255)

**Ejemplo:**
```css
body {
  /* color negro */
  color: rgb(0, 0, 0);
}

p {
  /* color verde */
  color: rgb(0, 255, 0);
}
```

* Existe otra forma de utilizar rgb en CSS y es por medio de la función rgba() que agrega un canal más de transparencia
* Podemos asignar un valor entre 0 y 1 para el nivel de transparencia
* Se asigna como cuarto parámetro de la función

**Ejemplo:**
```css
body {
  /* color rojo */
  color: rgba(255, 0, 0, 1);
}

p {
  /* color rojo más transparente */
  color: rgba(255, 0, 0, 0.4);
}
```

### HEXA
* El sistema de HEXA representa los colores en Hexadecimal
* El color arranca con un numeral (#)
* Tenemos valores del 0 a la letra F
* Los números van del 0 al 9
* Continúan desde la letra A hasta la F
* Asignamos un par de letras para cada color del RGB
* Los dos primeros caracteres son para el rojo
* Los dos del medio son para el verde
* Los dos últimos son para el azul
* Si todos los valores son 0 tenemos el color negro (todo apagado)
* Si todos los valores son F tenemos el color blanco (todo prendido)
* Ejemplos:
  * blanco: #FFFFFF
  * negro: #000000
  * rojo: #FF0000
  * verde: #00FF00
  * azul: #0000FF

**Ejemplo:**
```css
body {
  color: #FFFFFF;
}

p {
  color: #FF0000;
}
```

* En caso de que las dos letras del mismo color se repitan podemos utilizar una sola, por ejemplo para blanco puede ser #FFF o negro #000

**Ejemplo:**
```css
body {
  color: #FFF;
}
```

### HSL
* Este sistema hace referencia a **H**ue, **S**aturation and **I**ntensity, es decir Matiz, Saturación e Intensidad
* Podemos establecer un valor entre 0 y 360 para el HUE según el color que queremos
![HUE](https://file-xpfmnfmxjn.now.sh/)
* Tanto saturación como intensidad aceptan un valor que va de 0 a 100%
* Ejemplo:
  * negro: hsl(0, 0%, 0%)
  * blanco: hsl(0, 0%, 100%)
  * rojo: hsl(0, 100%, 50%)

[Calculador de HSL](https://www.w3schools.com/colors/colors_hsl.asp)
[Más sobre HUE)](https://es.wikipedia.org/wiki/Tono_(color))
[Más sobre HSL](https://es.wikipedia.org/wiki/Modelo_de_color_HSL)
[Teoría del color](https://www.lomejordewp.com/teoria-color-diseno-web/)

* En este sistema también contramos la función con alpha que funciona de la misma manera que el rgba.
* El cuarto valor acepta un número entre 0 y 1 para el nivel de transparencia que queremos
* Ejemplo: gris con transparencia: hsla(0, 100%, 100%, 0.5);}
