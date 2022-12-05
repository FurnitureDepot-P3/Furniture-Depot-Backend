const { Cart, User } = require('../models')

const GetCarts = async (req, res) => {
    try {
        const carts = await Cart.findAll()
        res.send(carts)
    } catch (error) {
        throw error
    }
}

const GetCartAndUsers = async (req, res) => {
    try {
      const cartAndUsers = await Cart.findByPk(req.params.id, {
        include: [{ model: User, as: 'cart' }]
      })
      res.send(cartAndUsers)
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetCarts,
    GetCartAndUsers
}