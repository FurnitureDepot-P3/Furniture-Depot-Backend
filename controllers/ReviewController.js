const { Product, User, Review } = require('../models')

const GetReviews = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.review_id)
        res.send(review)
    } catch (error) {
        throw error
    }
}

const UpdateReview = async (req, res) => {
    try {
      let reviewId = parseInt(req.params.reviews_id)
      let updatedReview = await Review.update(req.body, {
        where: { id: reviewId },
        returning: true
      })
      res.send(updatedReview)
    } catch (error) {
      throw error
    }
  }

const DeleteReview = async (req, res) => {
    try {
      let reviewId = parseInt(req.params.reviews_id)
      await Review.destroy({where: { id: reviewId}})
      res.send({ message: `Deleted review with an id of ${reviewId}`})
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetReviews,
    UpdateReview,
    DeleteReview
}