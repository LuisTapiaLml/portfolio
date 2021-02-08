const Sequelize = require('sequelize');

const db =  require('../config/db');

const Registros = db.define('registros',{

    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement:true
    },

    tipo : Sequelize.STRING(10)

},{
    
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
});


module.exports = Registros;
