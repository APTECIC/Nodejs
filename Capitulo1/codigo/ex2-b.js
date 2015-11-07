var program = require('commander');

program
  .version('0.0.1')
  .option('-n --nombre <nombre>',' Agrega Nombre')
  .parse(process.argv);

console.log("Hola "+ program.nombre);
