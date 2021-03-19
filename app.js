const readline = require("readline");
const math = require('./math.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(math.PI);

rl.question("Toirgiin radius: ", (radius) => {
    const answer = math.findPerimeter(radius);
  
    console.log('Answer:', answer)
    rl.close()
});