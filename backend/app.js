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

//Add a new user to the Users table.
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

//Select a user from the Users table.
app.get("/login", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT userID, email, firstName, lastName, password FROM Users WHERE email = ? AND password = ?";
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
            queryResults["password"] = results[0].password;
        };
        res.send(queryResults);
    });
});

//Select and display all credit cards in CreditCards.
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

//Add a credit card to the CreditCards table.
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

//Select from CreditCards cards specific to the current user.
app.post("/creditCardsForExpenseAndPaymentMethods", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT PaymentMethods.paymentID, CreditCards.cardID, CreditCards.cardName, CreditCards.gas, CreditCards.grocery, CreditCards.travel, CreditCards.dining, CreditCards.otherReward, CreditCards.annualFee FROM CreditCards \
    INNER JOIN PaymentMethods ON PaymentMethods.cardID = CreditCards.cardID \
    WHERE PaymentMethods.userID = ?;";
    insert = [req.body.userID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        })
        res.send(queryResults);
    });
});

//Select from PaymentMethods payment methods specific to the current user.
app.post("/paymentMethods", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT paymentID, userID, cardID FROM PaymentMethods WHERE userID = ?";
    insert = [req.body.userID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        })
        res.send(queryResults);
    });
});

//Add a payment method to the PaymentMethods table.
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

// Adds a Users <-> Families relationship through the FamilyMembers table
app.post("/family/join", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO FamilyMembers (userID, familyID, isHead) VALUES (?, ?, 0)";
    var inserts = [req.body.user.userID, req.body.familyID];
    sql = mysql.pool.query(sql, inserts, function (error, results) {
        if (error) {
            var message = "There was an error joining the family.";
            console.log(error);
        } else {
            var message = "You successfully joined the family!";
        }
        res.send({ message });
    });
});

//Add a new row into Families table
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

// Searches for a family by the last name
app.get("/family/search", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT * FROM Families WHERE surname LIKE ?;";
    var inserts = ["%" + req.query.surname + "%"];
    sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row);
        });
        res.send({ queryResults });
    });
});

//Select data from Families specific to the current user. 
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

// Deletes a Families <-> Users relationship from the FamilyMembers table
app.delete("/family", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "DELETE FROM FamilyMembers WHERE userID = ? AND familyID = ?;";
    var inserts = [req.body.user.userID, req.body.props.familyID];
    sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
        var message;
        if (error) {
            message = "Unable to remove yourself from the family.";
        } else {
            message = "You were successfully removed from the family.";
        }
        res.send({message});
    });
});

//Display expenses from Expenses table specific to the current user.
app.post("/expensesTable", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT Expenses.expenseID, PaymentMethods.paymentID, Expenses.userID, Expenses.amount, Expenses.date, Expenses.category, CreditCards.cardName FROM Expenses \
    INNER JOIN PaymentMethods ON PaymentMethods.paymentID = Expenses.paymentID\
    INNER JOIN CreditCards ON CreditCards.cardID = PaymentMethods.cardID\
    WHERE Expenses.userID = ?;";
    insert = [req.body.userID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        })
        res.send(queryResults);
    });
});

//Add a new expense to the Expenses table.
app.post("/addExpense", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO Expenses (userID, amount, date, category, paymentID) VALUES (?, ?, ?, ?, ?)";
    var inserts = [req.body.userID, req.body.amount, req.body.date, req.body.category, req.body.paymentID];
    sql = mysql.pool.query(sql, inserts, function (error, results) {
        if (error) {
            var message = "Error adding expense"
        } else {
            var message = "Expense was successfully added.";
        }
        res.send({ message });

    });
});

//Display expenses from Expenses table specific to the current user and selected month filter.
app.post("/filterMonth", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT PaymentMethods.paymentID, Expenses.userID, Expenses.amount, Expenses.date, Expenses.category, CreditCards.cardName FROM Expenses \
    INNER JOIN PaymentMethods ON PaymentMethods.paymentID = Expenses.paymentID\
    INNER JOIN CreditCards ON CreditCards.cardID = PaymentMethods.cardID\
    WHERE Expenses.userID = ? AND MONTHNAME(Expenses.date) = ?;";
    insert = [req.body.userID, req.body.month]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        })
        res.send(queryResults);
    });
});

//Display expenses from Expenses table specific to the current user and selected payment category filter.
app.post("/filterCategory", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT PaymentMethods.paymentID, Expenses.userID, Expenses.amount, Expenses.date, Expenses.category, CreditCards.cardName FROM Expenses \
    INNER JOIN PaymentMethods ON PaymentMethods.paymentID = Expenses.paymentID\
    INNER JOIN CreditCards ON CreditCards.cardID = PaymentMethods.cardID\
    WHERE Expenses.userID = ? AND Expenses.category = ?;";
    insert = [req.body.userID, req.body.category]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        })
        res.send(queryResults);
    });
});

