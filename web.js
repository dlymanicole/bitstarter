var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(100);
buf = fs.readFilesync(index.html);
var str = buf.toString(buf);


app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
