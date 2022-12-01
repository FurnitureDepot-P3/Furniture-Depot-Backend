const Router = require('express').Router()
const controller = require('../controllers/CategoryController')

Router.get('/', controller.GetCategories)  

module.exports = Router