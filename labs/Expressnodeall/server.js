
/* the require function, whose job is to load modules and give you access to Node.js exports
so this loads the express framework/module and gives access to it*/
var express = require('express');

/*Calls the express function "express()" and puts new Express application
inside the app variable (to start a new Express application)*/
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})