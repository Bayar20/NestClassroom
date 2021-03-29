// const fs = require('fs');
const http = require('http');
const url = require('url');
const chalk = require('chalk');
const args = require('yargs')
    .alias('p','port')
    .default('port', '8080')    
    .argv

const server = http.createServer((request, response) => {
    // const filePath = `.${ url.parse(request.url).pathname }`;
    const query = url.parse(request.url, true).query;
    const text = query.text;    
    const color = query.color;
    
    //         h1 {
    //             color: ${queryParams['color']}
    //         }

    response.write(`<h1 style= "color: ${ color}" > ${text} </h1>`);
    response.end();

});

server.listen(args.p, () => {
    console.log('Started http server...')
    console.log(chalk[color])

});