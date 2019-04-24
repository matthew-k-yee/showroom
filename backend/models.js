const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'showcase.db',
  dialect: 'sqlite',
  storage: './showcase.db',
  // operatorsAliases: false
});

const User = sequelize.define('user', {
  username: Sequelize.STRING
});

const Genre = sequelize.define('genre', {
  genre_name: Sequelize.STRING
});

const Show = sequelize.define('show', {
  title: Sequelize.STRING,
  img_url: Sequelize.STRING
});

// const Comment = sequelize.define('comment', {
//   comment_body: Sequelize.STRING
// });

Show.hasMany(User);
Show.belongsTo(Genre);

// Comment.belongsTo(User);
// Comment.belongsTo(Show)


module.exports = {
  sequelize,
  User,
  Genre,
  Show,
  // Comment
};