## Modelo de Caja
* Podemos pensar los elementos de HTML como una caja
* Este concepto se conoce como box model

![Box Model](https://file-btoblsulhf.now.sh/)

* **content:** es el contenido del elemento, por ejemplo un texto u otros elementos
* **padding:** es un margen interno entre el borde y el contenido, podemos establecer diferentes valores para la parte superior, inferior, izquierda y derecha
* **border:** es el borde de la caja y se le pueden aplicar diferentes estilo
* **margin:** es el margen externo de la caja, podemos establecer diferentes valores para la parte superior, inferior, izquierda y derecha

* En HTML existen elementos del tipo en bloque (block) y en linea (inline)
* Estos tipos de elementos se diferencian en la forma que se comportan y como se aplican los atributos de la caja
* Los elementos en linea por ejemplo ignoran los márgenes superiror e inferior pero si aplica los de izquierda y derecha
* También los elementos en linea ignoran las propiedades de ancho y alto (lo vemos más adelante)

**IMPORTANTE**
* Para calcular el ancho de un elemento tenemos que tener en cuenta:
  * Ancho del elemento
  * Espacio asignado para padding (margen interno)
  * Ancho del borde
  * Espacio asignado a los márgines
* Sumando todos estos valores obtenemos el ancho real de los elementos
* Algunos browsers viejos manejaban el modelo de la caja de otra forma y esto traía inconpatibilidad entre ellos

### Color de fondo
* La propiedad **background-color** nos permite establecer un color de fondo
* Podemos utilizar esta propiedad para nuestros diseños y también resaltar la caja de un elemento
* Acepta un color como valor (cualquiera de los que vimos)

**Ejemplo:**
```css
div {
  background-color: #eee;
}
```

* En este ejemplo establecemos que todos los divs tengan un color de fondo gris claro
* También existe el color **transparent** que es el valor por default

**Ejemplo:**
```css
div {
  background-color: transparent;
}
```

#### Práctica
[Ejercicio 19](../ejercicios_css/ej19.md)

### Ancho y Alto
* Por medio de las propiedades **width** y **height** podemos establecer el ancho y alto de la caja
* Acepta medidas en px, % o ems

**Ejemplo:**
```css
div {
  width: 200px;
  height: 200px;
}
```

* En el ejemplo anterior establecemos el alto y el ancho de la caja en 200px es decir que estamos haciendo un cuadrado
* También podemos establecer valores mínimos o máximos para un elemento
* Utilizamos min-width y max-width para establecer el mínimo y máximo ancho de la caja
* Podemos hacer lo mismo con el alto utilizando min-height y max-height para establecer el mínimo y máximo alto de la caja

**Ejemplo:**
```css
div {
  min-height: 100px;
  min-width: 100px;
}
```

* En el ejemplo anterior establecemos que mínmo alto y ancho de una caja
* En caso de necesitar ser más grande la caja se va a agrandar pero nunca va a ser menor a 100px

#### Práctica
[Ejercicio 20](../ejercicios_css/ej20.md)

### Contenido Extra
* Existe una propiedad llamada **overflow** que nos permite manejar como se debe comportar el contenido extra de nuestro sitio
* Muchas veces el browser no sabe como cortar un texto y simplemente se ve mal
* Esta propiedad acepta los valores **hidden** y **scroll**
* Con hidden ocultamos el contenido extra
* Con scroll permitimos que el usuario pueda scrollear el contenido

**Ejemplo:**
```css
div {
  overflow: scroll;
}
```

#### Práctica
[Ejercicio 21](../ejercicios_css/ej21.md)

### Bordes:
* Por medio de la propiedad border podemos establecer el borde de la caja
* Acepta como valores:
  * Primero el ancho: utiliza medidas en pixeles o cualquiera de las otras medidas vistas
  * Segundo parámetro: es el estilo de borde que queremos
  * Tercer parámetro: es el color del borde

**Ejemeplo:**
```css
div {
  border: 1px solid red;
}
```

* Cada uno de estos valores se pueden establecer de forma indiviudal:
* Para el ancho utilizamos border-width
* Para el diseño utilizamos border-style
* PAra el color utilizamos border-color

**Ejemplo:**
```css
div {
  border-width: 1px;
  border-style: solid;
  border-color: red;
}
```

* Es lo mismo si utilizo la propiedad borde o la sumatoria de las otras propiedades (border-width, style y color)
* Para los estilos de los bordes existen los siguientes valores:
  * solid
  * dotted
  * dashed
  * double
  * groove
  * ridge
  * inset
  * outset

* También podemos establecer los bordes de manera individual (top right bottom left)
* Por ejemplo para establecer los anchos del borde podemos utilizar las siguientes propiedades:
  * border-top-width
  * border-right-width
  * border-bottom-width
  * border-left-width
* también podemos establecer valores indivduales utilizando una sola propiedad con muchos valores:
* border-width: top right bottom left;

**Ejemplo:**
```css
div {
  border-width: 2px 1px 1px 2px;
}
```

* En este caso estamos estableciendo:
  * 2px para el borde superior (top)
  * 1px para el borde derecho (right)
  * 1px para el borde inferior (bottom)
  * 2px para el borde de la izquierda (left)

* Si queremos el mismo valor para el borde superior e inferior y derecha e izquierda podemos utilizar solo dos valores:
* border-width: top/bottom right/left;
* border-width: 2px 1px;
* Es decir que establecemos 2px para el borde superior e inferior y 1px para el borde derecho e izquierdo

* El border style funciona de la misma forma:
  * border-top-style
  * border-left-style
  * border-right-style
  * border-bottom-style
* También podemos establecer 4 valores en el mismo orden que los anteriores utilizando la propiedad border-style

* También podemos establecer un color de borde para cada uno de ellos:
  * border-top-color
  * border-right-color
  * border-bottom-color
  * border-left-color

* También podemos establecer todos los valores del borde utilizando la propiedad **border**
* Los valores que espera son: border-width border-style border-color

**Ejemplo:**
```css
div {
  border: 1px solid red;
}
```

#### Práctica
[Ejercicio 22](../ejercicios_css/ej22.md)

### Aire interno de la caja
* Por medio de la propiedad **padding** podemos establecer un márgen interno de la caja
* Este concepto establece un aire interno a la caja
* Acepta distintos tipos de medida
* Al utilizar la propiedad **padding** con un sólo valor estamos estableciendo todos los lados iguales (top, right, bottom y left)

**Ejemplo:**
```css
div {
  padding: 20px
}
```

* También lo podemos establecer para cada uno de los lados de forma individual:
  * padding-top
  * padding-bottom
  * padding-left
  * padding-right

**Ejemplo:**
```css
div {
  padding-top: 20px;
  padding-bottom: 25px;
  padding-left: 30px;
  padding-right: 40px;
}
```

* Otra opción para hacer esto es utilizar 4 o 2 valores al igual que lo hizimos con los bordes
  * padding: top/bottom right/left;
  * padding: 10px 20px;
  * padding: top right bottom left;
  * padding: 10px 15px 12px 25px;

**Ejemplo:**
```css
div {
  padding: 20px 40px 25px 30px;
}
```

**Ejemplo:**
```css
div {
  padding: 20px 40px;
}
```

#### Práctica
[Ejercicio 23](../ejercicios_css/ej23.md)


### Márgenes
* Por medio de la propiedad **margin** podemos establecer el márgen de la caja
* Esta propiedad soporta cualquier unidad de medida (px, em, %)
* El márgen es exterior al los elementos y comienza luego del border
* Nos permite distanciar elementos entre sí
* Si establecemos un color de fondo y un márgen no se va a ver más color de fondo como con el padding ya que el márgen es externo
* Los valores funcionan igual que en el padding
  * Un solo valor establece todos los márgenes iguales
  * Podemos establecer 2 valores en caso de que queremos el mísmo valor para top/bottom y left/right
  * Podemos establecer 4 valores en caso de querer utilizar la propiedad **margin** para establecer valores individuales para cada márgen
    * Esta forma de escribir los márgenes también va en sentido de las agujas del reloj: top right bottom left

**Ejemplo:**
```css
div {
  margin: 20px;
}
```

**Ejemplo:**
```css
div {
  margin: 20px 30px;
}
```

**Ejemplo:**
```css
div {
  margin: 20px 30px 35px 40px;
}
```

* También podemos establecer los márgenes de forma individual solamente utilizando las siguientes propiedades:
  * margin-top
  * margin-bottom
  * margin-left
  * margin-right

**Ejemplo:**
```css
div {
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 35px;
  margin-left: 40px;
}
```

#### Práctica
[Ejercicio 24](../ejercicios_css/ej24.md)

* Podemos establecer el valor **auto** para que el browser establezca el valor de forma automática
* Utilizando este valor para los márgenes izquierda y derecha más establecer un valor de ancho de caja podemos centrar un elemento

**Ejemplo:**
```css
div {
  width: 500px;
  margin: 0 auto;
}
```

* En el ejemplo anterior establecemos lo siguiente:
  * El márgen top/bottom en 0 establece que esa caja no tiene márgenes superior e inferior
  * El márgen lef/right en **auto** establece que esa caja tiene que tener estos márgenes en automático
  * El ancho de la caja es de 500px
  * Al hacer toda esta combinación de propiedades logramos centrar de forma horizontal
  * Esta técnica funciona bien con los elementos en bloque
* Recordemos que para centrar un elemento inline podemos establecer la propiedad **text-align:center** al padre del elemento que queremos centrar de forma horizontal

#### Práctica
[Ejercicio 25](../ejercicios_css/ej25.md)

### Sombra
* Utilizando la propiedad **box-shadow** establecemos una sombra a la caja
* funciona de la misma forma que la sombra del texto pero sobre la caja
* Acepta los siguientes valores: offset-x offset-y blur-radius spread-radius color
* Esta propiedad acepta valores negativos

**Ejemplo:**
```css
div {
  box-shadow: 1px 2px 5px -3px #aaa;
}
```

* En el ejemplo anterior establecemos los siguientes valores de sombra de la caja:
  * 1 px de offset-x
  * 2 px de offset-y
  * 5 px de blur-radius
  * -3px spread-radius
  * Color de sombra #aaa (un gris oscuro)

* Para ver como funciona esta propiedad podemos utilizar la [siguiente herramienta](http://www.cssmatic.com/es/box-shadow)

#### Práctica
[Ejercicio 26](../ejercicios_css/ej26.md)


* También podemos establecer que la sombra es interna a la caja si utilizamos el valor **inset** como primer valor
* En caso de no establecer este valor el browser asimila que la sombra es externa a la caja
* El resto de los valores sigue funcionando igual sólo que se desplazan un lugar

**Ejemplo:**
```css
div {
  box-shadow: inset 1px 2px 5px -3px #aaa;
}
```

#### Práctica
[Ejercicio 27](../ejercicios_css/ej27.md)

### Cambiar la forma en la que se comporta un elemento
* Utilizando la propiedad **display** podemos cambiar la forma en que se comportan los elementos
* Podemos cambiar un elmento en bloque para que se comporte como uno en línea y viceversa
* Esta propiedad soporta los siguientes valores:
  * **inline:** Establece que este elemento es en línea
  * **block:** Establece que este elemento es en bloque
  * **inline-block:** Establece que este elemento se comporte como en línea pero con propiedades de caja como si fuera en bloque
  * **none:** Este elemento no se ve pero tampoco pertenece al documento, es como si no existiera. Si vemos el código fuente vamos a ver que el elemento existe sólo que el browser lo ignora
  * **hidden:** Oculta un elemento pero sigue siendo parte del documento
  * **visible:** Establecemos que este elemento tiene que ser visible

#### Práctica
[Ejercicio 28](../ejercicios_css/ej28.md)

### Borders redondeados
* Por medio de la propiedad **border-radius** podemos establecer bordes redondeados
* Acepta valores numéricos
* NO acepta valores negativos
* Esta propiedad acepta dos valores:
  * **Largo**
  * **Porcentage**
* Para probar distintos valores y ver como queda podemos utilizar el [siguiente generador](http://border-radius.com/)
* Para enteder más sobre cómo funciona esta propiedad pueden consultar el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/CSS/border-radius)

**Ejemplo:**
```css
div {
  border: 1px solid red;
  border-radius: 40px 50px;
}
```

* También podemos establecer un valor individual para cada uno de las esquinas:
  * border-top-right-radius
  * border-top-left-radius
  * border-bottom-right-radius
  * border-bottom-left-radius

**Ejemplo:**
```css
div {
  border: 1px solid red;
  border-top-right-radius: 40px 50px;
  border-top-left-radius: 50px 30px;
}
```

#### Práctica
[Ejercicio 29](../ejercicios_css/ej29.md)

### Imágen de fondo
* Existen algunas propiedades que nos permiten utilizar imagenes como fondo de la caja
* Por medio de la propiedad **background-image** podemos establecer una o varias imagenes de fondo
* Acepta como valor la ruta de una imagen
* Para poder establecer el valor de la ruta de la imagen utilizamos la función **url()**
* Las rutas de las imagenes pueden ser relativas o absoultas
* Hasta ahora vimos como establecer el color de fondo utilizando la propiedad **background-color**
* Para saber más sobre esta propiedad podemos entrar en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/CSS/background-image)

**Ejemplo:**
```css
div {
  background-image: url(/path/a/la/imagen.png);
}
```

* Para establecer más de una imagen establecemos valores separados por coma

**Ejemplo:*
```css
div {
  background-image: url(/path/a/la/imagen1.png), url(/path/a/la/imagen2.png);
}
```

#### Práctica
[Ejercicio 30](../ejercicios_css/ej30.md)

### Repetir el fondo

* Por defecto la imagen que establecemos como fondo se va a repetir tantas veces como pueda
* Para controlar la forma en que se repite la imagen de fondo utilizamos la propiedad **background-repeat**
* Esta propiedad acepta los siguientes valores:
  * repeat: es el valor por default y repite la imagen todo lo que puede tanto en el eje x como en el y
  * repeat-x: repite la imagen sólo en el eje x
  * repeat-y: repite la imagen sólo en el eje y
  * no-repeat: no repite la imagen, es decir que se muestra tan solo una vez
* Para saber más sobre esta propiedad podemos entrar en el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/CSS/background-repeat)

