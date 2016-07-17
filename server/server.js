var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.listen(3000, function() {
  console.log('Bootstrap application listening on port 3000');
});

module.exports = app;