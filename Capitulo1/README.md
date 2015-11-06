


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

Esta es una de las formas mas sencillas de enviar utilizar parametros. Pero ahora vamos a utilizar un modulo en Node.js . Vamos a usar la libreria de [Commander.js](https://github.com/tj/commander.js). Vamos a utilizar en una linea de comando y corramos la siguiente linea ``` $ npm install commander```.

Ahora podemos hacer los siguiente :

```javascript
// Importar Modulo
var program = require('commander');

// vamos a agregar el parametro nombre
program
  .version('0.0.1')
  .option('-n --nombre <nombre>',' Agrega Nombre')
  .parse(process.argv);

console.log("Hola "+ program.nombre);

```

Con este ejemplo nos podemos dar cuenta que Node.js no es simplemente para hacer Web Servers. Node.js puede ser un subsituto para Bash o Perl Scripts. Ahora podemods hacer una anotacion tradicional tipo bash (shebang).

Si agregamos a nuestro archivos de Node.js la siguiente linea

```bash

#!/usr/bin/env node

```

Y le damos los permisos de execucion :

```bash

$ chmod 700 <archivo.js>

```

Ahora vamos a poder ejecutar nuestro codigo de la como un archivo executable
```bash

$ ./<archivo.js>

```

Ahora nuestro Script recibe parametros pero si aun no ingresamos el parametro seguimos recibiendo un mensaje de ```undefined```. Ahora vamos a agregar una ayuda.

```javascript

...

if(!process.argv.slice(2).length){
  program.outputHelp();
  // Terminar el programa
  process.exit(1);
}

console.log("Hola "+ program.nombre);

```

La libreria Commander.js ya nos apoya con una serie de funciones. Podemos validar si los parametros existen si no existen imprimimos la ayuda ``` program.outputHelp() ``` y posteriormente tenemos que salir de programa. A diferencia del un programa en JS en el navegador pensariamos que es con un ``` return ``` pero como aqui no tenemos un ambiente global tenemos que llamar ```process.exit()```.

### CREAR MODULO Y MANEJO DE I/O

Ahora que entendimos mejor como hacer un programa para linea de commando que tal si intentamos tomar la informacion de un archivo y lo mostramos en la consola.

Vamos a crear un archivo llamado ``` modulo-holaMundo.js``` y dentro de el vamos a hacer lo siguiente :

```javascript

// Modulo que recibe un path a un archivo como valor
var fs=require("fs");

function decir (nombreArchivo) {
  //Para desarrollo de programas de linea de Commando no es tan malo mandara llamar funciones Syncronus. Por que a diferencia de un Web server no hay llamadas concurrentes.  fs.readFile es la opcion para operaciones Asyncronus .
  return fs.readFileSync(nombreArchivo);
}

module.exports.decir= decir;

```

Vamos a descomponer este modulo en partes. El modulos que estamos importando ``` var fs = require("fs") ``` es un libreria de parte de Node.js que nos ayuda con operaciones de I/O . La linea ``` fs.readFileSync(nombreArchivo)``` es la funcion que nos va ayudar a leer el archivo en forma Syncronus.

Los modulos de Node.js utilizan el modelo de CommonJS en donde los archivos tienen su propio scope y no tenemos que utlizar ``` module.exports``` como public API.

Ahora un vez que realizamos este modulo cambiemos un poco el programa anterios.

```javascript
...
  .option('-a, --archivo <archivo>','Input Nombre de Archivo')
...
var hola = require("./modulo-holaMundo.js");

var contenido  = hola.decir(program.archivo);

console.log(contenido);

```

Creemos un archivo de text ``` archivo.txt``` con el contenido de ``` HOLA DESDE UN ARCHIVO```.

y al ejecutar el programa van a ver lo siguiente :

```bash
$ node ex3.js -a archivo.txt
<Buffer 48 6f 6c 61 20 64 65 73 64 65 20 75 6e 20 61 72 63 68 69 76 6f 0a>
$
```

No es necesariamente lo que estabamos esperando. Un ```Buffer``` en Node.js un representacion binaria eficiente que Node.js utiliza para trasmitir archivo. Los Buffers son muy comunes en Node.js. Para convertir el Buffer a String simplemente hagamos un ```.toString()``` en la siguiente linea :

```javascript
console.log(contenido.toString());
```

```bash
$ node ex3.js -a archivo.txt
HOLA DESDE UN ARCHIVO

$
```

Ahora reflexionemos un poco sobre lo que acabamos de hacer. Creamos un archivo completamente separado en nuestro directorio que esta actuando como un modulo. Esta es la forma en la cual Node.js organiza sus funciones en pequeñas tareas y esto cae sobre el Patron de Modulo (Module Pattern) pero las otros patrones estan disponibles (delegaciones y prototypos ) pero 90% de las ocaciones asi es como se trabajaria en Node.js.

### CONVERTIR NUESTRO MODULO EN ASYNCRONUS

Nuestro ejemplo anterio realizamos la lectura del ```archivo.txt``` de forma Syncronus lo cual provee un 'blocking scrope'. Vamos a convertir nuestro modulo en a Asyncronus como la mayoria de las cosas trabajan en Node.js .

```javascript
...
// Forma Syncronus
function decirSync (nombreArchivo) {
  return fs.readFileSync(nombreArchivo);
}

// Forma Asyncronus

function decir(nombreArchivo, cb){
  return fs.readFile(nombreArchivo,cb);
}

module.exports.decir= decirSync;
module.exports.decirAsync = decir;

```

Ahora modifiquemos nuestro programa:

```javascript
...
var hola = require("./modulo-holaMundo.js");

hola.decirAsync(program.archivo, function(err , contenido){
    console.log(contenido.toString());
});

```

La forma mas natural de manera Asyncronus en Node.js es con ```callbacks``` mas sin embargo no es la mejor forma de trabajar con ellos por que muy facilmente podemos llegar a lo que llaman un CALLBACK HELL. Pero la forma mas sencilla y natura en Node.js de trabajar con Asyncronus es de esta manera.

Usualmente las funciones de callbacks tiene la forma de ``` error first parameter ``` que significa que el primer parametro es el error. Si nosotros corremos el programa de esta manera y damos un archivo que no existe nuestro forma va a fallar. Entonces vamos a resolver este problema.

```javascript

...
hola.decirAsync(program.archivo, function(err , contenido){
if(err){
    console.error("Error : " + err);
}else{
    console.log(contenido.toString());
}
...

```

Ahora vamos a modificar el modulo de nuevo y hagamos lo siguiente :

```javascript
...
// Forma Simulada Delay
function decirDelay(nombreArchivo, cb){
  return fs.readFile(nombreArchivo,function(err, contenido){
    if ( err ){
      cb(err);
    }else{
      setTimeout(function(){
        cb(null, contenido);
      },1000);
    }
  });
}

...
module.exports.decirDelay = decirDelay;
```

De esta forma validad que si es error existe lo imprimamos de inmediato y estamos simulando que toma un segundo leer el archivo que seria algo similar a llamar una base de datos o hacer una cierta operacion. Con este ejemplo podemos ver un operacion Asyncronica en su totalidad.


### PROMESAS EN JAVASCIRPT

Un nueva forma de trabajar en Javascript y especialmente ahora con ES6 es el uso de Promesas. Y una Promesa no es mas que nada un froma de procesar llamados Asyncronus. Vamos a modificar nuestro modulo para utilizar una Promesa. En esta ocacion vamos a utilizar la libreria [bluebid](https://github.com/petkaantonov/bluebird/) que nos va a ayudar a simplicar muchas cosas.

```bash
npm install bluebird
```

Ahora modifiquemos nuestro modulo ```modulo-holaMundo.js``` :

```javascript
var Promise = require("bluebird");
var fs=require("fs");
Promise.promisifyAll(fs);

function decir(nombreArchivo){
  return new Promise(function (resolve, reject){
    fs.readFileAsync(nombreArchivo)
      .then(function(contenido){
        setTimeout(function(){
          resolve(contenido);
        },1000);
      })
      .catch(function(e){
        reject(e);
      });
  });
}

module.exports.decirPromesa = decir;
```

La libreria bluebid nos va ayudar a convertir 'fs' a un Promesa en vez de error first parameters. Ahora modifiquemos nuestro programa.

```javascript
....
var hola = require("./modulo-holaMundo-Promesa.js");

hola.decirPromesa(program.archivo)
  .then(function(contenido){
    console.log(contenido.toString());
  })
  .catch(function(err){
    console.error("Error : " + err);
});

```

Como pueden ver al utilizar Promesas tenemos un codigo mas limpio y facil de manipular.

### MODULOS DE NPM

Ahora que ya tuvimos un poco de practica con Node.js ahora vamos a hablar sobre en administrador de packetes `npm`. Nosotros ya hemos utilizados un poco al instalar commander y bluebird. Ahora de donde provienen estos paquetes. Estos paquetess provienen del repositorio central [npmjs.org](https://www.npmjs.com/) este repositorio es publico y muchos desarrolladores alrededor del mundo comparten sus codigo para otros los usen. Y tiene un mecanismo de actualizacion y manejo de versiones. Ahora si estamos interesados en publicar nuestro modulo ```modulo-holaMundo.js``` tendriamos que hacer los siguientes pasos:

* []Crear un repositorio publico (GitHub por ejemplo).
* []Tenemos que creear un package.json que no es mas que una descripcion del modulo.
```bash
$ npm init
```
 Agregar una version inicial( Node usa version semantica)
```json
{
  "name": "ex1",
  "version": "0.0.1",
  "description": "Curso APTECIC Node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "bluebird": "^3.0.5",
    "commander": "^2.9.0"
  }
}

```
* []Agregar el repositorio bajo la siguiente estructura:
```json
..
“repository”: {
     "type":“git”,
     "url":“http://github.com/user/repo-name”
}, …
```
* []Crear una cuenta de [NPM](https://www.npmjs.com/signup)
* []Agregar el usuario que creamos a nuestro npm local ``` npm adduser <usuario>``` eh insertar el path del project
* []Por ultimo para publicar hacer ``` npm publish```

Para remover el modulo lo podemos hacer a travez de ``` npm unpublish <nombre-modulo> --force```
