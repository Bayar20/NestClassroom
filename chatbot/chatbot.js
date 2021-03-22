const readline = require("readline");



const getAnswer = (question, callback) => {  
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(question, (input) => {
        rl.close();
        callback(input)
    }); 

    
}

const answer = (input) => {
    console.log(input)
}


module.exports = { 
    getAnswer: getAnswer,
    answer: answer,
};
