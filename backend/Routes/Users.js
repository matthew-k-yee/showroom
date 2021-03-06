const express = require('express')
const { User, Show } = require('../models')

const UsersRouter = express.Router()

// GET all users 
UsersRouter.get('/', async(req, res) => {
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
UsersRouter.get('/:user_id', async (req, res) => {
	try {
		const id = req.params.user_id;
    const resp = await User.findByPk(id);
    const user = resp.dataValues
		res.json({user});
	} catch (e) {
    res.status(500).json({
      msg: e.message
    })
  }
});

// POST new user
UsersRouter.post('/', async (req, res) => {
  try {
    const data = req.body
    const user = await User.create(data)
    res.json({user})
  } catch (e) {
    res.status(500).json({
      msg: e.message
    })
  }
})

UsersRouter.get('/:user_id/shows', async (req, res) => {
  try { 
    const user = await User.findByPk(req.params.user_id);
    const show = await Show.findByPk(req.body.userId);
    const singleUser = await User.findByPk(req.params.user_id, {
      include: [{
        model: Show,
        attributes: ['id', 'title', 'img_url', 'genreId']
      }]
    })
    res.json({singleUser})
  } catch (e) {
    res.status(500).json({
      msg: e.message
    })
  }
})

module.exports = {
  UsersRouter
}