const express = require("express");
const cors = require('cors');
var mysql = require('./dbcon.js');
const bodyParser = require('body-parser');

const app = express();
const port = 4221;
const corsOptions = {
    origin: "http://flip1.engr.oregonstate.edu:4220",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('mysql', mysql);

app.get("/express", (req, res) => {
    res.send("Express is connected")
});

app.post("/register", (req, res) => {
    var mysql = req.app.get('mysql');
    var query = "INSERT INTO Users (email, firstName, lastName, password) VALUES (?, ?, ?, ?)";
    var inserts = [req.body.email, req.body.firstName, req.body.lastName, req.body.password];
    sql = mysql.pool.query(query, inserts, function(error, results, fields) {
        if (error) {
            res.send("Sorry, an account could not be created with this information");
        } else {
            res.send(`An account was created for ${req.body.firstName} using ${req.body.email}`);
        }
    })
})

app.listen(port, () => console.log(`Express is listening on the port ${port}`));