const Users = require('../models/users')

const UsersController = {
  createUser: async (req, res) => {
    let { name, password, login, team_id, active } = req.body
    try {
      const result = await Users.create({
        name,
        password,
        login,
        team_id,
        active,
        updatedAt: new Date(),
        createdAt: new Date()
      })
      console.log(result)
      res.send('User created successfully.')
    } catch (error) {
      console.log(error)
      res.status(401).send('Error!')
    }
  },
  showAllUsers: async (req, res) => {
    try {
      const result = await Users.findAll()
      res.send(result)
    } catch (error) {
      console.log(error)
      res.status(401).send('Error!')   
    }
  },
  showUser: async (req, res) => {
    const {id} = req.params
    try {
      const result = await Users.findByPk(id)
      if (!result) {
        res.status(400).send("This User wasn't find.")
        return
      }
      res.send(result)
    } catch (error) {
      res.status(401).send('Error!') 
      console.log(error)
      return
    }
  },
  updateUser: async (req, res) => {
    const { id } = req.params
    let { name, password, login, team_id, active } = req.body

    try {
      const user = await Users.findByPk(id)
      if (!user) {
        res.status(400).send("This User wasn't find.")
        return
      }
      user.set({
        name,
        password,
        login,
        team_id,
        active,
        updatedAt: new Date(),
        createdAt: new Date()
      })
      const result = await user.save()
      res.send(result)
    } catch (error) {
      res.status(401).send('Error!') 
      console.log(error)
      return
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params

    try {
      const user = await Users.findByPk(id)
      if (!user) {
        res.status(400).send("This User wasn't find.")
        return
      }
      user.set({
        active: 0,
        updatedAt: new Date()
      })
      const result = await user.save()
      res.send("This User was delete.")
    } catch (error) {
      res.status(401).send('Error!') 
      console.log(error)
      return
    }
  },
  showUsersBySituation: async (req, res) => {
    let { situation } = req.params
    try {
      let active = situation === 'active' ? 1 : 0
      const result = await Users.findAll({
        where: {
          active
        }
      })
      res.send(result)
    } catch (error) {
      res.status(401).send('Error!')
      console.log(error)

    }
  }
}

module.exports = UsersController
