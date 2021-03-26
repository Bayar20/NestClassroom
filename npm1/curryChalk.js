const chalk = require('chalk');

const makeFunction = (string1) => {
    return (chalkType) => {
        return (string2) => {
            return `${string1} ${chalkType(string2)}`
            // return string1 + ' ' + chalkType(string2)
        }
    }
}

const greetBlue = makeFunction('Hello')(chalk.blue)
const greetRed = makeFunction('Hello')(chalk.red)
const shortGreetGreen = makeFunction('Hi')(chalk.green)

console.log(greetBlue('Bulgaa'))       // Hello Bulgaa <- blue
console.log(greetRed('Bulgaa'))        // Hello Bulgaa <- red
console.log(shortGreetGreen('Bulgaa')) // Hi Bulgaa <- green