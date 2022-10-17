const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('Welcone to our server');
    }
    if (req.url === '/about') {
        res.end('This is our history');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>The page that you are looking for does not exist</p>
        <a href="/">back home</a>
    `);
});

server.listen(5000);