## Estructura de un tag de HTML (etiqueta)
Una etiqueta actúa como un contenedor y describe los datos o información que contienen entre la etiqueta de apertura y la de cierre.

```html
<tipoDeEtiqueta>Contenido</tipoDeEtiqueta>
```

###Una etiqueta esta compuesta por:

**Etiqueta de apertura:**
* `<` un signo menor que se conoce como apertura de la etiqueta
* `tipoDeEtiqueta` puede ser una o varias letras que describen el tipo de etiqueta que queremos crear (título, link, imagen, etc)
* `>` un signo mayor que se conoce como cierre de la etiqueta

```html
<tipoDeEtiqueta>
```
**Contenido:**

* Contenido de la etiqueta: puede ser un texto u otro/s elemento/s de HTML

```html
<tipoDeEtiqueta>Bienvenidos a HTML!!
```

**Etiqueta de cierre:**
* Tiene la misma estructura que la etiqueta de apertura
* Se tiene que llamar igual que la estrcutura de apertura para que el browser entienda que acá termina lo que comenzó con la etiqueta de apertura
* `/` tiene una barra inclinada para determinar que es una etiqueta de cierre (sino sería igual que la de apertura)

```html
</tipoDeEtiqueta>
```
**Elemento:**
* Podemos diferenciar que las etiquetas son las de apertura y cierre
* Llamamos elemento al conjunto de etiquetas de apertura y cierre que tiene contenido

```html
<tipoDeEtiqueta>Bienvenidos a HTML!!</tipoDeEtiqueta>
```

**Etiquetas sin contenido:**
* Algunas etiquetas no tienen contenido y funcionan como placeholder (un lugar donde vamos a poner algo).
* Este tipo de etiquetas utilizan la apertura y cierre en una sola estructura
* Un ejemplo de este tipo de etiquetas es el contenedor para insertar una imagen.

```html
<img />
```

**Ejemplo de un elemento con otro elemento:**
En el siguiente ejemplo tenemos una etiqueta (no sabemso de que tipo) que tiene como contenido un texto (Bienvenidos a HTML!!) y una imagen que por ahora no sabemos cual es.

En este ejemplo vemos que el texto y la imagen tienen un márgen izquierdo para visualizar de forma rápida y fácil que son contenido del elemento llamado tipoDeEtiqueta. Esta técnica se conoce como [identación o identado](https://es.wikipedia.org/wiki/Indentaci%C3%B3n) y es una buena práctica para evitar tener problema a la hora de armar documentos con estructuras más complejas.

```html
<tipoDeEtiqueta>
  Bienvenidos a HTML!!
  <img />
</tipoDeEtiqueta>
```
### Atributos de los elementos
* Los elementos en HTML pueden tener atributos que nos sirven para describirlo mejor, agregar funcionalidad o alterar su comportamiento.
* El atributo **id** nos permite identificar de forma única un elemento dentro del documento. (Sólo deberíamos tener un elemento de este tipo por documento, ejemplo: Un título principal con el id: titulo)
* El atributo class nos permite establecer a que clase de CSS pertenece un elemento. De esta forma podemos agrupar elementos por la forma que se ven o comportan. (Podemos utilizar la misma clase en varios elementos)

Ejemplo usando ID y class
```html
<tipoDeEtiqueta id="titulo-principal" class="rojo"></tipoDeEtiqueta>
```