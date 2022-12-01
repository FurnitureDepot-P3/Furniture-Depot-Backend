const Router = require('express').Router()
const CategoryRouter = require('./CategoryRouter')
const ProductRouter = require('./ProductRouter')
const ReviewRouter = require('./ReviewRouter')
const UserRouter = require('./UserRouter')

Router.use('/categories', CategoryRouter)
Router.use('/products', ProductRouter)
Router.use('/reviews', ReviewRouter)
Router.use('/users', UserRouter)

module.exports = Router