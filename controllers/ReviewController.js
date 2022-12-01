const { Product, User, Review } = require('../models')

const GetReviews = async (req, res) => {
    try {
        const review = await Review.findAll()
        res.send(review)
    } catch (error) {
        throw error
    }
}

const DeleteReview = async (req, res) => {
    try {
      let reviewId = parseInt(req.params.id)
      await Review.destroy({where: { id: reviewId}})
      res.send({ message: `Deleted review with an id of ${reviewId}`})
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetReviews,
    DeleteReview
}