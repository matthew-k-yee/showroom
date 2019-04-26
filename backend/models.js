const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'showcase.db',
  dialect: 'sqlite',
  storage: './showcase.db',
});

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true
  }
});

const Genre = sequelize.define('genre', {
  genre_name: {
    type: Sequelize.STRING,
    unique: true 
  }
});

const Show = sequelize.define('show', {
  title: Sequelize.STRING,
  img_url: Sequelize.STRING
});

const Comment = sequelize.define('comment', {
  comment_body: Sequelize.STRING
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