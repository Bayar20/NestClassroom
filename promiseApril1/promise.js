let chalk = require('chalk')

let array = ['NaN', 101, 202];

const promise = new Promise((resolve, reject) => {
    let index = Math.round(Math.random() * 2)
    console.log(chalk.yellow('Input value: ', array[index]))

    if (array[index] == 'NaN') {
        reject('Rejected: Not a Number');
    } else if (array[index] % 2 != 0) {
        resolve('Resolved: Odd number');
    } else {
        reject ('Rejected: Even number')
    }
})

promise
    .then(function print(param1) {
    console.log(chalk.green(param1))
})
    .catch( rejected = (param2) => {
    console.log(chalk.red(param2))
})