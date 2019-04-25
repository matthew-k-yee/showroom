const { sequelize, User, Genre, Show, Comment} = require('./models');

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
        userId: 1,
        genreId: 4
      },
      {
        title: 'Brooklyn 99',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brooklyn_Nine-Nine_Logo.png/500px-Brooklyn_Nine-Nine_Logo.png',
        userId: 2,
        genreId: 3
      },
      
      {
        title: 'Peaky Blinders',
        img_url: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Peaky_Blinders_titlecard.jpg',
        userId: 3,
        genreId: 1
      }
    ]);

    const comment = await Comment.bulkCreate ([
      {
        comment_body: 'WINTER IS COMING!',
        userId: 1,
        showId: 1
      },
      {
        comment_body: 'BEND THE KNEE!',
        userId: 3,
        showId: 1
      },
      {
        comment_body: 'TERRY LOVES HIS YOGURT',
        userId: 2,
        showId: 2
      },
      {
        comment_body: 'PEAKY F**** BLINDERS',
        userId: 1,
        showId: 3
      },
    ])

  }
  
  catch(evt) {
    console.error(evt);
  }
  finally {
    process.exit();
  }
}

seed();