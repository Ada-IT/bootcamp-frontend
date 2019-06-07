# Internet

* [¿Qué es internet?](https://www.youtube.com/watch?v=Dxcc6ycZ73M)
* [Internet: Alambres, Cables & Wifi](https://www.youtube.com/watch?v=ZhEf7e4kopM)
* [Internet: IP & DNS](https://www.youtube.com/watch?v=5o8CwafCxnU)
* [Internet: Paquetes, Routing & Fiabilidad](https://www.youtube.com/watch?v=AYdF7b3nMto)
* [Internet: HTTP & HTML](https://www.youtube.com/watch?v=kBXQZMmiA4s)

# HTTP

Las aplicaciones web consisten en dos componentes, una parte llamada **cliente** y otra parte llamada **servidor**, y se comunican cuando un cliente envia pedidos al servidor.

Para que estos clientes puedan
Para que estos `clientes` puedan comunicarse con los `servidores web`, es necesario que haya un lenguaje o protocolo común, con determinadas reglas sobre cómo debe ocurrir la comunicación. El protocolo utilizado para la comunicación web se llama **HTTP**, que significa HyperText Transfer Protocol (protocolo de transferencia de hipertexto).

Cualquier navegador (chrome o firefox, por ejemplo) usan HTTP para comunicarse con un servidor web cuando ingresamos una dirección  en la barra de navegación, hacemos click en algún enlace de una página, enviamos la información de un formulario o cuando una página actualiza su información dinámica.


#### El rol de HTTP en la web

HTTP define un conjunto de reglas somo como un cliente y una servidor se tienen que comunicar y transferir recursos. Estos `recursos`incluyen páginas HTML, hojas de estilo CSS, o información enviada entre clientes y servidores.
Veamos el tipo de comunicación que ocurre en la Web.

Un sitio web estático básico se basa en recursos web: archivos de páginas web (HTML), hojas de estilo (CSS), imágenes, etc. Además de estos recursos web fundamentales, las aplicaciones web también funcionan con datos dinámicos. Por ejemplo, una aplicación de compras permite a las personas publicar artículos en venta, ver artículos en venta, modificar el precio y la disponibilidad de artículos en venta, y eliminar artículos. Esto necesita almacenar, actualizar y eliminar datos de los artículos. Esta funcionalidad se conoce como **CRUD**:

- Create(C): ingresar/guardar información
- Read(R): ver/recuperar información
- Update(U): modificar información
- Delete(D): eliminar información

En español se lo conoce como ABM: Alta/Baja/Modificación.

Cada una de estas operaciones está asociada con algún tipo o categoría de datos. Estos var a ser los recursos con los que la aplicación trabaja. Además de los archivos estáticos que conforman las páginas web (HTML, CSS, JS), podemos pensar en los recursos de nuestras aplicaciones web como las grandes categorías de información con las la app necesita trabajar. Por ejemplo, si está diseñando un foro de preguntas y respuestas, los principales recursos involucrados son:

- preguntas
- respuestas
- usuarios

Se puede acceder o ubicar un recurso utilizando una dirección (**URI/URL**). La URL puede ser una ruta a un archivo, como `http://www.batman.com/sobre-mi/i-am-batman.html`. También podría ser lo que se conoce como un **endpoint** de un servicio o programa, que vamos a ver más en detalle en la próxima unidad. En este caso, la URL es un enlace para acceder a un recurso específico. Por ejemplo, `http://www.yahoorespuestas.com/preguntas` podría ser un **endpoint** para leer/recuperar una lista de preguntas para una aplicación de Preguntas y Respuestas.

Para cada `recurso` como este, una aplicación proporciona alguna forma de realizar un conjunto de operaciones CRUD sobre ese recurso. Por ejemplo, en el caso de las preguntas en un foro de preguntas y respuestas, las personas deben poder:

- **C**reate: crear/postear una nueva pregunta
- **R**ead: ver el detalle de una pregunta, o ver una lista de preguntas
- **U**pdate: modificar los detalles de una pregunta ya existente
- **D**elete: eliminar una pregunta

#### **Conceptos base de HTTP**

Ahora, veamos cómo HTTP hace posible esta comunicación y funciones.

Todas las interacciones que utilizan HTTP se basan en pedidos (requests) y respuestas (responses).

Los clientes (navegadores) envían pedidos (requests) HTTP a los servidores para solicitar recursos, datos o acciones sobre los datos. Estos requests son los que corresponden a las operaciones CRUD, como se detalla arriba.

Los servidores envían respuestas HTTP a los clientes después de manejar (handle) estas solicitudes. Estas respuestas incluyen un estado y pueden incluir datos u otros recursos que se solicitaron.

HTTP define los métodos de pedidos y los métodos de respuesta que los clientes y servidores utilizan para comunicarse.

HTTP gira en torno a la idea de recursos y acciones en aquellos recursos que presentamos anteriormente. Las acciones que se pueden realizar con HTTP tienen correlación con cada operación CRUD:

- **C**reate: HTTP PUT / HTTP POST
- **R**ead: HTTP GET
- **U**pdate: HTTP PUT / HTTP POST
- **D**elete: HTTP DELETE

Los clientes utilizan estos métodos HTTP para facilitar las operaciones CRUD dentro de una app.

![Verbos HTTP](https://www.oreilly.com/library/view/restful-net/9780596155025/httpatomoreillycomsourceoreillyimages224471.png)
![Aplicación Web](https://www.proyecto2017.linti.unlp.edu.ar/teorias/clase7/images/rest-api.png)

Algo importante de HTTP, es que es **sin estado**. Esto significa que el servidor y el cliente nunca necesitan recordar nada sobre los recursos o cualquier pedido / respuesta anterior. Cada request/response es independiente de la anterior.
