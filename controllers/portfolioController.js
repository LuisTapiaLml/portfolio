"use strict";
const nodemailer = require("nodemailer");

exports.visita = (req, res) => {

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

    res.json({
        estatus: 'ok',
        mensaje: 'El correo se envio de manera correcta',
    });

};


exports.files = (req, res) => {

    let { file } = req.params;

    console.log("arcihvo: " , file );

    if(file === 'cv' ){

        res.send('aquì va tu cv');

    }else{

        res.status(404).render('404');

    }

};