var express = require('express');

var app = express();

var cors = require('cors');
app.use(cors());

var mysql = require('mysql');

//xmlhttp.open("GET", "http://localhost:8080/api/events?start=" + startdate+"&end="+enddate, true);
app.get('/events/:startdate/:enddate', function (req, res) {
    console.log(req.params);
    console.log(req.params.startdate);

    con.query("SELECT event_date.Date, event.Name, event.Type, event.Time, location.Location_name FROM event_date, event, location WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = location.Location_id and event_date.Date >= '" +req.params.startdate+ "' and event_date.Date <= '"+req.params.enddate+"' GROUP BY Name ORDER BY event_date.Date;", function (err, result, fields) {
        console.log("inside query");
        if (err) throw err;
        let results = [];
        if (result.length){
            for (var i = 0; i < result.length; i++){
                var day = result[i].Date.getDate();
                var month = result[i].Date.getMonth() + 1;
                var year = result[i].Date.getFullYear();
                result[i].Date = day + "." + month + "." +year;
                results.push(result[i]);
            }
            console.log(result);
        }
        console.log("before json");

        //sends the HTTP response
        console.log("before sending response");
        res.send(results);

        console.log("results: " + results);
    })
});

//listens for connections on the specified port
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});

//Open http://127.0.0.1:8081/events/" + startdate + "/" + enddate in any browser
var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
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


