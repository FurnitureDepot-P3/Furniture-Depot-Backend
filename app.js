const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AppRouter = require('./routes/AppRouter')
const CategoryRouter = require('./routes/CategoryRouter')
const ProductRouter = require('./routes/ProductRouter')
const ReviewRouter = require('./routes/ReviewRouter')
const UserRouter = require('./routes/UserRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/categories', CategoryRouter)
app.use('/products', ProductRouter)
app.use('/reviews', ReviewRouter)
app.use('/users', UserRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
