/**
* 
* este ejercicio pretende simular el comando
* Similar a ejecutar cat file | wc -l.
*/
var fs = require('fs');

[node, myself, file] = process.argv;
var buff = fs.readFileSync(file);
//console.log(buff.toString());

var arrLines = buff.toString().split('\n');
/**
* otra forma de convertir el buffer en un string es 
* pasando como segundo parámetro 'utf8'; así:
* fs.readFileSync(process.argv[2], 'utf8').split('\n')
*/

console.log(arrLines.length - 1);