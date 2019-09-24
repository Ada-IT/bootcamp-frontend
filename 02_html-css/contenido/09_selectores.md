## Selectores
* Un selector es la forma en la que elegimos a que elementos queremos asignarle atributos visuales con CSS
* Los selectores pueden ser generales o particulares, es decír que puedo seleccionar varios elementos o tan solo uno y de forma muy particular
* Podemos utilizar un solo selector de la siguiente:

**Ejemplo:**
```css
selector {
  // código CSS
  // código CSS
  // código CSS
}
```

* Podemos utilizar más de un selector separados por coma:

**Ejemplo:**
```css
selector1, selector2 {
  // código CSS
  // código CSS
  // código CSS
}
```

### Tipo de etiqueta
* Es el selector que venimos utilizando en todos los ejemplos anteriores
* El selector por **tipo de etiqueta** nos permite elegir elementos por el **nombre de la etiqueta**
* Este tipo de selector retorna una colección de elementos ya que selecciona **todos** los elementos con el mismo nombre de etiqueta
* Por ejemplo podemos seleccionar los elementos p y h1 y definir que el color de texto sea blanco

**Ejemplo:**
```css
p {
  color: white;
}

h1 {
  color: white;
}
```

* Dado que ambos elementos se van a ver de la misma forma podemos escribir los selectores de la siguiente forma:

**Ejemplo:**
```css
p, h1 {
  color: white;
}
```

#### Práctica
[Ejercicio 5](../ejercicios_css/ej5.md)

### Selector universal
* Por medio del selector asterisco (*) podemos seleccionar todos los elementos
* Este selector se utiliza muchas veces para borrar estilos que vienen predefinidos en el browser

**Ejemplo:**
```css
* {
  color: white;
}
```

### Selector por clase
* Los elementos HTML tiene un atributo **class** que nos permite asignarles un nombre de clase
* En CSS podemos seleccionar los elementos por nombre de clase utilizando un punto y el nombre de la clase
* Este selector afecta a todos los elementos que tengan el nombre de clase seleccionado

**Ejemplo:**

En CSS:
```css
.rojo {
  color: red;
}
```

En HTML:
```html
<p class="rojo">Este texto es ROJO</p>
```

* Podemos hacer un selector más particular si queremos seleccionar sólo algunos elementos que tengan una determinada clase
* Si queremos seleccionar sólo los títulos H1 que tienen una clase rojo podemos hacerlo de la siguiente forma:

**Ejemplo:**

En CSS:
```css
h1.rojo {
  color: red;
}
```

En HTML:
```html
<h1 class="rojo">Este texto es ROJO</h1>
<p class"rojo">Este texto es NEGRO</p>
```

* Este último selector sólo selecciona los elementos del tipo h1 que tienen la clase rojo

### Selector por ID
* Los elementos HTML tienen un atributo ID que nos permite seleccionarlos de forma única
* Con CSS podemos seleccionar los elementos por ID utilizando el símbolo de numeral (#) y el nombre del ID del elemento
* Este es un selector individual ya que solo modifica un solo elemento
* Si queremos seleccionar el elemento que tiene el ID principial y establecer el texto en azul lo podemos hacer de la siguiente manera:

**Ejemplo:**

En CSS:
```css
#principal {
  color: blue;
}
```

En HTML:
```html
<div id="principal">Contenido de mi div en AZUL</div>
```

#### Práctica
[Ejercicio 6](../ejercicios_css/ej6.md)

## Hijos
* Podemos seleccionar los elementos que sólo son hijos directos de un elemento
* Utilizamos el símbolo mayor que (>) para elegir a a los hijos de un elemento

**Ejemplo:**
```css
div > p {
  color: red;
}
```
```html
<p>Texto de color negro</p>
<div>
  <p>Texto de color ROJO</p>
  <p>Texto de color ROJO</p>
  <h1>Texto de color negro</h1>
</div>
```

* En el ejemplo anterior vemos como podemos seleccionar sólo los párrafos que son hijos de un elemento div

#### Práctica
[Ejercicio 7](../ejercicios_css/ej7.md)

## Selector descendiente
* El selector descendiente permite seleccionar cualquier elemento

#### Práctica
[Ejercicio 8](../ejercicios_css/ej8.md)

* Ahora que sabemos varios selectores podemos ver más propiedades de CSS
* Existen más selectores y los vamos a seguir viendo más adelante
