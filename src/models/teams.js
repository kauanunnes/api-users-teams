const { Sequelize, Model, DataTypes } = require('sequelize');
const database = require('../../db')

const Teams = database.define('Teams', {
  team_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
})

module.exports = Teams;
