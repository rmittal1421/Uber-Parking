const mongoose = require('mongoose')

const validateLongitude = (number) => {
    return ((Number(number) === number) && (number > -180) && (number < 180))
}

const validateLatitude = (number) => {
    return ((Number(number) === number) && (number > -90) && (number < 90))
}

const coordinateMiddleware = (req, res, next) => {
    if (validateLongitude(req.body.longitude) && validateLatitude(req.body.latitude)) {
        next()
    } else {
        next({
            message: 'Invalid coordinates',
            status: 400
        })
    }
}

module.exports = coordinateMiddleware