/**
* 
* este ejercicio pretende simular el comando
* Similar a ejecutar cat file | wc -l.
*/
var fs = require('fs');

[node, myself, file] = process.argv;
fs.readFile(file, 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log(data.split('\n').length -1);
});
