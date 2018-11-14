//const argv = require ('yargs').argv;
const argv = require ('./config/yargs').argv;
const porHacer = require ('./por-hacer/por-hacer');
const colors =require('colors');

let comando= argv._[0];

switch(comando){
    case 'crear':
        let tarea= porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
        
    case 'listar':
        let listado = porHacer.getListado();
        
        for(let tarea of listado){
            console.log('======Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('estado',tarea.completado);
            console.log('======================='.green);
        }
        break;
        
    case 'actualizar':
        
        let actualiado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualiado);
            
        break;
        
    case 'borrar':
        
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
            
        break;
        
    default:
          console.log('Comando no es reconocido ');
        
}


