const http = require('http');
const hostname = 'localhost';
const port = 3000;
const stats = require('./pcRamUsage');

server = http.createServer((req, res) => {
    let url = req.url;

    if (url == '/stats') {
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end("<h1>Seja Bem Vindo :)</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});