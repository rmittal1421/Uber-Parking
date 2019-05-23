const express = require('express')
const server = express()
const request = require('request')
const path = require('path')

server.use((req, res, next) => {
    res.send('The website is under construction')
    next()
})

server.listen(3000, () => {
    console.log('Listening of port 3000')
})