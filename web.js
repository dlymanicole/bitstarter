var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var str = fs.readFileSync(__dirname + '/index.html', 'utf-8');
//console.log("String is: %s", str);

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
