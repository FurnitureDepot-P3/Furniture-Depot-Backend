const { User, Review, Cart } = require('../models')

const GetUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

const GetUserAndReviews = async (req, res) => {
    try {
      const userAndReviews = await User.findByPk(req.params.id, {
        include: [{ model: Review, as: 'myReviews' }]
      })
      res.send(userAndReviews)
    } catch (error) {
      throw error
    }
}

const GetUserAndCart = async (req, res) => {
  try {
    const userAndCart = await User.findByPk(req.params.id, {
      include: [{ model: Cart, as: 'cart' }]
    })
    res.send(userAndCart)
  } catch (error) {
    throw error
  }
}

// const DeleteMyReview = async (req, res) => {
//   try {
//     let reviewId = parseInt(req.params.id)
//     await Review.destroy({where: { id: reviewId}})
//     res.send({ message: `Deleted review with an id of ${reviewId}`})
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
    GetUsers,
    GetUserAndReviews,
    GetUserAndCart
    // DeleteMyReview
}