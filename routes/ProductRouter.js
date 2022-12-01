const Router = require('express').Router()
const controller = require('../controllers/ProductController')

Router.get('/', controller.GetProducts)
Router.get('/:prod_id', controller.GetProductAndReviews)

module.exports = Router