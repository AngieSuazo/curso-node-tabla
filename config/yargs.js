const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multplicar'
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        describe:'Muestra la tabla de multiplicar',
        default:false
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        describe:'Hasta el número que se desea multiplicar',
        default:10
    })
    .check((argv,options)=>{
        if (isNaN(argv.b)){
            throw'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports=argv;