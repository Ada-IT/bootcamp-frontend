# Integrador 3
<br/>

Gracias al resultado del último desarrollo que le hicimos a nuestra clienta, nos solicitó mejorar el programa que hicimos en la primera entrega.
Ahora tenemos que dar la posibilidad de:
- Agregar productos a nuestro carrito
- Mostrar el detalle de la compra
- Eliminar productos
- Vaciar el carrito
- Confirmar la compra
- Cancelar la compra

<br/>
<br/>

El programa ya tiene una lista de productos precargados
<br/>
<br/>

| ID | NOMBRE               | PRECIO | APLICA DESCUENTO |
| -- | -------------------- | ------ | ---------------- |
| 1  | Notebook Lenobo S400 | 100    | true             |
| 2  | Celular Notorola G5  | 135    | false            |
| 3  | Smart TV Filips 43'  | 190    | true             |
| 4  | Sorny PS 7           | 215    | true             |
<br/>

⚙️ Debe tener un menú que permita realizar las siguientes operaciones (con su respectivo flujo)
<br/>
<br/>

***
Operaciones
<br/>

### ➕ Agregar un producto
- Mostrar todos los productos
- Debe pedir el ID del producto a agregar en el carrito
- Si el producto existe, preguntar cuantas unidades va a llevar del producto y agregarlo al carrito
  - Si el producto ya se encontraba en el carrito, debe incrementar la cantidad de unidades que está comprando
- Si el producto no existe debe mostrar un mensaje informándolo
- A continuación debe pedir si se desea realizar nuevamente el procedimiento
  - Si la respuesta es afirmativa debe volver a realizar el procedimiento
  - Si la respuesta es negativa debe llevar al menú de operaciones
<br/>

### 📄 Mostrar Compra
- Mostrar el detalle de la compra con:
  - nombre del producto, precio, cantidad y subtotal (precio x cantidad)
  - cantidad total de productos
  - total (suma de subtotales)
- Luego debe llevar al menú de operaciones
<br/>

### 🗑️ Eliminar un producto del carrito
- Debe pedir ingresar el id del producto a quitar
- Si el producto existe y está en el carrito debe mostrar los datos del producto (nombre y cantidad a comprar) y preguntar si desea confirmar la operación
  - Si la respuesta es afirmativa debe eliminar el producto del carrito y mostrar un mensaje de éxito
  - Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
- A continuación debe pedir si se desea realizar nuevamente el procedimiento
  - Si la respuesta es afirmativa debe volver a realizar el procedimiento
  - Si la respuesta es negativa debe llevar al menú de operaciones
<br/>

### 🗑️ Vaciar carrito
- Debe preguntar si desea confirmar la operación (eliminar todos los productos del carrito)
  - Si la respuesta es afirmativa debe eliminar todos los productos del carrito y mostrar un mensaje de éxito
  - Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
- A continuación debe llevar al menú de operaciones
<br/>

### 🚪 Cancelar compra
- Debe preguntar si desea confirmar la operación
  - Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programa
  - Si la respuesta es negativa debe volver al menú de operaciones
<br/>

### ✔️ Confirmar Compra
- Mostrar el detalle de la compra con:
  - nombre del producto, precio, cantidad y subtotal (precio x cantidad)
  - cantidad total de productos
  - total (suma de subtotales)
- Preguntar si tiene un código de descuento
  - si la respuesta es "SÍ", pedir que ingrese el código
  - mostrar si el código ingresado es correcto o incorrecto
- Mostrar el detalle de la compra con:
  - nombre del producto, precio, cantidad y subtotal (precio x cantidad)
  - cantidad total de productos
  - total (suma de subtotales)
  - si tiene código y lo ingresó bien, mostrar el descuento y el total final
- Preguntar si desea concretar la compra
  - Si la respuesta es afirmativa debe mostrar un mensaje de confirmación y despedida
  - Si la respuesta es negativa debe llevar al menú de operaciones
<br/>

***

🔧 El código de cada opción del menú, debe estar dentro de una función, por lo que tendremos las funciones:
- `agregarProducto`
- `mostrarDetalle`
- `eliminarProducto`
- `vaciarCarrito`
- `confirmarCompra`
- `cancelarCompra`
<br/>
<br/>

🔧 Adicionalmente y para hacer nuestro código más prolijo, reutilizable y mantenible, nos pidieron desarrollar las siguientes funciones, que podremos utilizar dentro de las operaciones principales:
- `contarTotalDeProductos`: recibe el array del carrito de compras y tiene que retornar la cantidad de productos en el carrito
- `subtotalDeCompra`: recibe el array del carrito de compras y tiene que retornar el monto total del carrito
- `totalDescuento`: recibe el array del carrito de compras y tiene que retornar el monto total del descuento que aplica. Como no todos los productos aplican para descuento, solo se debe calcular sobre el subtotal de los productos que si aplican
- `mostrarProductos`: recibe el array del carrito de compras y muestra el listado de productos con los siguientes datos: nombre del producto, precio, cantidad y subtotal (precio x cantidad)
<br/>
<br/>

✔️ Todos los mensajes que se requieran son libres (pueden poner lo que mejor les parezca)
<br/>
<br/>

🔓 No es requerido validar los datos que se ingresan, por ejemplo, si en vez de ingresar un número de celular se ingresa un dato no válido, como una palabra
<br/>
<br/>

❗ Sí es requerido que si se ingresa una opción incorrecta (cuando tengamos que hacerlo) el programa nos avise del hecho, y tome una acción por default (por ejemplo, volver al menú)
<br/>
<br/>

♻️ Si encontramos código que repetimos en muchas ocasiones, crear una función para evitar que esto pase
<br/>
<br/>

***

### 👍 Tips, consejos y buenas prácticas:
<br/>

* ⚙️ Encarar un punto a la vez, probarlo bien, y cuando esté funcionando y cumpla con lo necesario, seguir adelante
* 🐪 Utilizar buenos nombres de variables y camelCase y SNAKE_CASE
* 📦 Poner todo lo que se pueda dentro de variables para evitar repetir valores (como textos, mensajes, etc)
* 📝 Espaciar los bloques de código en secciones y poner comentarios para que sea más legible
* 🔎 Si tenemos algún problema, usar la consola para inspeccionar los valores de las variables
* 🔀 Probar bien todos los caminos posibles
