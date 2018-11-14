const fs =require('fs');

let listadoPorHacer = [];

const guardarDB =() =>{
    
    let data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile(`DB/data.json`, data, (err) => {
    if (err) 
        throw new Error('No se pudo guardar tarea ',err);
   
    });
    
}

const cargarDB =() =>{
    
    try{
        listadoPorHacer = require('../DB/data.json');
    }catch(error){
        listadoPorHacer = [];
    }
    

    
}

const crear =(descripcion) =>{
    
    
    let porHacer={
        descripcion,
        completado:false
    }
    
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado =() =>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true)=>{
    
    cargarDB();
    
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
         guardarDB();
        return true;
    }else{
        return false;
    }
    
}

const borrar = (descripcion)=>{
    
    cargarDB();
    let NuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    
    if(NuevoListado.length == listadoPorHacer.length){
         return false;
    }else{
        listadoPorHacer = NuevoListado;
        guardarDB();
        return true;
    }
    
   
   
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}