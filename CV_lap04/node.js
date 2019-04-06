const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        'main',
        req.url === '/' ? 'index.html' : req.url
    );

    // get file extension
    let extname = path.extname(filePath);


    console.log(req.url);

    // initial content type;
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Check if contentType is text/html but no .html file extension
    
    // Read file

    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'main', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': contentType });
            res.end(content);

        })
    } else if (req.url === '/contact' || req.url === '/contact.html') {
        fs.readFile(path.join(__dirname, 'main', 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': contentType });
            res.end(content);
        })
    } else if (req.url === '/gallery' || req.url === '/gallery.html') {
        fs.readFile(path.join(__dirname, 'main', 'gallery.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': contentType });
            res.end(content);
        })
    } else if (req.url.split('/')[1] === 'assets' && req.url.split('/')[2] === 'css') {
        let file = req.url.split('/')[3];
        fs.readFile(path.join(__dirname, 'main', 'assets', 'css', file ), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': contentType });
            res.end(content);
        })
    } else if (req.url.split('/')[1] === 'images') {
        let file = req.url.split('/')[2]
        fs.readFile(path.join(__dirname, 'main', 'images', file), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': contentType });
            res.end(content);
        })

    } else if (req.url.split('/')[1] === 'assets' && req.url.split('/')[2] === 'js') {
        let file = req.url.split('/')[3];
        fs.readFile(path.join(__dirname, 'main', 'assets', 'js', file), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': contentType });
            res.end(content);
        })

    } else {
        fs.readFile(path.join(__dirname, 'main', '404.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'content-type': 'text/html' });
            res.end('<h1>This is index.html</h1>');
        })
    }

});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Sever is running on port: ' + PORT);
})