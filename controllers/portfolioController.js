"use strict";
const path = require('path');
const { mail } = require('../lib/mail');
const Mensajes = require('../models/Mensajes');
const Proyectos = require('../models/Proyectos');
const Registros = require('../models/Registros');

exports.visita = async (req, res) => {

    let fecha =  new Date();

    let anio = new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" , year: 'numeric' ,  month: '2-digit',day: '2-digit' });

    let hora = new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" , hour12: false, hour: "numeric", minute: "numeric" , second : "numeric" });
    
    let fecha_completa =  anio + " " + hora;

    console.log(fecha_completa);

    try {
        let email_data = { 
            tipo : 'portfolio' , 
            para : 'luistapialml@gmail.com',
            motivo : 'Portfolio' ,
            de : 'Pues tu',
            mensaje : ''
        }
    
        // mail( email_data );

    } catch (error) {
        
    }
    
    Registros.create({ tipo : 'visita' });

    const proyectos =await Proyectos.findAll();
    
    res.render('index', { _proyectos: proyectos });

};


exports.mensaje = (req, res) => {

    let datos =  req.body;

    try {

        Mensajes.create({
            nombre : datos.nombre,
            email : datos.email,
            mensaje : datos.mensaje
        });

        let email_data = { 
            tipo : 'confirmacion' , 
            para : datos.email ,
            motivo : 'Contacto' ,
            de : 'luistapialml.2@gmail.com' ,
            mensaje : ''
        }
    
        mail( email_data );
    
    
        email_data = { 
            tipo : 'contacto' , 
            para : 'luistapialml@gmail.com',
            motivo : `Contacto  _ ${ new Date().getHours() } _ ${ new Date().getSeconds() } ` ,
            de : `  ${ datos.email } ` ,
            mensaje : ` <p>  ${ datos.nombre } _ ${ datos.email } </p>
                     ${ datos.mensaje }`
        }
    
        mail( email_data );

        res.json({
            estatus: 'success',
            mensaje: 'El correo se envio de manera correcta',
        });

    } catch (error) {
        res.json({
            estatus: 'error',
            mensaje: 'No se pudo enviar el mensaje',
        });

        console.error(error);
    }

   

};


exports.files = (req, res) => {

    let { file } = req.params;

    if(file === 'cv' ){

        Registros.create({ tipo : 'cv' });
        
        let email_data = { 

            tipo : 'cv' , 
            para : 'luistapialml@gmail.com' ,
            motivo : 'Vio cv' ,
            de : '"Luis Tapia 👻" <luistapialml.2@gmail.com>' ,
            mensaje : ''
        }

        mail( email_data ).catch(console.error);

        res.sendFile(path.resolve('.//public/files/cv-Perez-tapia-Jose-Luis.pdf'));

    }else if( file === undefined ){

        res.status(403).render('403');

    }else{

        res.status(404).render('404');

    }

};