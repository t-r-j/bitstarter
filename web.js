var express = require('express');
var fs = require('fs');
var Buffer = require('buffer').Buffer;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World2!');
	//var buffer = new Buffer(100);
	var buffer = fs.readFileSync('index.html', function (err, data) {
  		if (err) throw err;
  		buffer = data;
	});
	response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
