// models/Post.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Add other necessary fields
  },
  {
    sequelize,
    modelName: 'post',
  }
);

module.exports = Post;
