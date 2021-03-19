const chatbot = require('./chatbot');

chatbot.getAnswer('What is your name? ', (name) => {
    chatbot.answer(`Hello ${ name }, My name is NestBot`)

    chatbot.getAnswer('Choice date or time? ', (answer) => {
        chatbot.answer(`Your answer is ${ answer }, bye`)
    });
});