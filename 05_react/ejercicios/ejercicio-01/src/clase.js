// VARIABLES
// Los nombres de las variables tienen que ser descriptivos de lo que van a guardar
// Pueden contener letras, números, guiones bajos y el signo $
// El nombre empieza con una letra minúscula (pueden empezar con signo $ o _, pero no se recomienda)
// Los nombre son case sensitive. Esto significa que respetan mayúsculas y minúsculas (nombre y Nombre son variables distintas)
// No podemos usar palabras reservadas como nombres de variables: https://www.w3schools.com/js/js_reserved.asp
// Para escribir los nombres vamos a usar camelCase, donde la primer letra de la primer palabra va en minúscula y luego cada palabra comienza con mayúscula

// Siempre declaramos la variable utilizando la palabra reservada var seguida por un espacio y el nombre de nuestra variable
var nombre;

// Para guardar algo en esa variable, vamos a usar el operador de asignación =
nombre = "Ezequiel";
// A partir de ahora, tenemos una variable (una cajita o contenedor) que se llama "nombre" y está guardando un texto (string)

// También podemos, en la misma línea, crear una variable y guardar algún valor
var apellido = "Sanchez";

// Y finalmente podemos pisar o re-asignar el valor que estaba guardando esa variable
// Esta acción sería simplemente sacar lo que teníamos guardado en esa caja y guardar algo nuevo
// En este caso también usamos el operador de asignación
// Lo que teníamos guardado antes, se pierde y no lo podemos recuperar
apellido = "Gonzalez";

// Siempre que estemos guardando algo, la forma de escribirlo va a ser de la misma forma
// Del lado izquierdo vamos a indicar en DONDE queremos guardar algo (en que variable)
// En el medio el operador de asignación =
// Y del lado derecho vamos a decirle QUE queremos guardar


// TIPOS DE DATOS
// Las variables pueden guardar muchas cosas, no solo textos.
// Vamos a ver algunos de los tipos de datos que podemos guardar
// Vamos a ver strings, números, booleanos, undefined y null (conocidos como tipos de datos primitivos o tipos base)

// STRINGS
// Siempre que usemos strings, usamos comillas (y pueden ser comillas simples o dobles)
var mensaje = "Hola mundo!";
var otroMensaje = 'Otro hola mundo!';

// Si necesito guardar el texto hola "mundo"! en un variable, incluyendo las comillas dobles, en este caso podemos crear un string usando comillas simples
var holaMundo = 'hola "mundo"!';

// Si necesito guardar el text CD's, puedo crear el string usando comillas dobles
var losCds = "CD's";

// concatenar strings +
var nombreCompleto;
nombreCompleto = nombre + " " + apellido;

// numeros
var unNumero = 9;
var otroNumero = 27;
var otroNumeroNegativo = -5;
var otroNumeroConDecimales = 20.5;

var resultado = unNumero + otroNumero;
var resultadoMultiplicacion = unNumero * otroNumero;
var resultadoResta = unNumero - otroNumero;
var resultadoDivision = unNumero / otroNumero;

var base = 10;
var altura = 6;

var area = base * altura;

// booleanos
// solo dos valores posibles
// true -> verdadero
// false -> falso
var unBuleano = true;
var elOtroBuleano = false;

var estaPrendido = false;
//

// undefined
var variableIndefinida;

// null
var unaVariableConNull = null;