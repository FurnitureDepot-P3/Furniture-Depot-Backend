const { Category, Product } = require('../models')

const GetCategories = async (req, res) => {
    try {
        const categories = await Category.findAll()
        res.send(categories)
    } catch (error) {
        throw error
    }
}

const GetAllCategoriesAndAllProducts = async (req, res) => {
  try {
    const allCategoriesAndProducts = await Category.findAll({ 
      include: { model: Product, as: 'products' }
    })
    res.send(allCategoriesAndProducts)
  } catch (error) {
    throw error
  }
}

const GetCategoryAndProducts = async (req, res) => {
    try {
      const categoryAndProducts = await Category.findByPk(req.params.id, {
        include: [{ model: Product, as: 'products' }]
      })
      res.send(categoryAndProducts)
    } catch (error) {
      throw error
    }
  }

module.exports = {
    GetCategories,
    GetAllCategoriesAndAllProducts,
    GetCategoryAndProducts
}