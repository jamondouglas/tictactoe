var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/../client'));

console.log("TicTacToe listening on port", port);
app.listen(port);