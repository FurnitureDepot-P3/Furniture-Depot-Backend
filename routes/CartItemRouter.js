const Router = require('express').Router()
const controller = require('../controllers/CartItemController')

Router.get('/', controller.GetCartItems)
Router.get('/:id', controller.GetCartItemsAndProducts) 

module.exports = Router