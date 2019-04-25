const express = require('express')
const { Comment } = require('../models')

const CommentsRouter = express.Router()


// GET all genres
CommentsRouter.get('/', async (req, res) => {
  try {
    const commentsData =  await Comment.findAll();
    const comments = commentsData.map( comment => comment.dataValues)
    res.json({ comments})
  } catch (e) {
    console.log(e)
    res.json({
      error: e
    })
  }
})

CommentsRouter.post('/', async (req, res) => {
  try {
    const data = req.body
    const comment = await Comment.create(data)
    res.json({
      comment
    })
  } catch (e) {
    res.status(500).json({
      msg: e.message
    })
  }
})

module.exports = {
  CommentsRouter
}