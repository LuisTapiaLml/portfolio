const Sequilize = require('sequelize');

const db =  require('../config/db');

const Proyectos = db.define('proyectos',{

    id : {
        type : Sequilize.INTEGER,
        primaryKey : true,
        autoIncrement:true
    },

    nombre : Sequilize.STRING(100) ,

    descripcion : Sequilize.STRING(250),

    url : Sequilize.STRING(150),
    
    repositorio : Sequilize.STRING(250),

    img : Sequilize.STRING(250)

},{
    
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp',
});


module.exports = Proyectos;