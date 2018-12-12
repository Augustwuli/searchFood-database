'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'notes',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      auth_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      read_num:{
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      star_num: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      content: {
        type: Sequelize.STRING,
        defaultValue:''
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('notes')
};
