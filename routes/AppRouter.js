const Router = require('express').Router()
const CategoryRouter = require('./CategoryRouter')
const ProductRouter = require('./ProductRouter')
const ReviewRouter = require('./ReviewRouter')
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/categories', CategoryRouter)
Router.use('/products', ProductRouter)
Router.use('/reviews', ReviewRouter)
Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
