'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}; 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'notes',
    [
      { id: 1, auth_id: 1, title: '我是第一篇文章', read_num: 2, star_num: 2, content: '', thumb_url: 'test.jpg', ...timestamps},
      { id: 2, auth_id: 1, title: '我是第二篇文章', read_num: 0, star_num: 1, content: '', thumb_url: 'test.jpg', ...timestamps},
    ]
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('notes', { id: { [Op.in]: [1, 2] } },{});
  },
};
