var chalk = require("chalk");

var message = "Hello " + chalk.bold.yellow.underline.bgMagenta("World");

console.log(message);