var socket = io.connect("http://localhost:5000");

var msg = document.getElementById('msg');
var handle = document.getElementById('handler');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var typ = document.getElementById('typing-message');

btn.addEventListener("click", function(){
	socket.emit('chat', {
		message: msg.value,
		handle: handle.value
	});
});

msg.addEventListener("keypress", function(){
	socket.emit('typing', handle.value);
});

socket.on('chat', function(data){
	if(data.handle!==''&&data.message!==''){
	typ.innerHTML = "";	
	output.innerHTML += '<div class="messages"><p><strong>'+data.handle+':</strong>'+data.message+'</p></div>';
	}
});

socket.on('typing', function(data){
	typ.innerHTML = data+" is typing...";
});