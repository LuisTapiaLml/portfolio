const Sequilize =  require('sequelize');
require('dotenv').config();

const db = new Sequilize( process.env.DB_NAME , process.env.DB_USER , process.env.DB_PASSWORD ,{

    host :  process.env.DB_HOST ,
    dialect : 'mysql',
    port : '3306',
    operatorAliases: false,

    define:{
        timestamps: false
    },

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },

    timezone: "-06:00",
});

module.exports = db;