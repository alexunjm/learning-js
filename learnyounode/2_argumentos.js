/**
* console.log(process.argv);
* [ruta_node, ruta_este_archivo, arg1, arg2, ...] = process.argv
*
*/
let suma = 0;
for(let i = 2; i < process.argv.length; i++) {
  //console.log(process.argv[i]);
  suma += +process.argv[i];
  //suma += Number(process.argv[i])
}
console.log(suma);