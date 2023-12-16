const http = require("http");


//Vahi if else laga ma hai

 const server=http.createServer((req,res)=>{
console.log(req)
    res.write("Welcome to our home page")
    res.end()


 })

 server.listen(5000)