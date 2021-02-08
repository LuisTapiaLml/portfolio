const Sequilize = require('sequelize');

const db =  require('../config/db');

const Mensajes = db.define('mensajes',{

    id : {
        type : Sequilize.INTEGER,
        primaryKey : true,
        autoIncrement:true
    },

    nombre : Sequilize.STRING(100),
    email : Sequilize.STRING(150),
    mensaje : Sequilize.STRING(250)
    
},{
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
});


module.exports = Mensajes;
