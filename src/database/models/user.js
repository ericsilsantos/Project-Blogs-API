const { Sequelize } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */

module.exports = (sequelize) => {
  const model = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    displayName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    image: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, { tableName: 'Users'})
  return model;
};