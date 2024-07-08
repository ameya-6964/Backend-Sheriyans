const http = require("http");

const server = http.createServer((req,res)=>{
    
   if(req.url === "/"){
    res.end("Hello")
   }
   if(req.url === "/about"){
    res.end("On About Page")
   }
  
   if(req.url === "/contact"){
    res.end("On Contact Page")
   }
})

server.listen(3000,()=>{
    console.log("Server Started");
});