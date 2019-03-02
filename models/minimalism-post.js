'use strict';
module.exports = (sequelize, DataTypes) => {
  var MinimalismPost = sequelize.define('MinimalismPost', {
    PostId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    PostBody: DataTypes.STRING,
    PostTitle: DataTypes.STRING,
    Image: DataTypes.STRING,
    Topic: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    Deleted: DataTypes.BOOLEAN
  }, {});
  
  MinimalismPost.associate = function(models) {
    // associations can be defined here
  };
  return MinimalismPost;
};