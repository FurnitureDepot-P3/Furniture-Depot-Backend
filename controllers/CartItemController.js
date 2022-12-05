const { CartItem, Cart, Product} = require('../models')

const GetCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.findAll()
        res.send(cartItems)
    } catch (error) {
        throw error
    }
}

const GetCartItemsAndProducts = async (req, res) => {
    try {
        const cartItemAndProduct = await CartItem.findByPk(req.params.id, {
            include: [{ model: Product, as: 'cart_item'}]
        })
        res.send(cartItemAndProduct)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetCartItems,
    GetCartItemsAndProducts
}