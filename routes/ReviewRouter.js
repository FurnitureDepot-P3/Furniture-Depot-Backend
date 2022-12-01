const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/', controller.GetReviews)
// Router.post('/:prod_id', controller.CreateReview)
// Router.delete('/:id', controller.DeleteReview)

module.exports = Router