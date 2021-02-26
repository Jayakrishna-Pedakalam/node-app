const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/welcome', (req, res) => {
    res.send("<h1>Hello World</h1>")
});

module.exports = app;
//app.listen(3001);