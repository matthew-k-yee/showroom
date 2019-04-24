const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
// import db from 'sqlite'; 
const { User, Genre, Show } = require('./models')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
  res.send('bpop!')
})

// GET all users 
app.get('/users/', async (req, res) => {
  try { 
    const usersData = await User.findAll()
    const users = usersData.map( user => user.dataValues)
    res.json({users})
  } catch (e) {
    console.log(e) 
    res.json({
      error: e
    })
  }
})

// GET single user
app.get('/users/:user_id', async (req, res) => {
	try {
		const id = parseInt(req.params.user_id);
		const user = await User.findByPk(id);
		res.json({user: user.dataValues});
	} catch(e) {
		console.log(e);
		res.send(404);
	}
});

// GET all genres
app.get('/genres', async (req, res) => {
  try {
    const genresData =  await Genre.findAll();
    const genres = genresData.map( genre => genre.dataValues)
    res.json({ genres})
  } catch (e) {
    console.log(e)
    res.json({
      error: e
    })
  }
})

app.post('/users', async (req, res) => {
  try {
    const data = req.body
    const user = await User.create(data)
    res.json({
      user
    })
  } catch (e) {
    res.status(500).json({
      msg: e.message
    })
  }
})

// app.get('/genres/:genre_id', async (req, res) => {
//   try { 
//     const id = parseInt(req.params.genre_id);
//     const genre = await Genre.findByPk(id);
//     res.json({
//       genre: genre.dataValues
//     })
//   } catch(e) {
//     console.log(e)
//     res.send(404)
//   }
// });

// GET all shows 
app.get('/tvshows', async (req, res) => {
  try {
    const showData =  await Show.findAll();
    const shows = showData.map( show => show.dataValues)
    res.json({ shows })
  } catch (e) {
    console.log(e)
    res.json({
      error: e
    })
  }
}) 

// GET one show
app.get('/tvshows/:show_id', async ( req, res) => {
  try { 
    const id = req.params.show_id;
    const show = await Show.findByPk(id);
    res.json({
      show: show
    })
  } catch(e) {
    console.log(e);
    res.send(404)
  }
})


app.get('/tvshows/:genre_id/', async ( req, res) => {
  try { 
    const id = req.params.show_id;
    const show = await Show.findByPk(id);
    res.json({
      show: show
    })
  } catch(e) {
    console.log(e);
    res.send(404)
  }
})

app.get('/comments', (req, res) => {
  res.send('this is comments')
})