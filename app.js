const {crearArchivo} =require ('./helpers/multiplicar');
const argv=require('./config/yargs');
const colors=require('colors');

console.clear();
  
crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo=> console.log(nombreArchivo.rainbow,'creado'))
    .catch(err=>console.log(err));

// const [, , arg3= 'base=5']=process.argv;
// const [, base=5]=arg3.split('=');


/**
 * FileSystem manejar carpetas directorios archivos que s eencuentran en el sevidor
 */