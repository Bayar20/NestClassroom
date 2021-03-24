const chalk = require('chalk');
const fs = require('fs')

const argv = require('yargs')
  .alias ('t', 'text')
  .alias ('b', 'background')
  .alias ('b', 'bg')
  .alias ('c', 'color')
  .default('c', 'white')
  .default('b', 'black')
  .default('t', 'Hello World!')
  .argv;

  fs.readdir()

console.log(chalk.keyword(argv.color).bgKeyword(argv.background)(argv.text))

