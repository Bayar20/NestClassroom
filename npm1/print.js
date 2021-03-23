const { bgKeyword } = require('chalk');
const chalk = require('chalk');

var input = process.argv.slice(2)

let tIndex = input.indexOf('-t')
let cIndex = input.indexOf('-c')
let bgIndex = input.indexOf('-bg')

var text = 'Hello World!'
var color = 'white'
// var bg = 'bg'
var bgColor = 'black'

// function capitalizeFirstLetter(str) {
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
//     return capitalized;
// }

if (tIndex >= 0 && tIndex + 1 < input.length && tIndex + 1 != cIndex && tIndex + 1 != bgIndex){
    text = input[tIndex + 1]
} 

if (cIndex >= 0 && cIndex + 1 < input.length && cIndex + 1 != tIndex && cIndex + 1 != bgIndex){
    color = input[cIndex + 1].toLowerCase()
} 

if (bgIndex >= 0 && bgIndex + 1 < input.length && bgIndex + 1 != cIndex && bgIndex + 1 != tIndex){
    bgColor = input[bgIndex + 1].toLowerCase()
} 

console.log(chalk.keyword(color).bgKeyword(bgColor)(text))

