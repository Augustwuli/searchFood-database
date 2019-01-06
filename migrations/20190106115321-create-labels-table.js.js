'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'labels',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNULL: false
      },
      num: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('labels')
};
