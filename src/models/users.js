const { Sequelize, Model, DataTypes } = require('sequelize');
const Teams = require('./teams')
const database = require('../../db')

const Users = database.define('Users', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
})

Users.belongsTo(Teams, {
  foreignKey: 'team_id'
})
module.exports = Users;
