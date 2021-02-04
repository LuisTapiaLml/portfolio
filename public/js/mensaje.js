import { conexion } from "./conexion.js";

const mensaje = async () =>{
    
    const data = {
        nombre : 'Luis el quique Pèrez',
        email : 'luistapialml@gmail.com',
        mensaje: `hola mama que haces? 
        yo estoy aqui perdiendo el tiempo` 
    }

    const respuesta =  await conexion('/correo',data , 'POST' );

    return respuesta;
}


export  { mensaje };