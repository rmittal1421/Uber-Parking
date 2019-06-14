const express = require('express');
const router = new express.Router()

const ParkingAd = require('../models/parking')
const {
    validateIds,
    validateUpdate
} = require('../middlewares/parkingHandlers')

/*
required routes:
->Post an ad -> Done
->Get all ads of a particular user -> Done
->Get an id by id -> Done
->Edit an ed by id -> Done
->Delete an ad by id -> Done
->Add images
->Delete images
*/

/**
 * Endpoint to create a new ad
 * It requires a request to contain a send body with atleast the required field for a parking ad
 * TODO: Make a seperate validator to validate the req coming in to differentiate between server and client errors
 */
router.post('/parking/newAd/:userId', validateIds, async (req, res, next) => {
    const newAd = new ParkingAd({
        owner: req.params.userId,
        ...req.body,
    })
    try {
        const ad = await newAd.save()
        res.status(201).json({
            ad
        })
    } catch (error) {
        next({
            message: error.message,
            status: 400
        })
    }
}, ((error, req, res, next) => {
    res.status(error.status).json(error)
}))

/**
 * Endpoint to get all the parking ads in the database
 */
router.get('/parking/ads', async (req, res, next) => {
    try {
        const ads = await ParkingAd.find({})
        res.status(200).json({
            ads
        })
    } catch (error) {
        next({
            message: error.message,
            status: 400
        })
    }
}, ((error, req, res, next) => {
    res.status(error.status).json(error)
}))

router.get('/parking/myads/:userId', validateIds, async (req, res, next) => {
    try {
        const myAds = await ParkingAd.find({
            owner: req.params.userId
        })
        res.status(200).json({
            myAds
        })
    } catch (error) {
        next({
            message: error.message,
            status: 400
        })
    }
}, ((error, req, res, next) => {
    res.status(error.status).json(error)
}))

/**
 * Endpoint to get a particular ad by its id of a particular user
 * Request needs to have the id of the user
 * Id of the ad is sent in the params for the route
 */
router.get('/parking/myads/:_id/:userId', validateIds, async (req, res, next) => {
    try {
        console.log(req.body)
        const ad = await ParkingAd.findOne({
            _id: req.params._id,
            owner: req.params.userId
        })
        res.status(200).json({
            ad
        })
    } catch (error) {
        next({
            message: error.message,
            status: 400
        })
    }
}, ((error, req, res, next) => {
    res.status(error.status).json(error)
}))

/**
 * Endpoint to delete a particular ad (by id) for a particular user
 * Request needs to have the id of the user
 * Id of the ad is sent in the params for the route
 */
router.delete('/parking/myads/:_id/:userId', validateIds, async (req, res, next) => {
    try {
        const result = await ParkingAd.deleteOne({
            _id: req.params._id,
            owner: req.params.userId
        })
        res.status(200).json({
            result
        })
    } catch (error) {
        next({
            message: error.message,
            status: 500
        })
    }
}, ((error, req, res, next) => {
    res.status(error.status).json(error)
}))

/**
 * Endpoint to edit a particular ad posted by a particular user
 * //TODO: When the user updates the location of an ad and when we have the coordinates model setup,
 * we need to update the corresponding coordinates in the database using save middleware
 * We need to check if the ids of parking and the user are in right format too or not
 */
router.patch('/parking/myads/:_id/:userId', validateIds, validateUpdate, async (req, res, next) => {
    try {
        const ad = await ParkingAd.findOne({
            _id: req.params._id,
            owner: req.params.userId
        })

        if (!ad) {
            next({
                message: 'No data available',
                status: 404
            })
        }
        req.updatesRequested.forEach((update) => {
            ad[update] = req.body[update]
        })
        await ad.save()
        res.status(201).json({
            ad
        })
    } catch (error) {
        next({
            message: error.message,
            status: 500
        })
    }
}, ((error, req, res, next) => {
    res.status(error.status).json(error)
}))

module.exports = router