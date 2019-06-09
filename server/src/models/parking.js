const mongoose = require('mongoose')
require('../db/mongoose')

const parkingSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    numberOfDays: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: Buffer
    }
}, {
    timestamps: true
})

parkingSchema.methods.toJSON = function () {
    const parkingAdObj = this.toObject()

    delete parkingAdObj.user

    return parkingAdObj
}

const ParkingAd = mongoose.model('ParkingAd', parkingSchema)

module.exports = ParkingAd