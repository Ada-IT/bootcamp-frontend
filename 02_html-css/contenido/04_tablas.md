## Tablas
* A la hora de mostrar datos tabulados podemos utilizar el concepto de tabla (ej: una grilla, comparar precios u horarios de servicios, etc)
* En HTML existe el elemento **table** que define una tabla
* En una tabla encontramos filas y columnas
* Para crear una fila utilizamos el elemento **tr** que significa **T**able **R**ow o fila de una tabla
* Las filas tienen como contenidos elementos del tipo celda **td** que significa **T**able **D**ata o dato de la tabla

**Ejemplo:**
```html
<table>
  <tr>
    <td>Primer Celda de la primer fila</td>
    <td>Segunda Celda de la primer fila</td>
  </tr>
  <tr>
    <td>Primer Celda de la segunda fila</td>
    <td>Segunda Celda de la segunda fila</td>
  </tr>
</table>
```

* En este ejemplo podemos ver que tenemos una tabla con 2 filas (tr) y cada fila tiene 2 celdas (td)
* En caso de tener una celda vacía, creamos el elemento **td** igual para que quede bien formada la tabla

#### Práctica
[Ejercicio 18](../ejercicios_html/ej18.md)

* Las tablas pueden tener 3 sectores definidos (thead, tbody y tfoot)
* El elemento **thead** define el encabezado de la tabla
* El elemento **tbody** define el cuerpo de la tabla
* El elemento **tfoot** define el pie de la tabla
* Podemos utilizar el elemento **th** para definir un table heading o encabezado de tabla
* El **th** funciona tanto como encabezado de una columna al igual que para una fila
* Es una buena práctica definir todas las secciones de una tabla
* Esto ayuda a los lectores de pantalla

**Ejemplo:**
```html
<table>
  <thead>
    <tr>
      <th>Desc. Columna 1</th>
      <th>Desc. Columna 1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Primer Celda de la primer fila</td>
      <td>Segunda Celda de la primer fila</td>
    </tr>
    <tr>
      <td>Primer Celda de la segunda fila</td>
      <td>Segunda Celda de la segunda fila</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Primer Celda del pie</td>
      <td>Segunda Celda del pie</td>
    </tr>
  </tfoot>
</table>
```
#### Práctica
[Ejercicio 19](../ejercicios_html/ej19.md)

### Agregar atributos visuales
* Existen algunos atributos que nos permiten modificar la forma en que se ven las tablas
* Estos atributos son parte de las versiones anteriores de HTML pero siguen vigentes
* En el futuro vamos a utilizar **solo CSS** para decirle al browser como queremos que se vean nuestros elementos en general

* Para establecer que la tabla tiene que tener un borde utilizamos el atributo **border** y un valor numérico en pixeles que define el ancho del mismo
* También podemos establecer el color de fondo de nuestra tabla utilizando el atributo **bgcolor** y un [color web](https://es.wikipedia.org/wiki/Colores_web) como valor
* Las celdas también tiene el atributo **bgcolor** y de esta forma sobreescribimos el color de fondo de la tabla. Es decir que este atributo es más particular que el de la tabla.

**Ejemplo:**
```html
<table border="1" bgcolor="gray">
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td bgcolor="white">Contenido</td>
      <td>Contenido</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Pie 1</td>
      <td>Pie 2</td>
    </tr>
  </tfoot>
</table>
```

#### Práctica
[Ejercicio 20](../ejercicios_html/ej20.md)


* Otro de los atributos que tienen las tablas nos permiten establecer cual es el ancho por medio del atributo **width** que acepta un valor numérico en pixeles
* Las celdas también tienen este atributo y al establecerlo condicionamos el tamaño del resto de la columna
* Con el atributo **cellpadding** podemos establecer el margen interior (como un aire) que tiene una celda, acepta un valor numérico en pixeles
* Para manejar el margen exterior de las celdas usamos el atributo **cellspacing** que acepta un valor numérico en pixeles

**Ejemplo:**
```html
<table width="800" cellpadding="10" cellspacing="10">
  <thead>
    <tr>
      <th width="100">Encabezado 1</th>
      <th>Encabezado 1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Contenido</td>
      <td>Contenido</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Pie 1</td>
      <td>Pie 2</td>
    </tr>
  </tfoot>
</table>
```

#### Práctica
[Ejercicio 21](../ejercicios_html/ej21.md)

* Podemos unificar o unir celdas y columnas utilizando **rowspan** y **colspan**
* Ambos atributos aceptan un valor numérico con la cantidad de celdas o celdas de columna que queremos unificar
* Utilizamos **rowspan** para unificar columnas
* Por medio de **colspan** unificamos celdas

**Ejemplo:**
```html
<table>
  <tr>
    <td rowspan="2">Columna unificada</td>
    <td>Valor del medio</td>
    <td>Valor del medio</td>
    <td colspan="2">Celda unificada</td>
  </tr>
  <tr>
    <td>Valor del medio</td>
    <td>Valor del medio</td>
  </tr>
</table>
```

![Tabla con columnas y celdas unificadas](https://github.com/nisnardi/comunidad-it-js/raw/master/assets/html/tabla_unificada.png)

#### Práctica
[Ejercicio 22](../ejercicios_html/ej22.md)

#### Práctica extra
* Crear un nuevo archivo: got.html
* Reproducir el contenido de la siguiente imagen utilizando todo lo aprendido

![Listado de episodios de GOT](https://github.com/nisnardi/comunidad-it-js/raw/master/assets/html/game_of_thrones_episodes.png)

* Para los links se puede utilizar el atributo href con el valor '#' para simular que esta vinculado con otro documento
* El color verde oscuro es: #2a4c4c
* El gris oscuro es: #e8eaef
* El gris claro es: #f7f9fa
* Para la tipografía en blanco pueden utilizar el siguiente código dentro del encabezado

**Ejemplo**
```html
  <table>
    <thead>
      <tr style="color:white;">
        <th>Contenido de color blanco</th>
      </tr>
    </thead>
  </table>
```

* Para ver la tabla origina pueden entrar al siguiente [link](https://en.wikipedia.org/wiki/List_of_Game_of_Thrones_episodes)
