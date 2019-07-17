const mongoose = require('mongoose')
require('../db/mongoose')

const sharp = require('sharp')

const imagesSchema = new mongoose.Schema({
    parkingAd: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingAd',
        required: true,
    },
    image: {
        type: Buffer
    }
})

imagesSchema.pre('save', async function (next) {
    const image = this

    image = await sharp(file.buffer).resize({
        width: 250,
        height: 250
    }).png().toBuffer()

    next()
})

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images