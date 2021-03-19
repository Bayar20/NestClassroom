const readline = require("readline");
const math = require('./math.js');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

console.log(math.ceil(-2.6))
console.log(math.floor(-2.4))
console.log(math.round(6.65))
console.log(math.round(6.45))
console.log(math.max(9,4))
console.log(math.min(10,5))
console.log(math.abs(-2.4))


// rl.question("Number: ", (value) => {
//     const ceil = math.ceil(value);
//     const floor = math.floor(value);
//     const round = math.round(value);
//     console.log('Ceil: ', ceil, 'Floor:', floor, 'Round:', round);
//     rl.close()
// });

// rl.question("Compare! Numbers: ", (num1) => {
//     const max = math.max(num1, num2);
//     const min = math.min(num1, num2);
//     console.log('Max:', max, 'Min: ', min)
//     rl.close()
// });

// rl.question('Please enter the first number : ', (num1) => {
//     rl.question('Please enter the second number : ', (num2) => {
//         const max = math.max(num1, num2);
//         const min = math.min(num1, num2);
//         console.log('Max:', max, 'Min: ', min)
//         rl.close()
//     });
// });
