'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'users',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
      },
      name: {
        type: Sequelize.STRING,
        allowNULL: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNULL: false
      },
      password: {
        type: Sequelize.STRING,
        allowNULL: false
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
