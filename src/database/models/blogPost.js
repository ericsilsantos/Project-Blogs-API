const { DataTypes } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */

module.exports = (sequelize) => {
  const model = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model:'Users',
        key:'id',
      },
    },
    published: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, { tableName: 'BlogPosts', timestamps: false });
  model.associate = (models) => {
    model.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return model;
};