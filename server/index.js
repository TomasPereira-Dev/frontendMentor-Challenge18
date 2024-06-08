const express = require('express');
const cors = require('cors');


const app = express();
const port = 3000;
const userData = __dirname + "/data.json";

app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>  {
    res.sendFile(userData)
});

app.listen(port, () => {
    console.log(`la app corre en localhost:${port}`)
})