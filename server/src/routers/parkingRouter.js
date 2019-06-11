const express = require('express');
const router = new express.Router()

const ParkingAd = require('../models/parking')

/*
required routes:
->Post an ad -> Done
->Get all ads of a particular user -> Done
->Get an id by id -> Done
->Edit an ed by id
->Delete an ad by id -> Done
->Add images
->Delete images
*/

/**
 * Endpoint to create a new ad
 * It requires a request to contain a json body with atleast the required field for a parking ad
 * TODO: Make a seperate validator to validate the req coming in to differentiate between server and client errors
 */
router.post('/parking/newAd', async (req, res) => {
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

/**
 * Endpoint to get all the parking ads in the database
 */
router.get('/parking/ads', async (req, res) => {
    try {
        const ads = await ParkingAd.find({})
        res.status(200).send({
            ads
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
})

router.get('/parking/myads/:userId', async (req, res) => {
    try {
        const myAds = await ParkingAd.find({
            owner: req.params.userId
        })
        res.status(200).send({
            myAds
        })
    } catch (error) {
        res.status(400).send({
            error: error.message
        })
    }
})

/**
 * Endpoint to get a particular ad by its id of a particular user
 * Request needs to have the id of the user
 * Id of the ad is send in the params for the route
 */
router.get('/parking/myads/:_id/:userId', async (req, res) => {
    try {
        console.log(req.body)
        const ad = await ParkingAd.findOne({
            _id: req.params._id,
            owner: req.params.userId
        })
        res.status(200).send({
            ad
        })
    } catch (error) {
        res.status(400).send({
            error: error.message
        })
    }
})

/**
 * Endpoint to delete a particular ad (by id) for a particular user
 * Request needs to have the id of the user
 * Id of the ad is send in the params for the route
 */
router.delete('/parking/myads/:_id/:userId', async (req, res) => {
    try {
        const result = await ParkingAd.deleteOne({
            _id: req.params._id,
            owner: req.params.userId
        })
        res.status(200).send({
            result
        })
    } catch (error) {
        res.status(400).send({
            error: error.message
        })
    }
})

/**
 * Endpoint to edit a particular ad posted by a particular user
 */
router.patch('/parking/myads/:_id/:userId', async (req, res) => {
    const updatesRequested = Object.keys(req.body)
    const allowedUpdates = ['description', 'location', 'numberOfDays', 'price']
})

module.exports = router