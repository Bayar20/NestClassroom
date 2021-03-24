const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers: ", (input) => {
    console.log(input.split(' '))
    
    var numbers = input.split(' ')
    let sum = 0
    let mul = 1

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            sum += parseInt(numbers[i])
        } else {
           mul *= parseInt(numbers[i])
        }
    }
        
    console.log(mul, " ", sum)
    rl.close()
});
    