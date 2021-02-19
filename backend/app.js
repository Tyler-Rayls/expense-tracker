const express = require("express");
const app = express();
const port = 4221;

app.get("/express", (req, res) => {
    res.send("Express is connected")
});

app.listen(port, () => console.log("Express is listening on the port ${port}"));