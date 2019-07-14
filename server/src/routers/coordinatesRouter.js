const express = require('express')
const router = new express.Router()

const Coordinates = require('../models/coordinates')

const coordinatesValidator = require('../middlewares/coordinatesHandlers')

//The distance should be in meters from which we need to find the parking ads
router.get('/search', coordinatesValidator, async (req, res, next) => {
    const longitude = req.query.longitude
    const latitude = req.query.latitude

    try {
        let parkingAds = await Coordinates.find({
                location: {
                    $nearSphere: {
                        $geometry: {
                            type: "Point",
                            coordinates: [longitude, latitude],
                        },
                        $minDistance: 0,
                        $maxDistance: req.query.distance
                    }
                }
            })
            .populate('parkingId')

        parkingAds = parkingAds.map((ad) => {
            return {
                coordinates: ad.location.coordinates,
                parkingAd: ad.parkingId
            }
        })

        res.status(200).json({
            parkingAds
        })
    } catch (error) {
        next({
            message: error.message,
            status: 400
        })
    }
})

module.exports = router