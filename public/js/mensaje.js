import { conexion } from "./conexion.js";

const mensaje = async ( data = {} ) =>{

    const respuesta =  await conexion('/correo',data , 'POST' );

    return respuesta;
}


export  { mensaje };