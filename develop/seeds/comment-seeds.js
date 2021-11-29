const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Great idea.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Congratulations.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Spot on.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'There is a great article in NYT about this.',
    user_id: 3,
    post_id: 18
  },
  ];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
