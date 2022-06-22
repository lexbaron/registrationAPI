const { Sequelize, DataTypes } = require('sequelize')

const database = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'asde234',
    port: '5432',
    database: 'registrations',
    logging: false
    
})

module.exports = { database, DataTypes }