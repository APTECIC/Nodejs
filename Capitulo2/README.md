Vamos a utilizar la libreria de socket que es un Http request desde el buscador hacia el servidor en donde hacemos un llamado mandando un header diciendo que nos gustaria hacer webSockets donde le preguntamos al servidor donde si tiene la avilidad de utilizar el protocolo de socket.

se recomienda que utilizemos SSL para poder establecer una coneccion segura con socket. puesto que si se encuentra capaz el buscador todo el tipico Http recuest se cambiara a una coneccion persistente de socket.

### start using socket io

comensamos con la instalacion de socket por cuestiones de cambios y muchas fallas en las mas actualez la mejor version es la siguiente.
```
npm install socket.io@0.9.16
```