const express = require('express')
const server = express()

const PORT = process.env.PORT || 3000

server.use(express.json())

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

server.use(require('./routers/userRouter'))
server.use(require('./routers/parkingRouter'))
server.use(require('./routers/coordinatesRouter'))

server.listen(PORT, () => {
    console.log(`Listening of port ${PORT}`)
})

server.use((error, req, res, next) => {
    res.status(error.status).json(error);
})