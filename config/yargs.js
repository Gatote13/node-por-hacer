const opts ={
     descripcion:{
        demand:true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado:{
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea '
    }
}

const argv =require('yargs')
            .command('crear','Crea un elemento por hacer',opts)
            .command('actualizar','Actualiza el estado completado de una tarea ',opts)
            .command('borrar','Eliminar un elemento',opts)
            .help()
            .argv;

module.exports={
    argv
}