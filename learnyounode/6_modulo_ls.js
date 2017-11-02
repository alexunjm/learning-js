var fs = require('fs'),
    path = require('path');

module.exports = (dir, ext, cb) => {
  fs.readdir(dir, (err, list) => {
    if (err) return cb(err);
    cb(null, list.filter(elm => {
      return '.'+ext == path.extname(elm); 
    }));
  });
}