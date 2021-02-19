const express = require("express");
const cors = require('cors');
const app = express();
const port = 4221;

const corsOptions = {
    origin: "http://flip1.engr.oregonstate.edu:4220",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get("/express", (req, res) => {
    res.send("Express is connected")
});

app.listen(port, () => console.log(`Express is listening on the port ${port}`));