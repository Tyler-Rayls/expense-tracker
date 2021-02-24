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

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('mysql', mysql);

app.post("/register", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO Users (email, firstName, lastName, password) VALUES (?, ?, ?, ?)";
    var inserts = [req.body.email, req.body.firstName, req.body.lastName, req.body.password];
    sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
        if (error) {
            var message = "Sorry, an account could not be created with this information"
        } else {
            var message = `An account was created for ${req.body.firstName} using ${req.body.email}`;
        }
        res.send({ message });
    });
});

app.get("/login", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT userID, email, firstName, lastName FROM Users WHERE email = ? AND password = ?";
    var inserts = [req.query.email, req.query.password];
    sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
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

app.get("/creditcards", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT cardID, cardName, gas, grocery, travel, dining, otherReward, annualFee FROM CreditCards";
    sql = mysql.pool.query(sql, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        });
        res.send(queryResults);
    });
});


app.post("/creditcards", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO CreditCards (cardName, gas, grocery, travel, dining, otherReward, annualFee) VALUES (?, ?, ?, ?, ?, ?, ?)";
    var inserts = [req.body.cardName, req.body.gas, req.body.grocery, req.body.travel, req.body.dining, req.body.otherReward, req.body.annualFee];
    sql = mysql.pool.query(sql, inserts, function (error, results) {
        if (error) {
            var message = "Error adding card. Please make sure your card is not already in the table."
        } else {
            var message = `${req.body.cardName} was successfully added to the card database.`;
        }
        res.send({ message });
    });
});

app.post("/creditCardsForExpenseAndPaymentMethods", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT CreditCards.cardID, CreditCards.cardName, CreditCards.gas, CreditCards.grocery, CreditCards.travel, CreditCards.dining, CreditCards.otherReward, CreditCards.annualFee FROM CreditCards \
    INNER JOIN PaymentMethods ON PaymentMethods.cardID = CreditCards.cardID \
    WHERE PaymentMethods.userID = ?;";
    insert = [req.body.userID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        })
        console.log(queryResults);
        res.send(queryResults);
    });
});

app.post("/paymentMethods", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT paymentID, userID, cardID FROM PaymentMethods WHERE userID = ?";
    insert = [req.body.userID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        })
        console.log(queryResults)
        res.send(queryResults);
    });
});

app.post("/addPaymentMethod", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO PaymentMethods (cardID, userID) VALUES (?, ?)";
    var inserts = [req.body.cardID, req.body.userID];
    sql = mysql.pool.query(sql, inserts, function (error, results) {
        if (error) {
            var message = "Error adding card. Please make sure you have not already added this card."
        } else {
            var message = `Successfully added card to payment methods.`;
        }
        res.send({ message });
    });
});

app.post("/family", (req, res) => {
    var mysql = req.app.get('mysql');
    var createFamily = "INSERT INTO Families (surname) VALUES (?)";
    var inserts = [req.body.surname];
    createFamily = mysql.pool.query(createFamily, inserts, function (error, results) {
        if (error) {
            var message = "There was an error creating this family.";
            res.send({ message });
        } else {
            var addFamilyMember = "INSERT INTO FamilyMembers (userID, familyID, isHead) VALUES (?, ?, ?)";
            var inserts = [req.body.user.userID, results.insertId, 1];
            addFamilyMember = mysql.pool.query(addFamilyMember, inserts, function (error, results) {
                if (error) {
                    var message = "There was an error creating this family and adding you as the head.";
                } else {
                    var message = `Success! The ${req.body.surname} family was created with ${req.body.user.firstName} ${req.body.user.lastName} as the head of house.`;
                }
                res.send({ message });
            });
        }
    })
});

app.get("/family", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT Families.familyID, Users.userID, Users.firstName, Users.lastName, Families.surname, FamilyMembers.isHead FROM Families \
            INNER JOIN FamilyMembers ON Families.familyID = FamilyMembers.familyID \
            INNER JOIN Users ON Users.userID = FamilyMembers.userID \
            WHERE FamilyMembers.familyID IN (SELECT familyID from FamilyMembers WHERE userID = ?) \
            ORDER BY Families.familyID, FamilyMembers.isHead DESC;";
    var inserts = [req.query.userID];
    sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        });
        res.send(queryResults);
    });
});


app.post("/expensesInsert", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO Expenses (userID, amount, date, category, paymentID) VALUES (?, ?, ?, ?, ?)";
    var inserts = [req.body.userID, req.amount, req.body.date, req.body.category, req.body.paymentID];
    sql = mysql.pool.query(sql, inserts, function (error, results) {
        if (error) {
            var message = "Error adding expense."
        } else {
            var message = "Expense added.";
        }
        res.send({ message });
    });
});


app.listen(port, () => console.log(`Express is listening on the port ${port}`));