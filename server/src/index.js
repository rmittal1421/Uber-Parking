const express = require('express')
const server = express()

server.use(express.json())
server.use(require('./routers/userRouter'))
server.use(require('./routers/parkingRouter'))

server.listen(3000, () => {
    console.log('Listening of port 3000')
})