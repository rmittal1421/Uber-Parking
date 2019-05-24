const express = require('express')
const path = require('path')
const router = new express.Router()

const User = require('../models/users')

router.post('/signup', async (req, res) => {
    console.log('Creating a new account for a new user')
    const user = new User(req.body)
    console.log(req.body)
    try {
        await user.save()
        res.send(user)
        console.log('The user has been created')
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})

module.exports = router