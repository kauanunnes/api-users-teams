const express = require('express')
const usersController = require('../controllers/users')
const usersRouter = express.Router()

usersRouter.get('/', usersController.showAllUsers)
usersRouter.get('/:id', usersController.showUser)
usersRouter.get('/find/:situation', usersController.showUsersBySituation)
usersRouter.post('/', usersController.createUser)
usersRouter.put('/:id', usersController.updateUser)
usersRouter.delete('/:id', usersController.deleteUser)

module.exports = usersRouter