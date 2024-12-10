const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Speaker = sequelize.define('Speaker', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expertise: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sessionPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'speakers', // Explicit table name
  timestamps: true,
});

module.exports = Speaker;
