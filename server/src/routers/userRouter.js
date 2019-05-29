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

// router.get('/login', (req, res) => {
//     res.send('Req for login')
// })

router.post('/users/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.findOne({
            email
        })
        console.log(user)
        if (!user) {
            throw new Error('Invalid operetion at user')
        }
        console.log(user.password)
        console.log(password)

        if (user.password != password) {
            throw new Error('Invalid operation at password')
        }
        res.status(200).send(user)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports = router