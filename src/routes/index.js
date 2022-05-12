const express = require('express')
const teamsRouter = require('./teamsRoutes')
const Router = express.Router()
const usersRouter = require('./usersRoutes')

Router.use("/users", usersRouter)
Router.use("/teams", teamsRouter)
Router.use("", (req, res) => {
  res.send("server is working.")
})

module.exports = Router