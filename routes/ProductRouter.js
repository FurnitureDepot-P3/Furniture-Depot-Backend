const Router = require('express').Router()
const controller = require('../controllers/ProductController')

Router.get('/', controller.GetProducts)
Router.get('/:id', controller.GetProductAndReviews)
Router.post('/:id/myreview', controller.CreateReview)

module.exports = Router