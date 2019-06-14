const mongoose = require('mongoose')

/**
 * Middleware to validate the ids sent by the user in the request
 * This middleware check ids of the parking ad requested and the id of the user
 */
const validateIds = (req, res, next) => {
    const {
        _id,
        userId
    } = req.params
    let message = ''
    if (_id && !mongoose.Types.ObjectId.isValid(_id)) {
        message = 'Object Id for the parking ad is invalid'
    } else if (userId && !mongoose.Types.ObjectId.isValid(userId)) {
        message = 'Object Id for the user is invalid'
    } else {
        return next()
    }

    next({
        message,
        status: 400
    })
}

/**
 * Middleware to validate the keys to update as requested by the user
 * next() will let the next handler to run
 * next(error) will directly go to the last handler which consists of the error to send the error to the client
 */
const validateUpdate = (req, res, next) => {
    const updatesRequested = Object.keys(req.body)
    const allowedUpdates = ['description', 'location', 'numberOfDays', 'price']

    const validUpdate = updatesRequested.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!validUpdate) next({
        message: 'Invalid update',
        status: 404
    })

    req.updatesRequested = updatesRequested
    next()
}

module.exports = {
    validateIds,
    validateUpdate
}