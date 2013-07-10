var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World2!');
	var buffer = new Buffer(100);
	fs.readFileSync('index.html', function (err, data) {
  		if (err) throw err;
  		buffer = data;
	});
	response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
