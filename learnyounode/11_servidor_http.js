var http = require('http');

var server = http.createServer(function (req, res) {
  // manejar cada petición aquí.
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(process.argv[3]).pipe(res);
}).listen(+process.argv[2]);