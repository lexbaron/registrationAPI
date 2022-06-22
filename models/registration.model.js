const { database, DataTypes } = require('../utils/database.util')

const Registration = database.define('register', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    entranceTime:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'working'
    }
})

module.exports = { Registration }