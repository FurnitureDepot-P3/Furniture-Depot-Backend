const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)

module.exports = Router