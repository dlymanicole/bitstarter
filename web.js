var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(100);
buf.write(fs.readFileSync(__dirname + '/index.html'));
var str = buf.toString();

app.get('/', function(request, response) {
  response.send(" %s", str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
