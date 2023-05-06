let express = require('express');
let app = express();


const port = 8000;

// app.use("/public", express.static(__dirname + "/public"))
app.use("/public",express.static(__dirname + "/public"))


console.log("Hello World")

const myHandler = (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
}

app.get('/', myHandler)



app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})




 module.exports = app;
