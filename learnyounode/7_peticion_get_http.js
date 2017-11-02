var http = require('http');

[node, myself, url] = process.argv;

http.get(url, res => {
  /*
  //let rawData = '';
  res.on('data', (chunk) => { /*rawData += chunk;*-/console.log(chunk.toString()) });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
    //console.log(rawData);
  });*/
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
});