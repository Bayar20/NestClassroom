let chalk = require('chalk')

let array = [100, 101, 202, "text", 505, NaN];

const promise = new Promise((resolve, reject) => {
    let index = Math.round(Math.random() * 5)
    console.log(index)
    console.log(chalk.yellow('Input value: ', array[index]))

    if (isNaN(array[index])) {
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