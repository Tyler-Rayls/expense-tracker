const express = require("express");
const cors = require('cors');
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

app.get("/express", (req, res) => {
    res.send("Express is connected")
});

app.post("/register", (req, res) => {
    console.log(req.body.firstName);
    res.send(req.body);
})

app.listen(port, () => console.log(`Express is listening on the port ${port}`));