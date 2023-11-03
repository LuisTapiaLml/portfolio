const Sequelize =  require('sequelize');
require('dotenv').config();


const db = new Sequelize( process.env.BD_NAME, 
    process.env.DB_USER, process.env.BD_PASSWORD , 
    {
    host : process.env.DB_HOST,
    port : parseInt(process.env.DB_PORT),
    dialect: 'mysql',
    logging  : process.env?.ENVIROMENT == 'production' ? false : console.log 
});

module.exports = db;