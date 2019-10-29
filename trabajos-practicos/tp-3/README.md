# Trabajo Práctico 3 - JS

## Local de ventas de PCs

Mock: http://brainy-market.surge.sh/

Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

  * Lista de las vendedoras de la empresa
  * Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades `fecha`, `nombreVendedora` (un String con el nombre), `componentes` (un array Strings con el nombre de cada componente vendido), `sucursal` (un String con el nombre de la sucursal) y `id` (un valor que identifica de forma única a cada venta).
  * Lista de precios de los componentes, de la forma (nombre componente, precio).
  * Se debe visualizar el listado de ventas como indica el mockup. Cada vente debe contar con un botón 'eliminar'.

```js
var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { id: 1, fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", sucursal: "Centro", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { id: 2, fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", sucursal: "Centro", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { id: 3, fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", sucursal: "Caballito", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { id: 4, fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", sucursal: "Centro", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { id: 5, fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", sucursal: "Caballito", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ],

  sucursales: ['Centro', 'Caballito']
};
```

1. Se pide desarrollar las siguientes funciones:
    * **precioMaquina(componentes)**: recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
      ```js
      console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del motherboard)
      ```

    * **cantidadVentasComponente(componente)**: recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable `ventas`.
      ```js
      console.log( cantidadVentasComponente("Monitor ASC 543") ); // 2
      ```

    * **vendedoraDelMes(mes, anio)**, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
      ```js
      console.log( vendedoraDelMes(1, 2019) ); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
      ```

    * **ventasMes(mes, anio)**: Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
      ```js
      console.log( ventasMes(1, 2019) ); // 1250
      ```

    * **ventasVendedora(nombre)**: Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
      ```js
      console.log( ventasVendedora("Grace") ); // 900
      ```

    * **componenteMasVendido()**: Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función `cantidadVentasComponente`
      ```js
      console.log( componenteMasVendido() ); // Monitor GPRS 3000
      ```

    * **huboVentas(mes, anio)**: que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
      ```js
      console.log( huboVentas(3, 2019) ); // false
      ```

2. En la aplicación debe haber un botón **Nueva venta** donde se pueda sumar manualmente un nuevo ingreso de una venta con todos sus campos. El mismo debe abrir un ventana modal con el formulario para cargar la venta. Además, necesitamos crear algunas funciones adicionales:

    * Crear la función **ventasSucursal(sucursal)**, que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
      ```js
      console.log( ventasSucursal("Centro") ); // 4195
      ```

    * Las funciones **ventasSucursal** y **ventasVendedora** tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

    * Crear la función **sucursalDelMes(mes, anio)**, que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
      ```js
      console.log( sucursalDelMes(1, 2019) ); // "Centro"
      ```

3. Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y otros dos datos más.
    * El reporte se tiene que visualizar al final del sitio web como se ve en la web ejemplo
    * Debe contener una tabla donde se liste cada sucursal y el total de ventas que tuvo.
    * Debe mostrar:
      * Producto estrella: el componente que más ventas generó
      * Vendedora que más ingresos generó: la vendedora que mayor cantidad de ingresos generó (no cantidad de ventas)