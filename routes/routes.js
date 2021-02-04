const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolioController');


//pagina principal
router.get('/', portfolioController.visita );

module.exports =  router;