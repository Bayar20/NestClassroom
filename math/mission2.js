const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers: ", (input) => {
    // console.log(input.split(' '))
    
    var numbers = []
    numbers[0] = parseFloat(input)

    results = -4 * numbers[0] + 6

    console.log(results)
    rl.close()
});
    