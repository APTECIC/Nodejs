function manejarHttp(req,res){

  res.writeHead(200,{"Content-type":"plain/text"});
  res.end("BOOM!!!! SERVIDOR WEB ARRIBA ");

}

var host = "localhost";
var port = 8081;

var http = require("http");
var servidor = http.createServer(menejoHttp).listen(port,host);
