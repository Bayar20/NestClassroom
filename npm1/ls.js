const chalk = require('chalk');
const fs = require('fs')

const args = require('yargs')
  .alias ('l', 'ls')
  .boolean ('l')
  .alias ('c', 'color')
  .alias ('b', 'background')
  .alias ('t', 'text')
  .default('c', 'white')
  .default('b', 'black')
  .default('t', 'Hello World!')
  .argv;

var path = './'

if (args._.length > 0) {
    path = args._[0] + '/'
}

var files = fs.readdirSync(path)
console.log('\n', chalk.green(path))

if(args.l) {
    for (let fileName of files){
        if (fs.lstatSync(path + fileName).isDirectory()) {
            console.log(`d ${chalk.blue(fileName)} `)
        } else {
            console.log(`f ${fileName} `)
        }
    }
} else {
    let results = ''
    for (let fileName of files){
        if (fs.lstatSync(`${path}${fileName}`).isDirectory()) {
            results += `${chalk.blue(fileName)} `
        } else {
            results += `${fileName} `
        }
    }
    console.log(results)
}


