
var program = require('commander');

program
  .version('0.0.2')
  .option('-a, --archivo <archivo>','Input Nombre de Archivo')
  .parse(process.argv);

if(!process.argv.slice(2).length){
  program.outputHelp();
  // Terminar el programa
  process.exit(1);
}

var hola = require("./modulo-holaMundo.js");

var contenido  = hola.decir(program.archivo);

console.log(contenido.toString());
