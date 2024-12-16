import http from 'http'
//create server
let server=http.createServer((req,resp)=>{
    resp.end("Hello,GM")

});
server.listen(8080,(err)=>{
    if(err) throw err
    console.log(`Server is running on:http//localhost:${8080}`);
    
})