const http = require("http");
const path = require('path');
const fs = require('fs');

const PORT = 8585;

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Welcome to home page !")
        res.end()
    }
    else if(req.url === "/contact"){
        res.writeHead(200, {'content-Type' : 'text/html'})
        res.end('<h2>Welcome to contact page !</h2>')
    }
    else if(req.url === "/aboutUs"){
        res.writeHead(500, {'content-Type' : 'text/html'})
        res.end('<h3>contact as at <a href=https://masaischool.com target="_blank">www.masai School.com</h3>')
    }
    else if (req.url === '/index') {
        const filePath = path.join(__dirname, 'index.js');
        
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(data);
          }
        });
    
      }
    else{
        res.write("inviled URL")
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})