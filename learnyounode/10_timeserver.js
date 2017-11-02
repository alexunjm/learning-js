var net = require('net');

var twoDigits = n => {
  return n < 10 ? ('0' + n) : n;
}

var formatDate = (arrDate) => {
  [y, m, d, h, min] = arrDate;
  return y + '-' + twoDigits(m) + '-' + twoDigits(d) + ' ' + twoDigits(h) + ':' + twoDigits(min);
};

var server = net.createServer(function (socket) {
  // manejo del socket
  
  var date = new Date();
  var arrDate = [
    date.getFullYear(),
    date.getMonth(),     // empieza en 0
    date.getDate(),      // devuelve día del mes, empieza en 1
    date.getHours(),
    date.getMinutes()
  ];
  
  socket.end(formatDate(arrDate)+'\n');
}).listen(+process.argv[2], () => {
  //console.log('opened server on', server.address());
});
/**
* para probar el servidor se hace de la siguiente forma:
var net = require('net');

var client = new net.Socket();
client.connect(+process.argv[2], '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});*/