# Elevando el estado

Hay veces que necesitamos "compartir" el estado de un componente, ya sea los mismo valores o los métodos que lo modifican. Cuando pasa esto, tenemos que hacer algo que en React se conoce como "elevar el estado". La idea básica es sacar el estado y los métodos de un componente, y "subirlos" a un componente superior o padre. De esta forma, este componente padre puede ahora "compartir" el estado con otros componentes hijos. Esto respeta dos filosofías muy importantes de React:

  * **Una única fuente de la verdad**: Significa que el estado de una cierta sección de una aplicación debería estar guardado en único lugar (un componente), y esa "verdad" sólo puede ser modificada desde la fuente. De esta forma, se evitan conflictos de discrepancias que pueden darse al tener distintas fuentes para una única "verdad".
  * **Flujo de datos de arriba a hacia abajo**: Implica que la información (el estado) se distribuye de los componentes hacia sus hijos. Es decir, tiene una única dirección. Esto facilita mucho a la hora de pensar en la estructura de la aplicación.
  
Entonces, un estado se encuentra en *un* componente. Cualquier cambio de ese estado sólo puede afectar a sus componentes hijos. Modificar el estado de ese componente nunca afectará a sus componentes padres o hermanos, *únicamente a sus hijos*.

Por eso, cuando necesitamos que el estado de un componente afecte a un componente hermano, tenemos que subirlo al componente padre. Ese componente puede luego pasar el estado a sus componentes hijos, por más que no haga uso propio del mismo.

Supongamos que tenemos una aplicación con los siguientes componentes

```
   .--A--. 
   |     |
.--B--.  C
|     |
D     E
```

Componente A es el componente raíz, y tiene dos hijos, B y C. B a su vez tiene dos hijos más, D y E.

Sigamos suponiendo que tenemos un cierto estado X en el componente E, del cual el componente D necesita también saber del mismo. Deberíamos elevar el estado X al componente B, porque es *el ancestro común más inmediato* entre D y E. Subirlo a A sería innecesario, por C no tiene que saber al respecto.

```
   .--A--. 
   |     |
   |     C
.--B--. <------- X debería estar acá, si
|     |    
D     E      .-- sólo D y E tienen que saber de este
^     ^      |
|_____|______|
```

No es necesario que B use el estado X, sólo necesita poder compartirlo a sus componentes hijos.

Si en cambio el componente C y el componente D necesitan saber de dicho estado, tendríamos que elevarlo al componente A.

```
   .--A--. <---- X debería estar acá, si
   |     |   
   |     C <---- sólo C y D necesitan saber de este
.--B--.      |
|     |      |
D     E      | 
^            |
|____________|
```

En este caso, A sólo derivaría el estado a sus componentes hijos, y si bien B lo recibiría, sólo se encargaría de pasarlo a el componente D.
