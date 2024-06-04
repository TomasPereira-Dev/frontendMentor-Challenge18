const express = require("express");
const app = express();
const port = 3000;

const userData = __dirname + "./data.json";

app.get("/", (req,res) =>  {
    res.send(userData)
});

app.listen(port, () => {
    console.log(`la app corre en localhost:${port}`)
})