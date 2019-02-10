'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Subscribers', {
      SubscriberID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      FirstName: Sequelize.STRING,
      LastName: Sequelize.STRING,
      Email: Sequelize.STRING,
      DateJoined: Sequelize.INTEGER
      },
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Subscribers");
  }
};
