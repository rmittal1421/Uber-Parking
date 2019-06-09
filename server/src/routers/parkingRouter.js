const express = require('express');
const router = new express.Router()

const ParkingAd = require("../models/parking")

/*
required routes:
->Post an ad
->Get and id by id
->Edit an ed by id
->Delete an ad by id
->Add images
->Delete images
->Get user's ad
*/

router.post('/parking/newAd', async (req, res) => {
    console.log(req.body)
    const newAd = new ParkingAd({
        owner: req.body.user._id,
        ...req.body,
    })
    try {
        const ad = await newAd.save()
        res.status(201).send({
            ad
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
})

module.exports = router