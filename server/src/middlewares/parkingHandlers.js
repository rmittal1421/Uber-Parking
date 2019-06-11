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

module.exports = validateUpdate