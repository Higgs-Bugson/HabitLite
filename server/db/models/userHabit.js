const Sequelize = require('sequelize')
const db = require('../db')

const UserHabit = db.define('userHabit', {
    XP: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0
        }
    },
    HP: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0
        }
    },
    checked: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
})

module.exports = UserHabit

