var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));
app.listen(8000);
console.log('Express server listening on port 8000');

module.exports = app;