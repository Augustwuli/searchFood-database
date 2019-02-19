'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'stars',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      note_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
      },
      auth_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('stars')
};
