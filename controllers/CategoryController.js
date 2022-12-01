const { Category, Product } = require('../models')

const GetCategories = async (req, res) => {
    try {
        const categories = await Category.findAll()
        res.send(categories)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetCategories,
}