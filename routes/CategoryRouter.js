const Router = require('express').Router()
const controller = require('../controllers/CategoryController')

Router.get('/', controller.GetCategories)
Router.get('/products', controller.GetAllCategoriesAndAllProducts)
Router.get('/:id', controller.GetCategoryAndProducts) 

module.exports = Router