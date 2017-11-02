[node, myself, dir, ext] = process.argv;

var fs = require('fs'),
    path = require('path');

fs.readdir(dir, (err, list) => {
  if (err) console.log(err);
  list.filter(elm => {
    //console.log(ext, elm, path.extname(elm));
    return '.'+ext == path.extname(elm); 
  }).forEach(file => console.log(file));
});