const mongoose = require('mongoose')
require('../db/mongoose')

const coordinatesSchema = new mongoose.Schema({
    parkingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingAd',
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: 'Point',
            required: true
        },
        coordinates: {
            //In the coordinates array, longitude always comes first and then latitude
            //Valid longitude between -180 and 180
            //Valid latitude between -90 and 90
            //Otherwise error!!
            type: [Number],
            required: true
        }
    }
})

coordinatesSchema.index({
    location: "2dsphere"
})

const Coordinates = mongoose.model('coordinates', coordinatesSchema);

module.exports = Coordinates