**Ejemplo:**
```css
div {
  background-image: url(/path/a/la/imagen.png);
  background-repeat: no-repeat;
}
```

#### Práctica
[Ejercicio 31](../ejercicios_css/ej31.md)

* Es importante recordar que trabajar con imagenes muchas veces es más fácil si lo hacemos en la medida que necesitamos
* Dado que el browser tiene que descargar cada foto de manera individual también conviene tener estas imagenes optimizadas para que pesen menos

### Posicionar el fondo
* Por defecto la imagen de fondo se posiciona en el borde izquierdo superior del fondo
* Podemos cambiar la posición de la imagen de fondo utilizamos la propiedad **background-position**
* Esta propiedad acepta los siguientes valores:
  * El primer valor especifíca el eje x y tiene los siguientes valores:
    * Unidad de medida (puede ser %, px, em)
    * left
    * center
    * right
  * El segundo valor especifíca el eje y tiene los siguientes valores:
    * Unidad de medida (puede ser %, px, em)
    * top
    * center
    * bottom

**Ejemplo:**
```css
  /* Posicionamos la imagen a 10px a la derecha y 20px hacia abajo de la esquina izquierda superior */
  div {
    background-position: 10px 20px;
  }

  /* Posiciona la imagen al centro (entre izquierda y derecha) y en el borde inferior de la caja */
  section {
    background-position: center bottom;
  }
```

