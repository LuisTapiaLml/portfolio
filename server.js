const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const portfoliorouter = require('./routes/routes');

const db = require('./config/db');
require('./models/Registros');
require('./models/Proyectos');
require('./models/Mensajes');

db.sync()
    .then( ()=>{

        console.log('conectado');

    }).catch(error => {

        console.log(error);

    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.set("views", path.join(__dirname, "views"));

app.use( '/public', express.static(path.join(__dirname + '/public')) );

app.use('/'  ,portfoliorouter );

app.listen(8080);