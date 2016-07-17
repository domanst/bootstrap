// GET home page
var path = require('path');

exports.index = function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/home/index.html'));
};