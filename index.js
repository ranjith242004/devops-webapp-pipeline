const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello! Dockerized Web Application is running successfully.");
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
