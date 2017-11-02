var http = require('http'),
    bl = require('bl'),
    after = require("after");

var result = [];

var next = after(3, () => 
  result.forEach(elm => {
    console.log(elm);
  })
);

var getFn = index => {

  http.get(process.argv[index+2], function (response) {
    response.pipe(bl((err, data) => {
      if (err) return console.error(err);
      result[index] = data.toString();
      next();
    }));
  });
};

for(var i = 0; i < 3; i++) {
  getFn(i);
}