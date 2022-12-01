const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.get('/:id', controller.GetUserAndReviews)

module.exports = Router