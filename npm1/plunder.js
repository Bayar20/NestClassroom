const chalk = require('chalk');
const argv = require('yargs/yargs')(process.argv.slice(2))
  .alias ('t', 'text')
  .alias ('b', 'background')
  .alias ('b', 'bg')
  .alias ('c', 'color')
  .default('c', 'white')
  .default('b', 'black')
  .default('t', 'Hello World!')
  .argv;

console.log(chalk.keyword(argv.color).bgKeyword(argv.background)(argv.text))

