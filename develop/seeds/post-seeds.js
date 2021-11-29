const { Post } = require('../models');

const postdata = [
  {
    title: 'Faster with Tech.',
    post_url: 'aljdflajflsjfljl fjldjlfjflsdjfal',
    user_id: 1
  },
  {
    title: 'Can you read this.',
    post_url: 'sdkfjljlkadfjlakdfjlakdjflsdjflsdk',
    user_id: 2
  },
  {
    title: 'Running out of ideas.',
    post_url: 'sfjlsdfjlsdkflkdjlfjldjladjfldkjlgfsdj',
    user_id: 3
  },
  {
    title: 'For Seed Titles.',
    post_url: 'dasfksahfkashfdashfkjdfhdkjhaksdfs',
    user_id: 4
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
