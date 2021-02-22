const express = require("express");
const cors = require('cors');
var mysql = require('./dbcon.js');
const bodyParser = require('body-parser');

const app = express();
const port = 4222;
const corsOptions = {
    origin: "http://flip1.engr.oregonstate.edu:4220",
    optionsSuccessStatus: 200
}

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('mysql', mysql);

app.post("/register", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO Users (email, firstName, lastName, password) VALUES (?, ?, ?, ?)";
    var inserts = [req.body.email, req.body.firstName, req.body.lastName, req.body.password];
    sql = mysql.pool.query(sql, inserts, function(error, results, fields) {
        if (error) {
            var message = "Sorry, an account could not be created with this information"
        } else {
            var message = `An account was created for ${req.body.firstName} using ${req.body.email}`;
        }
        res.send({message});
    });
});

app.get("/login", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT userID, email, firstName, lastName FROM Users WHERE email = ? AND password = ?";
    var inserts = [req.query.email, req.query.password];
    sql = mysql.pool.query(sql, inserts, function(error, results, fields) {
        const queryResults = {};
        if (error || results[0] == undefined) {
            queryResults["successful"] = false;
        } else {
            queryResults["successful"] = true;
            queryResults["userID"] = results[0].userID;
            queryResults["email"] = results[0].email;
            queryResults["firstName"] = results[0].firstName;
            queryResults["lastName"] = results[0].lastName;
        };
        res.send(queryResults);
    });
});

app.get("/creditCards", (req,res) =>{
    var mysql = req.app.get('mysql');
    var sql = "SELECT cardName, gas, grocery, travel, dining, otherReward, annualFee FROM CreditCards";
    sql = mysql.pool.query(sql, function(error, results, fields) {
        var queryResults = [];
        results.forEach ((row) =>{
            queryResults.push(row)
        })
        console.log('request received')
        res.send(queryResults);
}
)});



app.listen(port, () => console.log(`Express is listening on the port ${port}`));