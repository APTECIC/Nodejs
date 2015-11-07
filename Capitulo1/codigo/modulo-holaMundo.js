
// Modulo que recibe un path a un archivo como valor
var fs=require("fs");

// Forma Syncronus
function decirSync (nombreArchivo) {
  return fs.readFileSync(nombreArchivo);
}

// Forma Asyncronus

function decir(nombreArchivo, cb){
  return fs.readFile(nombreArchivo,cb);
}

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

module.exports.decir= decirSync;
module.exports.decirAsync = decir;
module.exports.decirDelay = decirDelay;
