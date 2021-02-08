"use strict";
const nodemailer = require("nodemailer");
const { emailTemplates } = require("./emailTemplates");

exports.mail = async (data) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "luistapialml.2@gmail.com",
            pass: "nueva_contrasena_segura",
        },
        from : "luistapialml.2@gmail.com"
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({

        from: data.de, // sender address
        
        to: data.para, // list of receivers
        
        subject: `${data.motivo} `, // Subject line
        
        text: data.mensaje, // plain text body

        html: emailTemplates( data.tipo , data ), // html body
    });

    console.log(info);
}

