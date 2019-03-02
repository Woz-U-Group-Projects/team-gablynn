'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MinimalismPost', {
      PostId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PostBody: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      Deleted: {
        type: Sequelize.BOOLEAN
      },
      Image: {
        type: Sequelize.STRING
      },
      Topic: {
        type: Sequelize.STRING 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MinimalismPost');
  }
};
/*'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('MinimalismPost', 
    

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('MinimalismPost');
    
  }
};
*/