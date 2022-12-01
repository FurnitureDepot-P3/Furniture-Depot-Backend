const { User, Review } = require('../models')

const GetUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetUsers,
    
}