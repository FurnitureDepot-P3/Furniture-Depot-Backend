const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.get('/', controller.GetCarts)
Router.get('/items', controller.GetCartAndCartItems)
Router.get('/:id/items', controller.GetCartAndCartItems)


module.exports = Router