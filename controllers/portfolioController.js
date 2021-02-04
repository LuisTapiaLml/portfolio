


exports.visita = ( req , res )=>{
    
    const info_proyectos = [
        {
            nombre : 'Organic Food',
            descripcion: 'Landing page de restaurant de comida organica',
            img: 'organic.JPEG',
            link : 'http://www.organic.luisptapia.com',
        },
        {
            nombre : 'QR Code Generator',
            descripcion: 'Generador de Códigos QR',
            img: 'codigoqr.JPEG',
            link : 'http://www.qrcode.luisptapia.com',
        }
    ];
    
    res.render('index' , { _proyectos : info_proyectos} );

};


exports.mensaje = ( req , res ) => {

    console.log(req.body);
    
    res.json ( {
        estatus : 'ok',
        mensaje : 'El correo se envio de manera correcta',
    });

};
