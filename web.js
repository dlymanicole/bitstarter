var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(100);
var len = buf.write(fs.readFilesync(index.html));
var str = buf.toString('utf-8', 0, len);


app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
