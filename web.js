var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var str = fs.readFileSync(__dirname + '/index.html').toString();

app.get('/', function(request, response) {
  response.send("The string: %s", str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
