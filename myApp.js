let express = require('express');
let app = express();
require('dotenv').config()
let bodyParser = require('body-parser')


const getUserNameHandler = (req, res) => {
    let {first: firstName, last: lastName} = req.query

    res.send({
        name: `${firstName} ${lastName}`
    })
}

const serveFormHandler = (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
}

const getNameHandler = (req, res) => {
    console.log(req.body, "REQUEST BODY")
    let {first: firstName, last: lastName} = req.body
    res.send({  
        name: `${firstName} ${lastName}`
    })
}



const handleBodyData = (req, res, next) => {
    express.urlencoded({extended: true})(req, res, next)
}
app.use(handleBodyData)

app.get('/', serveFormHandler)
app.post('/name', getNameHandler)
// app.post('/name', getUserNameHandler)


module.exports = app;
