// import http from 'http'
// //create server
// let server=http.createServer((req,resp)=>{
//     resp.end("Hello,GM")

// });
// server.listen(8080,'127.0.0.1',(err)=>{
//     if(err) throw err
//     console.log(`Server is running on:http//localhost:${8080}`);
    
// })
//In browser type 127.0.0.1:8080
//Install npm i -g nodemon in cmd
import http from 'http'
let server=http.createServer((req,resp)=>{
    resp.end("Hello,Hi,Good morning")
});
server.listen(8080,(err)=>{
    if(err) throw err
    console.log("Server running on port:8080")

})
//In browser give localhost:8080  