


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

```
console.log("Hola Mundo");
```

Node.js no es solamente un motor. V8 no tiene concepto de I/O . Node tiene un hosting para Javascript y extiende de su ambiente puro para hacer otro tipo de cosas como I/O. 

Cambiemos la linea de codigo a : 
```
process.stdout.write("Hello World");
```