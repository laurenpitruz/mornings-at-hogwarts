const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  cityName: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.STRING
  }
})

module.exports = User
