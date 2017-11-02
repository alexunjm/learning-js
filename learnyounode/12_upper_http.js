var http = require('http'),
    map = require('through2-map');

var server = http.createServer(function (req, res) {
  // manejar cada petición aquí.
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }
  req.pipe(map(function (chunk) {
    //return chunk.toString().split('').reverse().join('')
    return chunk.toString().toUpperCase();
  })).pipe(res);
}).listen(+process.argv[2]);