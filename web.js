var express = require('express');
var fs = require('fs');
var Buffer = require('buffer').Buffer;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World2!');
	//var buffer = new Buffer(100);
	var buffer2 = fs.readFileSync('index.html', 'utf-8');
	response.send(buffer2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
