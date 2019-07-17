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
    gallery: {
        //Will be implemented later
        //not required
        type: Buffer
    }
}, {
    timestamps: true
})

parkingSchema.virtual('images', {
    ref: 'images',
    localField: '_id',
    foreignField: 'parkingAd'
})

parkingSchema.methods.toJSON = function () {
    const parkingAdObj = this.toObject()

    delete parkingAdObj.user

    return parkingAdObj
}

const ParkingAd = mongoose.model('ParkingAd', parkingSchema)

module.exports = ParkingAd