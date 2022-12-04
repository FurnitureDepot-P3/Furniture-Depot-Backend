const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.get('/', controller.GetCarts)
Router.get('/:id', controller.GetCartAndUsers) 

module.exports = Router