const { User, Review } = require('../models')

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

module.exports = {
    GetUsers,
    GetUserAndReviews
}