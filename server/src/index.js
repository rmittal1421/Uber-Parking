const express = require('express')
const server = express()

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

server.listen(3000, () => {
    console.log('Listening of port 3000')
})