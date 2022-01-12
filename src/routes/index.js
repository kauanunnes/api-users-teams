const express = require('express')
const Router = express.Router()
const TeamsController = require('../controllers/teams')
const UsersController = require('../controllers/users')

Router.get('/users/', UsersController.showAllUsers)
Router.get('/users/:id', UsersController.showUser)
Router.get('/users/find/:situation', UsersController.showUsersBySituation)
Router.post('/users/', UsersController.createUser)
Router.put('/users/:id', UsersController.updateUser)
Router.delete('/users/:id', UsersController.deleteUser)

Router.get('/teams/', TeamsController.showAllTeams)
Router.get('/teams/:id', TeamsController.showTeam)
Router.get('/teams/find/:situation', TeamsController.showTeamsBySituation)
Router.post('/teams/', TeamsController.createTeam)
Router.put('/teams/:id', TeamsController.updateTeam)
Router.delete('/teams/:id', TeamsController.deleteTeam)

module.exports = Router