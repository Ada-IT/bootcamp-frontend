# **Fetch**

JavaScript puede enviar pedidos a un servidor y cargar información nueva siempre que lo necesite.

Por ejemplo, podemos utilizar los pedidos de red para:
- Crear un pedido para comprar una notebook
- Cargar la información de perfil de una persona
- Recibir las últimas actualizaciones de GMail desde el servidor
- …etc

…y **¡todo sin necesidad de refrescar la página!** 🙌

Existe un término general **AJAX** (abreviado **A**synchronous **J**avaScript **A**nd **X**ML) para las solicitudes de red de JavaScript. Pero no tenemos que usar XML: el término proviene de los viejos tiempos, por eso esa palabra está ahí.

Hay varias formas de enviar un pedido y obtener información del servidor.

Vamos a empezar viendo el método `fetch()`, que es moderno y versátil y viene por defecto dentro de JavaScript.

La sintáxis básica es:

```js
let promise = fetch(url, [options])
```
- **url**: la dirección a la que queremos acceder
- **options**: parámetros opcionales de configuración

Sin el parámetro `options`, es simplemente un pedido GET, descargando contenido de una URL (texto, un HTML, una imagen, un JSON).

El navegador empieza el pedido de forma inmediata y retorna una promesa con la que vamos a poder obtener los datos una vez que la operación termine.

Obtener una respuesta, con `fetch()`, generalmente es un proceso de 2 etapas.

Primero, la promesa, que es devuelta por `fetch()`, se resuelve con un objeto de la clase de `Response` (propio de JS) tan pronto como el servidor responde con los `headers`.

En este punto, podemos verificar el estado de HTTP, para ver si el pedido fue exitoso o no, verificar los `headers`, **pero todavía no tenemos el cuerpo del mensaje**.

La promesa se rechaza si el `fetch()` no pude hacer el pedido HTTP, por ejemplo por problemas de red, porque URL no existe, entre otros.
Los estados de HTTP que indican algún error (404 o 500), **no harán que la promesa sea rechazada**.

Podemos ver el estado HTTP en las propiedades del response:

- **status** – el número del estado, por ejemplo _200_
- **ok** – un boolean, `true` si el código del estado está entre  200 y 299

Vamos a ver un ejemplo:

```js
fetch(`https://adaitw.org`)
  .then(response => {
    if (response.ok) { // si el estado de HTTP está entre 200 o 299
      // vamos a obtener la respuesta del cuerpo en formato JSON
      return response.json();
    } else {
      alert("HTTP-Error: " + response.status);
    }
  })
```

**Segundo**, para obtener el cuerpo de la respuesta, tenemos que hacer uso de un método adicional.

El objeto de la clase `Response` nos da múltiples métodos _promised-base_ (que nos retornan una nueva promesa) para acceder al cuerpo del mensaje en varios formatos:

- response.text() – lee el cuerpo y nos lo retorna como un texto
- response.json() – parsea el cuerpo y nos devuelve un JSON
- response.formData() – nos devuelve la respuesta como un objeto `FormData`
- response.blob() – retorna la respuesta como un Blob (Binary Large Objects, objetos binarios grandes)
- response.arrayBuffer() – retorna la respuesta como un ArrayBuffer (representación de bajo de nivel de datos binarios)
- adicionalmente, response.body es un objeto `ReadableStream`, que nos permite leer el cuerpo pieza a pieza

Por ejemplo, vamos a obtener un objeto JSON con los últimos commits desde GitHub:

```js
fetch('https://api.github.com/repos/Ada-IT/bootcamp-frontend/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));
```

Para obtener la respuesta como texto, podemos utilizar `response.text()` en lugar de `.json()`.

```js
fetch('https://api.github.com/repos/Ada-IT/bootcamp-frontend/commits')
  .then(response => response.text())
  .then(text => alert(text.slice(0, 80) + '...'));
```

Como para leer en formato binario, vamos a obtener y mostrar una imagen:

```js
fetch('https://anthoncode.com/wp-content/uploads/2020/01/logo-batman-nolan.png')
  .then(response => response.blob())
  .then(blob => {
    // creamos un elemento <img>
    let img = document.createElement('img');
    img.style = 'position:fixed; top:10px; left:10px; width:100px';
    document.body.append(img);

    // mostramos la imagen
    img.src = URL.createObjectURL(blob);

    setTimeout(() => { // escondemos después de 3 segundos
      img.remove();
    }, 3000);
  })
```

**Importante:**
Si, por ejemplo, ya elegimos `response.text()`, entonces `response.json()`no va a funciona, porque el contenido del body ya fue procesado.


[Ejercicio 1](./ejercicios/ej_01.md)
[Ejercicio 2](./ejercicios/ej_02.md)