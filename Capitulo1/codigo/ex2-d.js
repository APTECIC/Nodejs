
var program = require('commander');

program
  .version('0.0.1')
  .option('-n, --nombre <nombre>','Input Nombre')
  .parse(process.argv);

if(!process.argv.slice(2).length){
  program.outputHelp();
  // Terminar el programa
  process.exit(1);
}

console.log("Hola "+ program.nombre);
