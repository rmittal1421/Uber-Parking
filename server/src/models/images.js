const mongoose = require('mongoose')
require('../db/mongoose')

const sharp = require('sharp')

const imageSchema = new mongoose.Schema({
    parkingAd: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingAd',
        required: true,
    },
    image: {
        type: Buffer
    }
})

imageSchema.pre('save', async function () {
    console.log('pre in the save for saving the image')
    console.log(this)
    // const image = this.image
    // console.log(image)
    // image = await sharp(file.buffer).resize({
    //     width: 250,
    //     height: 250
    // }).png().toBuffer()
    // console.log(image)
    // console.log(image.originalname)
})

const Image = mongoose.model('Image', imageSchema);

module.exports = Image