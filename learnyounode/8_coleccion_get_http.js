var http = require('http');
const BufferList = require('bl');
 
[node, myself, url] = process.argv;

http.get(url, res => {
  
  res.setEncoding('utf8');
  //let rawData = '';
  var bl = new BufferList();
  res.on('data', (chunk) => { bl.append(chunk); });
  res.on('end', () => {
    /*
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }*/
    //console.log(rawData);
    
    console.log(bl.length);
    console.log(bl.toString());
  });
});