
//the require function, whose job is to load modules and give you access to Node.js exports
//so this loads the express framework/module and gives access to it
var express = require('express');

//Calls the express function "express()" and puts new Express application
//inside the app variable (to start a new Express application)
var app = express();

var cors = require('cors');
app.use(cors());

let results = [];
//You define routing using methods of the Express app object that correspond
//to HTTP methods; for example, app.get() to handle GET requests.
//This route path will match requests to the root route, /.
//- the routing methods can have more than one callback function as arguments;
//callback function handles the request
//- req = request object / HTTP request
//- res = response object /  the HTTP response that an Express app sends when
//it gets an HTTP request

app.get('/events/:startdate/:enddate', function (req, res) {
    console.log(req.params);

    //con.query("SELECT * FROM event INNER JOIN event_date ON event.Event_id=event_date.Event_id WHERE Date=2019-11-23;", function (err, result, fields) {
    con.query("SELECT * FROM event;", function (err, result, fields) {
        console.log("inside query");
        if (err) throw err;
        if (result.length){
            for (let i = 0; i < result.length; i++){
                results.push(result[i]);
            }
            console.log(result);
        }
        console.log("before json");
        //let myjson = JSON.stringify(results);
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

//"http://localhost:8081/api/events?start=2019-11-18&end=2019-11-18

//app.get('/essi', function (req, res) {

//listens for connections on the specified port
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

//Open http://127.0.0.1:8081/ in any browser
//or Open http://127.0.0.1:8081/essi in any browser
//or Open http://127.0.0.1:8081/essi in any browser

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
/*
console.log("Alkaa");

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password: 'YcUlm2rm2r',
    database: 'example_db',
    connectionLimit: 5
});
async function asyncFunction() {
    let conn;
    try {
        console.log("ennen await");
        conn = await pool.getConnection();
        console.log("jälkeen await");
        const rows = await conn.query("SELECT type FROM event");
        console.log("Hei!");
        console.log(rows); //[ {val: 1}, meta: ... ]
        //const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        //console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
};
asyncFunction();
 */