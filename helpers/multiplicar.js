const fs = require('node:fs');
const colors=require('colors');

const crearArchivo= async (base =5,listar=false, hasta =10)=>{

        try{

            let salida,consola='';

            for (let i =1; i <= hasta;i++){
                salida +=(`${base} x ${i} = ${base*i}\n`);
                consola+=(`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`);
            }
            //Solo listar si se ingresa -l
            if(listar){
                console.log('================'.green);
                console.log(' Tabla del: '.green,colors.blue(base));
                console.log('================'.green);
                console.log(consola);

            }
    
            //Para crear un archivo
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            return (`tabla-${base}.txt`);

        }catch(error){
            throw error;
        }
    
}

//Para exportar 
module.exports={
    crearArchivo
}

/**“requiere” es parte del sistema de módulos “CommonJS” y este trae una copia del módulo. 
 * En ES6/7 se implementó “import” que hace referencia al modulo */