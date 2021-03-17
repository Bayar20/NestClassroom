const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// const data = [
//     {
//         "name": 'lhagav',
//         "aa":1 ,
//     },
//     {
//         "name": 'lhagav2',
//         "aa":1 ,
//     }
// ]

// for(let i = 0; i < data.length; i++) {

// }
// data.forEach((human, index) => {
//     console.log(human);
// });

rl.question("Given array: ", (input) => {
        const myArray = input.split('');
        // const answer = myArray.reverse().forEach((char) => {
        //     console.log(char);
        //     answer += char;
        // });

        const rev = input.split('').reverse().join('')
        console.log(rev)
        rl.close()
});
    