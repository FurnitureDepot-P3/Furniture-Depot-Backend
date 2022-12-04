const Router = require('express').Router()
const CategoryRouter = require('./CategoryRouter')
const ProductRouter = require('./ProductRouter')
const ReviewRouter = require('./ReviewRouter')
const UserRouter = require('./UserRouter')
const CartRouter = require('./CartRouter')

Router.use('/categories', CategoryRouter)
Router.use('/products', ProductRouter)
Router.use('/reviews', ReviewRouter)
Router.use('/users', UserRouter)
Router.use('/carts', CartRouter)

module.exports = Router
