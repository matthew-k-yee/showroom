const express = require('express')
const { Genre, Show } = require('../models')

const GenresRouter = express.Router()


// GET all genres
GenresRouter.get('/', async (req, res) => {
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

// GET one genre
GenresRouter.get('/:genre_id', async (req, res) => {
  try { 
    const id = (req.params.genre_id);
    const genre = await Genre.findByPk(id);
    res.json({
      genre: genre.dataValues
    })
  } catch(e) {
    console.log(e)
    res.send(404)
  }
});

GenresRouter.get('/:genre_id/shows', async (req, res) => {
  try { 
    const genre = await Genre.findByPk(req.params.genre_id);
    const show = await Show.findByPk(req.body.genreId);
    const singleGenre = await Genre.findByPk(req.params.genre_id, {
      include: [{
        model: Show,
        attributes: ['title']
      }]
    })
    res.json(singleGenre)
  } catch (e) {
    res.status(500).json({
      msg: e.message
    })
  }
})


module.exports = {
  GenresRouter
}