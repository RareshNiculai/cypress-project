 const http = require ('http');
 const server = http.createServer((req,res)=>{

    res.end('Hello')
});
const PORT = 3000;
server.listen(3000);
console.log('Node js running at ${PORT}')