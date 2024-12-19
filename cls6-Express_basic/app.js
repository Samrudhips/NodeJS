import express from 'express'
import path from 'path'
//in express we use send

let app=express()
// // // "/" means root  file
// app.get("/",(req,resp)=>{
//     resp.send("Root request")
// })
// //API url:http://localhost:8080/
// app.get("/users",(req,resp)=>{
//     resp.send("Users request")


// })
//to run users file 127.0.0.1:8080/users
app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","index.html"))
})
app.get("/index",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","index.html"))

})
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","about.html"))

})
app.get("/contact",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","contact.html"))

})
app.get("/services",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","services.html"))

})
app.get("/login",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","login.html"))

})


app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`Server running on http://127.0.0.1:8080/`);
    
})