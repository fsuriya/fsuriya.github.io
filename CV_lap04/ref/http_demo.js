const http = require('http');

// create HTTP server
http.createServer((request, response) => {
    //write response 
    response.write('Hello World');
    response.end();
}).listen(5000, () => {
    console.log('Server is running');
});