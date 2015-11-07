
// Modulo que recibe un path a un archivo como valor
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

// Read Stream

// function decir(nombreArchivo){
//   return new Promise(function (resolve, reject){
//      var opciones = {encoding :'utf8', flag:'r'};
//      var stream = fs.createReadStream(nombreArchivo, opciones);
//      var contenido = "";
//
//      stream.on('data',function(chunk){
//        //concatenar el contenido del archivo
//        console.log('=====================DATA=====================');
//        contenido += chunk;
//      })
//      stream.on('end',function(){
//        resolve(contenido);
//      });
//      stream.on('error',function(err){
//        reject(err);
//      })
//   });
// }

module.exports.decirPromesa = decir;
