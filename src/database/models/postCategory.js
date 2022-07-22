'use strict';
const { DataTypes } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize 
 */

module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model:'BlogPosts',
        key:'id',
      }
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model:'Categories',
        key:'id',
      }
    },
  }, { 
    tableName: 'PostCategories',
    timestamps: false
  }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: models.PostCategory,
      as: 'category',
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: models.PostCategory,
      as: 'post',
    });
  };
  return PostCategory;
};