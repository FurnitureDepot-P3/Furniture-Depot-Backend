const { Cart, CartItem, User } = require('../models')

const GetCarts = async (req, res) => {
    try {
        const carts = await Cart.findAll()
        res.send(carts)
    } catch (error) {
        throw error
    }
}

  const GetCartAndCartItems = async (req, res) => {
    try {
      const cartAndItems = await Cart.findByPk(req.params.id, {
        include: [{ model: CartItem, as: 'my_cart' }]
      })
      res.send(cartAndItems)
    } catch (error) {
      throw error
    }
  }


module.exports = {
    GetCarts,
    GetCartAndCartItems
}