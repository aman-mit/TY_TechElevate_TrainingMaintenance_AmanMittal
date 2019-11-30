const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url , req.headers , req.method);
    res.setHeader('content-type' , 'text/html');
    res.write('<p>Hi Server Created</p>');
    res.end();
});
server.listen(3000 , (err) => {
    if(!err) {
        console.log('rinning 3000');
    }
});