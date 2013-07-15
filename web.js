var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var blah = fs.readFileSync(__dirname + '/index.html').toString();
app.get('/', function(request, response) {
  response.send("%s", blah);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
