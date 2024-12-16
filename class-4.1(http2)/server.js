// import http from 'http'
// import fs from 'fs'
// //create server
// let server=http.createServer((req,resp)=>{
//     fs.readFile('index.html','utf-8',(err,data)=>{
//         if(err) throw err
//         resp.end(data)
//     })

// });
// server.listen(8080,(err)=>{
//     if(err) throw err
//     console.log(`Server is running on:http//localhost:${8080}`);
// })
//In browser type localhost:8080
import fs from 'fs'
import http from 'http'
let server=http.createServer((req,resp)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err) throw err
        resp.end(data)
    })
});
server.listen(8080,(err)=>{
    if (err) throw err
    console.log(`Server is running on:http//localhost:${8080}`);
    
})