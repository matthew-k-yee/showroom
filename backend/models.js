const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'showcase.db',
  dialect: 'sqlite',
  storage: './showcase.db',
});

const User = sequelize.define('user', {
  username: Sequelize.STRING
});

const Genre = sequelize.define('genre', {
  genre_name: Sequelize.STRING
});

const Show = sequelize.define('show', {
  title: Sequelize.STRING,
  img_url: Sequelize.STRING,
  // user_id: Sequelize.INTEGER,
  // genre_id: Sequelize.INTEGER,
});

const Comment = sequelize.define('comment', {
  comment_body: Sequelize.STRING,
  // user_id : Sequelize.INTEGER,
  // show_id: Sequelize.INTEGER,
});


Genre.hasMany(Show)
Show.belongsTo(Genre);

User.hasMany(Show)
Show.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User);

Show.hasMany(Comment)
Comment.belongsTo(Show)


module.exports = {
  sequelize,
  User,
  Genre,
  Show,
  Comment
};