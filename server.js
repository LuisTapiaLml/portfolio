const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const portfoliorouter = require('./routes/routes');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));


app.use('/'  ,portfoliorouter );

app.use( '/public', express.static(path.join(__dirname + '/public')) );



app.listen(8080);