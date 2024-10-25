const express = require('express')
const User = require('../models/User');
const HomeGroup = require('../models/HomeGroup');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Home'})
})

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

module.exports = router