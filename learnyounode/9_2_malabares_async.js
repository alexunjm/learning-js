var http = require('http'),
    bl = require('bl'),
    async = require("async");

var result = [];

var getFn = (index, cb) => {

  http.get(process.argv[index+2], function (response) {
    response.pipe(bl((err, data) => {
      if (err) cb(err);
      result[index] = data.toString();
      cb(null, result);
    }));
  });
};

async.parallel([
  (cb) => {getFn(0, cb)},
  (cb) => {getFn(1, cb)},
  (cb) => {getFn(2, cb)},
], (err, data) => {
  if (err) console.log(err);
  result.forEach(elm => {
    console.log(elm);
  })
});