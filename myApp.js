let express = require('express');
let app = express();
require('dotenv').config()


console.log("Hello World", __dirname)

const middleWareFunc = (req, res, next) => {
    let staticAssetPath = __dirname + '/public'

    // middleware, to serve a static asset
    express.static(staticAssetPath)(req, res, next)
}

// mounted a middleware
app.use('/public', middleWareFunc)


const cbFunc = (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
}

const serveJson = (req, res) => {
    let messageStyle = process.env.MESSAGE_STYLE
    if(messageStyle === "uppercase"){
        res.json({
            message: "HELLO JSON"
        })
    } else {
        res.json({
            message: "Hello json"
        })
    }
}

const middleWareRouteHandler = (req, res, next) => {
    console.log("i am  a middleware")
    next()
}

app.get('/', cbFunc)
app.get('/json', serveJson)
app.get('/middleware', middleWareRouteHandler)

module.exports = app;
