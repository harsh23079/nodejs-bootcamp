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
// console.log("Folder name:", path.dirname(__filename));

// extension name
// console.log("extension name:", path.extname(__filename));

// filename
// console.log("File name:", path.basename(__filename));

// parse
// console.log("parse:", path.parse(__filename));

// join

// console.log("Join :", path.join(__dirname, "order", "app.js"));

//File system
const fs = require("fs");

//Make a directory
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log("Something went wrong...");
//     console.log(err);
//     return;
//   }
//   console.log("Folder created...");
// });

// Create a file
// over write the content of previous data

// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "Hello Node\n",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     fs.appendFile(
//       path.join(__dirname, "test3", "test.txt"),
//       "More Data",
//       (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("Data is added...");
//       }
//     );
//     console.log("File created...");
//   }
// );

// Read a File

// fs.readFile(path.join(__dirname, "test", "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   // const content = Buffer.from(data);
//   // console.log(content.toString());

//   console.log(data.toString());
// });

// fs.readFile(path.join(__dirname, "test", "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const content = Buffer.from(data);
// console.log(content.toString());

// console.log(data.toString());
// });

// const os = require("os");
// o module
// console.log("Cpu architecture", os.cpus());

// console.log("total and free memory", os.totalmem(), os.freemem());

// Events module has class so to make object

// const Emitter = require("events");

// const myEmitter = new Emitter();

// myEmitter.on("somename", (data) => {
//   console.log(data);
// });

// myEmitter.emit("somename", {
//   name: "Harsh",
// });

// custom class using js

// class Auth extends Emitter {
//   register(username) {
//     console.log("Registered Sucessfully....");
//     this.emit("registered", username);
//   }
// }

// const auth = new Auth();

// auth.register("harsh mishra");

// listen

// verify email
// auth.on("registered", (data) => {
//   console.log(`Sending email to ${data}`);
// });

// welcome email
// auth.on("registered", (data) => {
//   console.log(`Sending welcome email to ${data}`);
// });

// auth.register("harsh mishra");
