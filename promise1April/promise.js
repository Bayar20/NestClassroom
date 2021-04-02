let chalk = require('chalk')

let array = [100, 101, 202, "text", 505, NaN];

const promise = new Promise((resolve, reject) => {
    let index = Math.round(Math.random() * 5)

    console.log(chalk.yellow('Input value: ', array[index]))

    if (isNaN(array[index])) {
        reject('Rejected: Not a Number');
    } else if (array[index] % 2 != 0) {
        setTimeout(() => {
            resolve('Resolved: Odd number')
        }, 1000);
    } else {
        setTimeout(() => {
            reject('Rejected: Even number')
        }, 2000)
    }

    function rejected () {
       reject('Rejected: Even number')
    }
})

promise
    .then ((param1) => {
    console.log(chalk.green(param1))
})
    .catch ((param2) => {
    console.log(chalk.red(param2))
})
