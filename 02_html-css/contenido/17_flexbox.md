## Flexbox
El módulo flexbox de **CSS** es una nueva forma de organizar, distribuir y alinear el layout de elementos **css**, permitiéndoles incluso ocupar espacio de contenedores con tamaño desconocido o variable (de ahí lo "flexible").  
La idea básica de flexbox es darle al contenedor la capacidad de distribuir su espacio sobrante entre cada uno de los items que contiene, permitiéndoles crecer o achicarse según corresponda el caso.

### display: flex
Es la propiedad que le vamos a agregar al contenedor para volverlo un contenedor flexible.
```css
.container {
    display: flex;
} 
```

### flex-direction
Establece la dirección principal en la que se van a colocar los elementos dentro del contenedor.
#### row
* Posiciona los elementos a lo largo del eje **X**, en fila, horizontalmente:
```css
.container {
    display: flex;
    flex-direction: row;
} 
```
#### row-reverse
* Posiciona todos los elementos a lo largo del eje **X**, pero de atrás hacia adelante.
```css
.container {
    display: flex;
    flex-direction: row-reverse;
} 
```
#### column
* Posiciona todos los elementos a lo largo del eje **Y**, verticalmente, en columna.
```css
.container {
    display: flex;
    flex-direction: column;
}
```
#### column-reverse
* Posiciona todos los elementos a lo largo del eje **Y**, pero de atrás hacia adelante
```css
.container {
    display: flex;
    flex-direction: column-reverse;
}
```
[Ejercicio 1](https://codepen.io/adaitw/pen/YzKNNgy)

### order
Es una propiedad que se le da a los elementos **dentro** de un contenedor flexible para cambiar el orden en que se ubican. 
* Se indica simplemente con un número. 
* Por defecto todos tienen orden 0. 
* Si dos elementos tienen el mismo orden, se distribuyen según ubicación en el css.

```css
.item-2 {
    order: 3;
}
.item-3 {
    order: 2;
} 
```
[Ejercicio 2](https://codepen.io/adaitw/pen/GRKmEoP)

### flex-basis
* Especifica el tamaño inicial del item, antes de que el espacio restante sea distribuido.
* Cuando se omite se pone en 0.
* Si se utiliza la palabra **auto**, tomará como referencia el contenido del elemento, ya sea el alto o el ancho, dependiendo de la orientación del contenedor.

```css
.item-1 {
    flex-basis: 400px;
} .item-2 {
    flex-basis: 100px;
}
```
[Ejercicio 3](https://codepen.io/adaitw/pen/ZEzKyoy)

### flex-grow
* Indica cuánto más espacio a tomar del espacio libre restante va a ocupar un elemento con respecto a otro.
* Por defecto es 0, es decir, no va a tomar ningún espacio libre.
* Si todos los elementos tienen un valor de 1, el espacio a ocupar se distribuye equitativamente entre ellos. Si uno tiene valor de 2, tomará el doble de éstos.

```css
.item-2 {
    flex-grow: 1;
}
.item-3 {
    flex-grow: 3;
} 
```
[Ejercicio 4](https://codepen.io/adaitw/pen/zYOwzVa)

### flex-shrink
* Indica hastá cuánto puede reducirse un elemento con respecto a otros.
* Por defecto su valor es 1.
* Si todos los elementos tienen un valor de 1, a medida que el contenedor se achica, se reducirán equitativamente.
* Si uno de los elementos tiene un valor de 2, éste se reducirá la mitad de éstos.

```css
.item-2 {
    flex-shrink: 2;
}
.item-3 {
    flex-shrink: 3;
} 
```
[Ejercicio 5](https://codepen.io/adaitw/pen/KKPmvzX)

### flex-wrap
* Le indica al contenedor si puede distribuir los elementos en más de una línea a medida que se éste se va a chicando.
* El valor por defecto es **no-wrap**.
```css
.container {
    flex-wrap: wrap;
} 
```


```css
.container {
    flex-wrap: wrap-reverse;
} 
```
[Ejercicio 6](https://codepen.io/adaitw/pen/RwbVLYM)

### justify-content
Le indica al contendor cómo distribuir los elmentos cuando hay espacio libre.

#### flex-start
* Posiciona los elementos al comienzo del contenedor (por defecto)
```css
.container {
    justify-content: flex-start;
}
```

#### flex-end
* Posiciona los elementos al final del contenedor.
```css
.container {
    justify-content: flex-end;
}
```

#### center
* Posiciona los elementos en el medio del contenedor.
```css
.container {
    justify-content: center;
}
```

#### space-around
* Les da a todos los elementos la misma distancia de separación a ambos lados.
* Los items de los extremos están más cerca del borde que de los items, porque entre el borde y ellos hay una distancia de separación, y entre ellos y los items, una por cada uno
```css
.container {
    justify-content: space-around;
}
```

#### space-between
* Posiciona un elemento al principio y otro al final del contenedor, y distribuye los restantes entre estos dos, con espacio equitativo entre ellos.
```css
.container {
    justify-content: space-between;
}
```
#### space-evenly
* Posiciona los elementos de forma tal que el espacio entre ellos y entre los bordes es el mismo.
```css
.container {
    justify-content: space-evenly;
}
```
[Ejercicio 7](https://codepen.io/adaitw/pen/mdbmqbG)

### align-items
Define como los items se alinean en el eje perpendicular al eje del contenedor.

#### flex-start
* Posiciona los elmententos al principio de la línea perpendicular al eje del contendor.
```css
.container {
    align-items: flex-start;
} 
```

#### flex-end
Posiciona los elementos al final de la línea perpendicular al eje del contenedor.
```css
.container {
    align-items: flex-end;
}
```
#### center
* Posiciona los elementos en el medio de la línea perpendicular al eje del contenedor.
```css
.container {
    align-items: center;
} 
```
#### stretch
* Posiciona los elementos para que llenen todo el espacio posible a través de la línea perpendicular al eje del contenedor (por defecto)
```css
.container {
    align-items: stretch;
}
```
#### baseline
* Los elementos se distribuyen de forma tal que la base de línea del contendio de ellos queda alineado.
```css
.container {
    align-items: baseline;
}
```

### align-content
Funciona como **justify-content**, pero distribuyendo el espacio que hay a lo largo del eje perpendicular al ehe contenedor. Debe usarse en combinación con **flex-wrap**, ya que no funcuina cuando el contenedor tiene una sola línea de elementos.

#### flex-start
```css
.container {
    align-content: flex-start;
} 
```
#### flex-end
```css
.container {
    align-content: flex-end;
} 
```
#### center
```css
.container {
    align-content: center;
} 
```
#### space-around
```css
.container {
    align-content: space-around;
} 
```
#### space-between
```css
.container {
    align-content: space-between;
} 
```
#### stretch
```css
.container {
    align-content: stretch;
}
```
[Ejercicio 8](https://codepen.io/adaitw/pen/WNejXKw)