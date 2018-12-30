'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('users', 'gender', { type: Sequelize.STRING}),
    queryInterface.addColumn('users', 'signature', { type: Sequelize.STRING}),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('users', 'gender'),
    queryInterface.removeColumn('users', 'signature'),
  ]),
};
