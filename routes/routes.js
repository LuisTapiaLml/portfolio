const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolioController');


//pagina principal
router.get('/', portfolioController.visita );

router.post( '/correo' , portfolioController.mensaje );

router.get( '/public/files/:file' , portfolioController.files );


module.exports =  router;