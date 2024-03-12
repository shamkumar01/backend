const http = require("http")
const port = 4000;

const server = http.createServer((req ,res )=>{
    res.writeHead(200,{"Content-Type":"text/plain"});

    res.end ("hello world node server");
});

server.listen (port , ()=>{
    console.log (`Server running at ${port}`)
})