var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var index=fs.readFileSync('index.html');

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.end(index);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
