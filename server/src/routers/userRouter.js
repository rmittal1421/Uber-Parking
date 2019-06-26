const express = require('express')
const router = new express.Router()

const User = require('../models/users')

router.post('/users/signup', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        console.log('The user has been created')
        res.send({
            user
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.checkCredentials(req.body.email, req.body.password)
        console.log('Login successful')
        res.send({
            user
        })
    } catch (error) {
        res.status(400).send({
            error: {
                message: error.message
            }
        })
    }
})

module.exports = router