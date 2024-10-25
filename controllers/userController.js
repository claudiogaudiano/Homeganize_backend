const User = require('../models/User')

const createUser = async (req, res) => {
    try {
        const user = await User.create({ ...req.body })
        res.status(200).json({ msg: "ok", user: user })
    } catch (err) {
        res.status(500).json({ msg: "error", err: err })
    }
}

const loginUser = async (req, res) => {
    try {
         await User.findOne({
            username: req.body.username
          })
        res.status(200).json({ msg: "ok", user: user })
    } catch (err) {
        res.status(500).json({ msg: "error", err: err })
    }
}

module.exports = {
    createUser,
    loginUser,
}