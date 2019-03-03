'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    PostID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    topic: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    Deleted: DataTypes.BOOLEAN
  }, {});
  
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};