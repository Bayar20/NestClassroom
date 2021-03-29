const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const filePath = `.${ url.parse(request.url).pathname }`;
    const queryParams = url.parse(request.url, true).query;
    
    let responseMessage;
    let contentType = 'text/html'
    if (fs.existsSync(filePath)) {
        if (filePath.endsWith('.css')){
            contentType = 'text/css'
        }
        
        if (filePath.endsWith('.js')){
            contentType = 'application/javascript; charset=utf8'
        }
        
        response.writeHead(200, {'Content-Type': contentType});
        responseMessage = fs.readFileSync(filePath, { encoding: 'utf8' })
        if('color' in queryParams){
            responseMessage = responseMessage + `
            <style>
            h1 {
                color: ${queryParams['color']}
            }
            </style>
            `
        }

    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        responseMessage = fs.readFileSync('./404.html', { encoding: 'utf8' })
    }

    response.write(responseMessage);
    response.end();
});

server.listen(8080, () => {
    console.log('Started http server...')
});