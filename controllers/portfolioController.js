"use strict";
const path = require('path');
const nodemailer = require("nodemailer");
const { mail } = require('../lib/mail');

exports.visita = (req, res) => {

    let email_data = { 
        tipo : 'portfolio' , 
        para : 'luistapialml@gmail.com',
        motivo : 'Portfolio' ,
        de : 'Pues tu',
        mensaje : ''
    }

    mail( email_data );

    const info_proyectos = [
        {
            nombre: 'Organic Food',
            descripcion: 'Landing page de restaurant de comida organica',
            img: 'organic.JPEG',
            link: 'http://www.organic.luisptapia.com',
        },
        {
            nombre: 'QR Code Generator',
            descripcion: 'Generador de Códigos QR',
            img: 'codigoqr.JPEG',
            link: 'http://www.qrcode.luisptapia.com',
        }
    ];

    res.render('index', { _proyectos: info_proyectos });

};


exports.mensaje = (req, res) => {

    let datos =  req.body;

    try {
        let email_data = { 
            tipo : 'confirmacion' , 
            para : datos.email ,
            motivo : 'Contacto' ,
            de : '"Luis Tapia 👻" <luistapialml.2@gmail.com>' ,
            mensaje : ''
        }
    
        mail( email_data );
    
    
        email_data = { 
            tipo : 'contacto' , 
            para : 'luistapialml@gmail.com',
            motivo : 'Contacto' ,
            de : `  ${ datos.email } ` ,
            mensaje : ` <p>  ${ datos.nombre } _ ${ datos.email } </p>
                     ${ datos.mensaje }`
        }
    
        mail( email_data );

        res.json({
            estatus: 'ok',
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