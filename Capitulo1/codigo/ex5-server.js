function manejarHttp(req,res){
  res.writeHead(200);
  res.end("Hola Mundo");
}

var host = "localhost";
var port = 8006;

var http = require("http");
var servidor = http.createServer(manejarHttp).listen(port,host);
