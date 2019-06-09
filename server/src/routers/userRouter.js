const express = require('express');
const router = new express.Router()

const User = require("../models/users")

router.post("/user/signup", async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.send(user)
        console.log("The user has been created")
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
});

router.post("/user/login", async (req, res) => {
    try {
        const user = await User.checkCredentials(req.body.email, req.body.password)
        res.send({
            user
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
});

module.exports = router;