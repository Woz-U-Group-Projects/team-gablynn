'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscribers = sequelize.define('Subscribers', {
    SubscriberID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    DateJoined: DataTypes.INTEGER
  },
  );
  Subscribers.associate = function(models) {
    // associations can be defined here
  };
  return Subscribers;
};