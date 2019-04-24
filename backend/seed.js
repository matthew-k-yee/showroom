const { sequelize, User, Genre, Show} = require('./models');

async function seed() {
  try {
    const user = await User.bulkCreate([
      {
        username: 'mky123'
      },
      {
        username: 'jdy456'
      },
      {
        username: 'wck789'
      }
    ]);

    const genre = await Genre.bulkCreate([
      {
        genre_name: 'Drama'
      }, 
      {
        genre_name: 'Family'
      },
      {
        genre_name: 'Comedy'
      },
      {
        genre_name: 'Fantasy'
      }
    ]);

    const show = await Show.bulkCreate([
      {
        title: 'Game of Thrones',
        img_url: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg',
        genre_id: 4
      },
      {
        title: 'Brooklyn 99',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brooklyn_Nine-Nine_Logo.png/500px-Brooklyn_Nine-Nine_Logo.png',
        genre_id: 3
      },
      
      {
        title: 'Peaky Blinders',
        img_url: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Peaky_Blinders_titlecard.jpg',
        genre_id: 1
      }
    ]);

    // const comment = await Comment.bulkCreate ([
    //   {

    //   }
    // ])

  }
  
  catch(evt) {
    console.error(evt);
  }
  finally {
    process.exit();
  }
}

seed();