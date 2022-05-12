const express = require('express')
const teamsRouter = express.Router()
const teamsController = require("../controllers/teams")

teamsRouter.get('/', teamsController.showAllTeams)
teamsRouter.get('/:id', teamsController.showTeam)
teamsRouter.get('/find/:situation', teamsController.showTeamsBySituation)
teamsRouter.post('/', teamsController.createTeam)
teamsRouter.put('/:id', teamsController.updateTeam)
teamsRouter.delete('/:id', teamsController.deleteTeam)

module.exports = teamsRouter