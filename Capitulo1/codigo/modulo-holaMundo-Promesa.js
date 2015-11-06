
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

module.exports.decirPromesa = decir;
