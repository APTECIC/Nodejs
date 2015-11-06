


###En donde deberiamos utilizar Node.js ? 

Javascript no es lo correcto para todos 
Javascript tiene un futuro brillante 

ES SUPER EFICIENTE EN COMUNICACION. CONCEPTO DE WEBSOCKET. LOW LETNANCY 
HIGH THORUGHPUT 

NO ES BUENO PARA MANEJAR GRANDES ARCHIVOS

ENVENTO LOOP TOMANDO VENTAJA DE TAREAS PEQUEÑAS 

CORRE MUY BIEN EN NGNIX 

HAY MUCHAS COSAS BUENAS QUE JAVASCRIPT PUEDE HACER POR NOSOTROS 


### Donde pueden utilizar JS (middle end)

Core task (templates , routing , validating data)

### HOLA MUNDO !

Creemos un archivo llamado ```ex1.js``` , despues continuemos a escribir la siguiente linea:

```javascript 

console.log("Hola Mundo");

```

Para inciar el script : 

```javascript 

node ex1.js

```

Node.js no es solamente un motor de V8. Si lo comparamos con V8 no tiene concepto de I/O . Lo interesante de Node es porque tiene un hosting para Javascript y extiende de su ambiente puro para hacer otro tipo de cosas como I/O. Es por eso que puedejen usar Javascript en Servidores , Arduinos , Autos ,etc.

Por ejemplo, Node provee un wraper que conecta siertas funciones basicas de C como por ejemplo.

Cambiemos la linea de codigo a : 

```javascript

process.stdout.write("Hello World");

```

Asi como existe un ```process.stdout.write``` hay tambien un ```read```.


###  ACEPTAR INPUT 
Si queremos hacer alguna forma de enviar parametros a traves de la linea de comando. Usualment en Unix puedes existe el formato ```--variable=valor```, a travez de parametros de linea de comandos en lugar de decir "Hola Mundo" podemos quitar la parte del "Mundo" y podemos hacer alguna variable por ejemplo ```nombre```.

```javascript

console.log("Hola " + nombre);

```

Que tal si quisieramos sacar el primer argumento de mi linea de comando que es colocada al inicio de mi programa y tomarlo ese como mi variable?. Usando ```process.argv``` donde argv es un vector de parametros y es una forma de tomar nuestros argumentos. Entonces como es un vector vamos a necesitar el 3 parametro.

Modifiquemos el programa : 
```javascript 
var nombre = process.argv[2]

console.log("Hola " + nombre);

```

Una vez guardado el documento llendo a nuestra linea de comando llamamos el documento ```$ node ex1.js``` y vemos que no imprimira nada adicional ya que no le colocamos un argv y nos saldra ```Hola undefined```. Pero si nosotros colocamos uno despues del nombre de nuestro documento ```$ node ex1.js Mundo``` nos imprimira lo que queriamos ```Hola Mundo```.

### AYUDA EN COMMAND LINE