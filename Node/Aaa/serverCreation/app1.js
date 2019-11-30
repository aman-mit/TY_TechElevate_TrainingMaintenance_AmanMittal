const http = require('http');
const fs = require('fs');


const server  = http.createServer((req, res)=> {
   
    url = req.url;
    method = req.method

    if(url==='/product' && method === 'GET') {
        res.setHeader('content-type' , 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<form action = "/add-product" method= "post"> <input type="text" name="name" placeholder="enter name"> <button type="submit">Add</botton> </form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/add-product' && method === 'post') {
        let array = [];
        req.on("data" , (chunk)=> {
            array.push(chunk);
        })
        req.on("end" , () => {
            fs.writeFile('msg.txt' , array , (err) => {
                if(err) {
                    console.log(err);
                }
            })
        })
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
    }
    res.setHeader('content-write' , 'text/html');
    res.write('<h1>SuccessFully Sent </h1>');
    res.end();
})
server.listen(9000 , (err) => {
    if(!err) {
        console.log('Port : 9000');
    }
});