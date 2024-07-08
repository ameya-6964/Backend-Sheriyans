const http = require("http");

let data = {
    name:"Ameya",
    age:12,
}
const server = http.createServer((req,res)=>{
    
   if(req.url === "/"){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
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