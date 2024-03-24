const express = require('express')
const router = express.Router()
const userController = require('../userAccountManagement/userController')

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router
