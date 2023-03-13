// NPM module
// const color=require('cli-color')
// console.log(color.red("nancy"))

// (function(name){
//     var age=21;
//           console.log(name)
// })('nancy')

// console.log(age)

// const auth = require("./auth");

// auth.a(2);
// auth.b("code", "secret");

//core module
// const path=require('path');

// dir name

const path = require("path");

// dirname
console.log("Folder name:", path.dirname(__filename));

// extension name
console.log("extension name:", path.extname(__filename));

// filename
console.log("File name:", path.basename(__filename));

// parse
console.log("parse:", path.parse(__filename));
