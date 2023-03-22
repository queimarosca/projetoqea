require("dotenv") .config()



const Sequelize = require('sequelize') 

// constante que cria a conexão
const connection = new Sequelize(process.env.DB_NAME, process.env.USER,process.env.PASSWORD, {
    host: process.env.HOST ,
    port: process.env.PORT ,
    dialect: 'mysql'
})

//exportar o modulo de conexão com o banco de dados para poder utilizar no arquivo 
// index.js
module.exports = connection;