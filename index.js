var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile('./public/index.html');
});

app.listen(8000);
console.log('Express server listening on port 8000');

module.exports = app;