const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.get('/:id', controller.GetUserAndReviews)
Router.get('/:id/cart', controller.GetUserAndCart)
// Router.delete('/:id', controller.DeleteMyReview)

module.exports = Router