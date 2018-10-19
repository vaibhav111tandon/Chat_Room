var express = require('express')
var socket = require('socket.io') 
var app = express();
var server = app.listen(5000, function(){
	console.log("Listening on port 5000");
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket){
	console.log("Connection is made", socket.id);

	socket.on('chat', function(data){
		io.sockets.emit('chat', data);
	});
});

