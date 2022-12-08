const Router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

// Router.get('/', controller.GetReviews)

Router.get('/view/:reviews_id:', controller.GetReviews)

// Router.post('/', 
// middleware.stripToken,
// middleware.verifyToken,
// controller.CreateReview)

Router.put('/:reviews_id', 
middleware.stripToken,
middleware.verifyToken,
controller.UpdateReview)

Router.delete('/:reviews_id', 
// middleware.stripToken,
// middleware.verifyToken,
controller.DeleteReview)

module.exports = Router