//Display expenses from Expenses table specific to the current user and selected credit card.
app.post("/filterCard", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT PaymentMethods.paymentID, Expenses.userID, Expenses.amount, Expenses.date, Expenses.category, CreditCards.cardName FROM Expenses \
    INNER JOIN PaymentMethods ON PaymentMethods.paymentID = Expenses.paymentID\
    INNER JOIN CreditCards ON CreditCards.cardID = PaymentMethods.cardID\
    WHERE Expenses.userID = ? AND CreditCards.cardName = ?;";
    insert = [req.body.userID, req.body.cardName]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        })
        res.send(queryResults);
    });
});

// Removes a Users <-> CreditCards relationship in the PaymentMethods table
app.delete("/removePaymentMethod", (req, res) => {
    var mysql = req.app.get('mysql')
    var sql = "DELETE from PaymentMethods WHERE paymentID = ?"
    insert = [req.body.paymentID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        if (error) {
            var message = "Error. Please try again."
        } else {
            var message = "Payment method removed.";
        }
        res.send({ message });
})});

// Gets all the information on a User
app.get("/getUser", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT userID, email, firstName, lastName, password FROM Users WHERE userID = ?";
    var inserts = [req.query.userID];
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
            queryResults["password"] = results[0].password;
        };
        res.send(queryResults);
    });
});

// Deletes a user from the Users table
app.delete("/deleteUser", (req, res) => {
    var mysql = req.app.get('mysql')
    var sql = "DELETE from Users WHERE userID = ?"
    insert = [req.body.userID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        if (error) {
            var message = "Error. Please try again."
        } else {
            var message = "User removed. Login to a different account or create a new account on the Login page.";
        }
        res.send({ message });
})});

// Edits a user in Users
app.put("/editUser", (req, res) => {
    var mysql = req.app.get('mysql')
    var sql = "UPDATE Users SET firstName = ?, lastName = ?, email = ?, password = ? WHERE userID = ?"
    insert = [req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.userID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        if (error) {
            var message = "Error. Please try again."
        } else {
            var message = "User edited.";
        }
        res.send({ message });
})});

// Nullifies the relationship between a User and Expense
app.put("/removeExpense", (req, res) => {
    var mysql = req.app.get('mysql')
    var sql = "UPDATE Expenses SET userID = NULL, paymentID = NULL WHERE expenseID = ?"
    insert = [req.body.expenseID]
    sql = mysql.pool.query(sql, insert, function (error, results, fields) {
        if (error) {
            var message = "Error. Please try again."
        } else {
            var message = "Expense removed.";
        }
        res.send({ message });
})});

// Displays all of the PaymentMethods for a User
app.get("/adminPaymentMethods", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT paymentID, userID, cardID from PaymentMethods";
    sql = mysql.pool.query(sql, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        });
        res.send(queryResults);
    });
});

// Displays all the Users for the admin features
app.get("/adminUsers", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT userID, email, firstName, lastName, password from Users";
    sql = mysql.pool.query(sql, function (error, results, fields) {
        var queryResults = [];
        results.forEach((row) => {
            queryResults.push(row)
        });
        res.send(queryResults);
    });
});

// Calculates the rewards and expense totals for a Users various PaymentMethods
app.get("/rewards", (req, res) => {
    var mysql = req.app.get('mysql');
    var sql = "SELECT PaymentMethods.paymentID, CreditCards.cardName, CreditCards.cardID, CreditCards.dining, CreditCards.gas, CreditCards.grocery, CreditCards.travel, CreditCards.otherReward, CreditCards.annualFee FROM PaymentMethods \
               INNER JOIN CreditCards ON PaymentMethods.cardID = CreditCards.cardID \
               WHERE userID = ?";
    var inserts = [req.query.userID];
    var creditCards = []
    var data = [];
    sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            var categories = ["dining", "gas", "grocery", "travel", "otherReward"];
            results.forEach(card => {
                var card_data = {};
                card_data.cardName = card.cardName;
                card_data.cardID = card.cardID;
                card_data.annualFee = card.annualFee;
                card_data.totalExpense = 0;
                card_data.totalRewards = 0;
                categories.forEach(category => {
                    sql = "SELECT SUM(amount) AS Expense FROM Expenses WHERE paymentID = ? AND category = ?;"
                    inserts = [card.paymentID, category];
                    sql = mysql.pool.query(sql, inserts, function (error, results, fields) {
                        if (error) {
                            console.log(error);
                        } else {
                            card_data.totalRewards += results[0].Expense == null ? 0 : (results[0].Expense * card[category] / 100);
                            card_data.totalExpense += results[0].Expense == null ? 0 : results[0].Expense;
                        }
                    });
                });
                data.push(card_data);
            });
        }
    });
    setTimeout(() => { res.send(data); }, 2000);
});

app.listen(port, () => console.log(`Express is listening on the port ${port}`));
