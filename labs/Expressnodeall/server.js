var express = require('express');

var app = express();

var cors = require('cors');
app.use(cors());

var results = [];

app.get('/events/:startdate/:enddate', function (req, res) {
    console.log(req.params);

    con.query("SELECT Event_id, Name, Type FROM event WHERE ;", function (err, result, fields) {
        console.log("inside query");
        if (err) throw err;
        if (result.length){
            for (let i = 0; i < result.length; i++){
                results.push(result[i]);
            }
            console.log(result);
        }
        console.log("before json");

        //sends the HTTP response
        console.log("before sending response");
        res.send(results);
        console.log("response sent");
    })
    }

);

//http://localhost:8081/events/" + startdate + "/" + enddate
app.get('/testi/:name', function (req, res) {
    console.log(req.params);
    console.log("testi toimii");
    //sends the HTTP response
    res.send(results);
})

//listens for connections on the specified port
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

//Open http://127.0.0.1:8081/events/" + startdate + "/" + enddate in any browser

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YcUlm2rm2r",
    database: "example_db"
});

con.connect(function(err) {
    if (err) throw err;
    /*con.query("SELECT * FROM event", function (err, result, fields) {
        console.log("tällainen tulos");
        if (err) throw err;
        if (result.length){
            console.log(result.length);
            for (let i = 0; i < result.length; i++){
                results.push(result[i]);
            }
            console.log(result);
        }
    });*/
});


