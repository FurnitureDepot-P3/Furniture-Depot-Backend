const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.get('/', controller.GetCarts)
Router.get('/:id', controller.GetCartAndUsers)
Router.get('/:id/items',controller.GetCartAndCartItems)

module.exports = Router