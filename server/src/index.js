const express = require('express')
const server = express()

const PORT = process.env.PORT || 3000

server.use(express.json())
server.use(require('./routers/userRouter'))
server.use(require('./routers/parkingRouter'))

server.listen(PORT, () => {
    console.log(`Listening of port ${PORT}`)
})

server.use((error, req, res, next) => {
    res.status(error.status).json(error);
})