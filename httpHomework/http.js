// const fs = require('fs');
const http = require('http');
const url = require('url');
const chalk = require('chalk');
const args = require('yargs')
    .alias('p','port')
    .default('port', '8080')    
    .argv

const server = http.createServer((request, response) => {
    if (request.url.includes('favicon.ico')) return;
    // const filePath = `.${ url.parse(request.url).pathname }`;
    const query = url.parse(request.url, true).query;
    let text = query.text; 
    if (!text) {
        text = "Hello World"
    }   
    let color = query.color;
    if (!color) {
        color = 'red'
    }

    response.write(`<h1 style= "color: ${ color}" > ${text} </h1>`);
    response.end();

});

server.listen(args.p, () => {
    console.log('Started http server...')

});