* Podemos ver como combiar distintos valores para posicionar las imagenes de fondo:
  * left top
  * left center
  * left bottom
  * center top
  * center center
  * center bottom
  * right top
  * right center
  * right bottom

#### Práctica
[Ejercicio 32](../ejercicios_css/ej32.md)

### Fijar el fondo:
* Por medio de la propiedad **background-attachment** podemos establecer si queremos fijar o escrolear el fondo según el valor seleccionado:
  * fixed: la imagen se queda fija y el resto del documento parece como si flota sobre la imagen de fondo, esto pasa ya que al establecer esta propiedad en scroll la imagen de fondo se scrollea con el resto del documento.
  * scroll: la imagen sube y baja según el usuario scrolea

**Ejemplo:**
```css
div {
  background-image: url(foto.png);
  background-attachment: fixed;
}

div.scroll {
  background-image: url(foto.png);
  background-attachment: scroll;
}
```

#### Práctica
[Ejercicio 33](../ejercicios_css/ej33.md)

### Establecer todos los valores juntos:
* Por medio de la propiedad **background** podemos establecer todos los valores en una sola propiedad respetando el siguiente orden:
  * background-color
  * background-image
  * background-repeat
  * background-attachment
  * background-position

**Ejemplo:**
```css
div {
  background: red url(foto.png) no-repeat fixed center center
}
```

#### Práctica
[Ejercicio 34](../ejercicios_css/ej34.md)

### Color de fondo con gradiente
* Para establecer un degradado utilizamos la propiedad **linear-gradient**
* Esta propiedad acepta los siguientes valores:
  * Angulo: Establece el angulo que queremos utilizar, ejemplo: 60deg
  * Primer color: Establece cual va a ser el primer color, ejemplo: blue,
  * Segundo color: Establece cual va a ser el segundo color, ejemplo: green

**Ejemplo:**
```css
div {
  background: linear-gradient( 60deg, blue, green );
}
```

#### Práctica
[Ejercicio 35](../ejercicios_css/ej35.md)