var express = require('express');

var app = express.createServer(express.logger());

buf = new Buffer(fs.readFilesync(index.html));
str = buf.toString(buf);


app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
