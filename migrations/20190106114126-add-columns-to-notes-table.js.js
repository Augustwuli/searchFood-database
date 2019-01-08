'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('notes', 'comment_num', { type: Sequelize.INTEGER, defaultValue: 0}),
    queryInterface.addColumn('notes', 'labels', { type: Sequelize.STRING}),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('notes', 'comment_num'),
    queryInterface.removeColumn('notes', 'signature'),
  ]),
};
 