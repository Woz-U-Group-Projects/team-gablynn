'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Posts', 'createdAt', Sequelize.DATE, {
          allowNull: false, 
        }
      ),
      queryInterface.addColumn('Posts', 'updatedAt', Sequelize.DATE, {
          allowNull: false,
        }
      ),
      queryInterface.addColumn('Posts', 'Deleted', Sequelize.BOOLEAN
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Posts', 'createdAt'),
      queryInterface.removeColumn('Posts', 'updatedAt'),
      queryInterface.removeColumn('Posts', 'Deleted')
    ];
  }
};