[node, myself, dir, ext] = process.argv;

var modulo_ls = require('./6_modulo_ls');

modulo_ls(dir, ext, (err, filtered) => {
  if (err) console.log(err);
  filtered.forEach(file => console.log(file));
});