Vamos a utilizar la libreria de socket que es un Http request desde el buscador hacia el servidor en donde hacemos un llamado mandando un header diciendo que nos gustaria hacer webSockets donde le preguntamos al servidor donde si tiene la avilidad de utilizar el protocolo de socket.

se recomienda que utilizemos SSL para poder establecer una coneccion segura con socket. puesto que si se encuentra capaz el buscador todo el tipico Http recuest se cambiara a una coneccion persistente de socket.

### start using socket io

comensamos con la instalacion de socket por cuestiones de cambios y muchas fallas en las mas actuales la mejor version es la siguiente.
```
npm install socket.io@0.9.16
```

ahora sobre nuestro server vamos a hacer un cambio de nombre de ```6.server --> 7.server``` y tambien nuestro html de ```6.html ---> 7.html``` para no perdernos.

ahora tenemos que cargar la libreria de socket.io para eso en nuestro documento de ```7.server.js``` nos colocamos en el fondo del documento y ponemos 

``` var io = require("socket.io");```

aqui llamamos a la libreria pero tenemos que decirle a socket que debe estar listo para escuchar futuros llamados, para esto existe otra manera en la cual esta libreria nos ayuda, porque existen muchos terminos complejos que el servidor necesita manejar,