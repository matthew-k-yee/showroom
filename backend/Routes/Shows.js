const express = require('express')
const { GenresRouter } = require('./Genres')
const { Show, Comment } = require('../models')

const ShowsRouter = express.Router()
ShowsRouter.use('/genres', GenresRouter)

// GET all shows 
ShowsRouter.get('/', async (req, res) => {
  try {
    const showData =  await Show.findAll();
    const shows = showData.map( show => show.dataValues)
    res.json({shows})
  } catch (e) {
    console.log(e)
    res.status(500).json({
      msg: e.message
    })
  } 
}) 

// GET one show
ShowsRouter.get('/:show_id', async (req, res) => {
  try { 
    const id = req.params.show_id;
    const show = await Show.findByPk(id);
    res.json({show})
  } catch(e) {
    console.log(e);
    res.status(500).json({
      msg: e.message
    })
  }
})

// GET all comments for one show
ShowsRouter.get('/:show_id/comments', async (req, res) => {
  try {
    const show = await Show.findByPk(req.param.show_id);
    const comment = await Comment.findByPk(req.body.showId)
    const allComments = await Show.findByPk(req.params.show_id, {
      include: [{
        model: Comment,
        attributes: ['comment_body']
      }]
    })
    res.json({allComments})
  } catch (e) {
    res.status(500).json({
      msg: e.message
    })
  }
})

// POST new show
ShowsRouter.post('/', async (req, res) => {
  try {
    const data = req.body
    const show = await Show.create(data)
    res.json({show})
  } catch (e) {
    res.status(500).json({
      msg: e.message
    })
  }
})




module.exports = {
  ShowsRouter
}