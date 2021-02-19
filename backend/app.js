const express = require("express");
const app = express();
const port = 4221;

app.get("/express", (req, res) => {
    res.send("Hello World!")
});

app.listen(port, () => console.log("Express is listening on the port ${port}"));