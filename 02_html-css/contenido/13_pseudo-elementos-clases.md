## Pseudo elementos y Pseudo clases (más selectores)

### Pseudo elementos
* Un pseudo elemento es una forma de seleccionar una parte de un elemento o subset de elementos seleccionado
* Pseudo elementos:
  * ::after: Permite establecer un contenido al final del elemento/s seleccionado/s
  * ::before: Permite establecer un contenido al inicio del elemento/s seleccionado/s
  * ::first-letter: Permite seleccionar la primer letra de un texto
  * ::first-line: Permite seleccionar la primer línea de un texto
  * ::selection: Permite seleccionar la selección que hace el usuario
* Para before y after podemos utilizar la propiedad **content** para establecer un contenido [(MDN)](https://developer.mozilla.org/es/docs/Web/CSS/content)

**Ejemplo:**
```css
p::after {
  content: "?";
}

p::first-letter {
  font-size: 30px;
  color: red;
}

div::selection {
  background-color: pink;
}
```

#### Práctica
[Ejercicio 36](../ejercicios_css/ej36.md)


### Pseudo clases
* Las pseudo clases describen un estado particular de un elemento
* Existe una gran cantidad de pseudo clases y pueden encontrar el listado completo en el sitio de [MDN](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes)
* En este curso vamos a utilizar las siguientes pseudo clases:
  * :active: Selecciona un elemento que esta activo (por ejemplo un link al que le estamos haciendo click)
  * :link: Representa un hipervinculo que no fue visitado
  * :visited: Representa un hipervinculo que fue visitado
  * :hover: Selecciona un elemento al que estamos posicionando el cursor encima
  * :first-child: Representa el primer elemento
  * :last-child: Representa el último elemento
  * :nth-child(): Podemos seleccionar un elemento en cualquier posición nth-child(2).
    * También podemos utilizar los valores **odd** para representar los impares y **even** para los pares

**Ejemplo:**
```css
a:link {
  color: blue;
}

a:visited {
  color: violet;
}

li:first-child {
  color: red;
}

tr:nth-child(odd) {
  background-color: gray;
}
```

#### Práctica
[Ejercicio 37](../ejercicios_css/ej37.md)

## Cursor
* Por medio de la propiedad **cursor** cambiamos la forma en al que se ve el cursor en nuestros documentos/elementos
* Esta propiedad acepta los siguientes valores:
  * **auto:** El browser define como se tiene que ver según el elemento o acción que pueda hacer
  * **crosshair:** Es una cruz como si fuera un selector
  * **default:** Es el cursor por defecto, generalmente es una flecha
  * **pointer:** Es la manito que vemos al hacer click en un elemento
  * **move:** Con este cursor le damos a entender al usuario que puede hacer drag de un elemento ya que son flechas para distintos lados
  * **text:** Es el selector de texto como si queremos escribir en algún input
  * **wait:** Es una forma de decirle al usuario que tiene que esperar que alguna acción se termine
  * **help:** Es un signo de pregunta como podemos ver si queremos ayuda o más información sobre un tema
* Utilizando estos cursores podemos darle a entender al usuario que acción se puede realizar, por ejemplo si ponemos la manito arriba de un elemento el usuario asume que puede hacer click (por ahora sólo es un efecto visual)
* Para saber más de esta propiedad pueden leer el [sitio de MDN](https://developer.mozilla.org/es/docs/Web/CSS/cursor)

**Ejemplo: **
```css
body { cursor: pointer; }
button { cursor: help; }
```

#### Práctica
[Ejercicio 38](../ejercicios_css/ej38.md)
