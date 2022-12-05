const Router = require('express').Router()
const CategoryRouter = require('./CategoryRouter')
const ProductRouter = require('./ProductRouter')
const ReviewRouter = require('./ReviewRouter')
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')
const CartRouter = require('./CartRouter')
const CartItemRouter = require('./CartItemRouter')

Router.use('/categories', CategoryRouter)
Router.use('/products', ProductRouter)
Router.use('/reviews', ReviewRouter)
Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)
Router.use('/carts', CartRouter)
Router.use('/cartitems', CartItemRouter)

module.exports = Router
