var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Home" }');
});

app.get('/one', function (req, res) {
    res.send('{ "response": "This page one" }');
});
app.get('/two', function (req, res) {
    res.send('{ "response": " This is page two" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
