const { Sequelize } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */

module.exports = (sequelize) => {
  const model = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, { tableName: 'Categories', timestamps: false },)
  return model;
};