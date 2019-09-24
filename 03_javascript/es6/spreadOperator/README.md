# **Spread Operator**

El operador de propagación (spread operator) permite que un iterable (como un array o un string) se pueda expandir en un lugar donde se esperan 0 o más argumentos/elementos. También permite que objetos se expanda en un lugar donde 0 o más pares de propiedad-valor se esperan. **¿WAT?**

Esta definición, en un principio, es bastante común que sea prácticamente inentendible. Por esto, vamos a dividirlo en partes y mostrar varios ejemplos para entender el funcionamiento del operador.

El spread operator se escribe con 3 puntos suspensivos **`...`**

Vamos a ver un pequeño ejemplo. Supongamos que tenemos la siguiente función suma:

```js
function suma (a, b, c) {
 return a + b + c;
}
```

Y también tenemos un array con 3 números.

```js
const valores = [1, 2, 3];
```

Si nos preguntamos a nosotras, ¿cómo podríamos ejecutar la función pasando esos 3 valores como parámetros? Una posible solución, sería hacer lo siguiente:

```js
const resultado = suma(valores[0], valores[1], valores[2]);
```

Funciona. Pero, ¿qué pasa si la función tuviera un número de parámetros variable? o incluso más simple, ¿qué pasa si tenemos un escenario donde esta función espera 20 valores y yo tengo un array de 20 números?

Acá es cuando las cosas se ponen un poco ridículas, ¿vamos a acceder a todos los valores directamente a través del índice?

Consideremos el siguiente ejemplo:

```js
function suma (a,b,c,d,e,f,g,h,i,j,k,ohpordio) {
 return a+b+c+d+e+f+g+h+i+j+k+ohpordio;
}

const valores = [1,2,3,4,5,6,7,8,9,11,12];
```

¡Es en estos momentos en donde empieza a brillar el operador de propagación!

Imaginemos que el array valores de números es una caja que contiene todos estos números en forma muy ordenada, cada uno con un índice.

Cuando accedemos al valor de un índice del array como por ejemplo `valores[1]`, estamos obteniendo únicamente ese valor, que es lo que hicimos en el primer ejemplo. Continuando con la misma idea, ¿qué pasaría si quisiéramos obtener TODOS los valores en el orden exacto en que están en la caja?

Tal vez podría ser muy bueno hacer algo como `valores[0-11]`, pero en lugar de eso lo escribimos así ...valores.

Entonces en este caso de la función en particular, podemos escribir:

```js
const resultado = suma(...valores);
```

Cuando sacamos los valores del array, no sólo los estamos lanzando así nomás al viento, sino que se posicionan en sus respectivos parámetros de la función. a será 1, b será 2 y así sucesivamente.

**Casos de uso comunes**

Si bien el ejemplo visto antes está muy bien, no es lo más usado.

1. Concatenar arrays:

    ```js
    const positivos = [1, 2, 3, 4, 5];
    const negativos = [-5, -4, -3, -2, -1];

    const todosLosNumeros = [...negativos, ...positivos];
    ```

    Lo primero que hacemos es definir dos arrays positivos y negativos. Pero miremos un poco más en detalle la 3ra línea.

    Vamos a guardar en la variable todosLosNumeros el resultado de concatenar los otros dos arrays.
    Lo que estamos diciendo en este ejemplo es: JS, agarrá el contenido de lo que tenés en ambos arrays y tiralo en la nueva caja llamada todosLosNumeros. El orden de los elementos se va a respetar.

    El resultado final es:

    ```js
    [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]
    ```

2. Copiar arrays u objetos:

    Otro gran uso que se hace del spread operator, es para copiar arrays y/o objetos. Cuando en JS estamos asignando a una variable un array o un objeto, lo que estamos haciendo es guardar algo llamado “puntero”, que sería algo como la dirección donde este objeto/array se guardó.

    Entonces, si hacemos:

    ```js
    const playlist = ['Uno Entre 1000', 'Caravana'];
    const copiaPlaylist = playlist;
    ```

    Y queremos agregar una nueva canción en la copia, pero no en el array original:

    ```js
    copiaPlaylist.push('La Excepción');
    ```

    Se va a agregar en ambos, ya que la variable “apunta” al mismo array.

    ```js
    console.log(playlist); // ['Uno Entre 1000', 'Caravana', 'La Excepción']
    console.log(copiaPlaylist); // ['Uno Entre 1000', 'Caravana', 'La Excepción']
    ```

    Entonces, ¿cómo hacemos la copia con el spread operator?

    ```js
    const playlist = ['Uno Entre 1000', 'Caravana'];
    const copiaPlaylist = [...playlist];

    copiaPlaylist.push('La Excepción');

    console.log(playlist); // ['Uno Entre 1000', 'Caravana']
    console.log(copiaPlaylist); // ['Uno Entre 1000', 'Caravana', 'La Excepción']
    ```

    Esto mismo, también funciona con objetos.

    ```js
    const persona = {
      nombre: 'Dave Grohl',
      edad: 50
    };

    const copiaPersona = { ...persona };

    copiaPersona.altura = 183;

    console.log(persona); // { nombre: 'Dave Grohl', edad: 50 }
    console.log(copiaPersona); // { nombre: 'Dave Grohl', edad: 50, altura: 183 }
    ```

3. Extender/concatenar objetos:

    Otro caso de uso para el spread operator, es la posibilidad de combinar objetos para crear uno nuevo. Esto permite que cuando estemos definiendo un nuevo objeto literal, vamos a poder agregar/copiar propiedades de otro objeto.

    ```js
    const persona = {
      nombre: 'Dave Grohl',
      edad: 50
    };

    const copiaPersona = {
      altura: 183,
      ...persona // copia la propiedades del objeto persona
    };

    console.log(copiaPersona); // { nombre: 'Dave Grohl', edad: 50, altura: 183 }
    ```

4. Funcionalidades con Math:

    Math es una variable global que ya viene con JS, y nos permite realizar diferentes operaciones. Dos funciones comúnes son Math.max() y Math.min(). Con el spread operator vamos a poder propagar los diferentes valores dentro de un array en cada parámetro de las funciones (ya que ninguna de las dos acepta como parámetro de entrada un array).

    ```js
    const numbers = [9, 4, 7, 1];

    console.log( Math.min(...numbers) ); // 1
    console.log( Math.max(...numbers) ); // 9
    ```

[**`Ver PPT Spread Operator`**](clase_3.pdf)