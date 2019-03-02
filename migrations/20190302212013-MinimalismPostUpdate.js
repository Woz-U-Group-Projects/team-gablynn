'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('MinimalismPost', 'PostTitle', Sequelize.STRING, {
        allowNull: true
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn('MinimalismPost', 'PostTitle')];
  }
};