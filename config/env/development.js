console.log(`Trying to see what this value is `, __dirname);

const PKG_TOP_DIR = 'snapshot';

let datafolder = "./data";

if (__dirname.includes(PKG_TOP_DIR)){
    datafolder = process.cwd() + '/data';
}

console.log(`Trying to see what this value is `, datafolder);


module.exports = {
  "version": "0.0.1",
  "host": "localhost",
  "http-port": 8866,
  "https-port": 8433,
  "data-folder": datafolder
}