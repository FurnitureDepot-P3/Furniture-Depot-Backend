const { Product, Review } = require('../models')

const GetProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.send(products)
    } catch (error) {
        throw error
    }
}

const GetProductAndReviews = async (req, res) => {
    try {
      const productAndReviews = await Product.findByPk(req.params.id, {
        include: [{ model: Review, as: 'reviews' }]
      })
      res.send(productAndReviews)
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    GetProducts,
    GetProductAndReviews,
}