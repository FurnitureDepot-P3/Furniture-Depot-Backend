const { Product, Review } = require('../models')

const GetProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.send(products)
    } catch (error) {
        throw error
    }
}

const GetAllProductsAndAllReviews = async (req, res) => {
  try {
    const allProdAndReviews = await Product.findAll({ 
      include: { model: Review, as: 'reviews' }
    })
    res.send(allProdAndReviews)
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

  const CreateReview = async (req, res) => {
    try {
        let productId = parseInt(req.params.product_id)
        let reviewBody = {productId, ...req.body}
        let review = await Review.create(reviewBody)
        res.send(review)
    } catch (error) {
        throw error
    }
}

  module.exports = {
    GetProducts,
    GetAllProductsAndAllReviews,
    GetProductAndReviews,
    CreateReview
}