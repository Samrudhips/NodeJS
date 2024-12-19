import express from 'express'
let  app=express();

// API url:http://127.0.0.0.1:8080/
// Method types:GET
// Required fields:None
// Access type:public

app.get("/",(req,resp)=>{
    resp.send("create request-method GET")
})

// API url:http://127.0.0.0.1:8080/create
// Method types:POST
// Required fields:None
// Access type:public

app.post("/create",(req,resp)=>{
    resp.send("create request-method POST")
})

// API url:http://127.0.0.1:8080/update
// Method types:PUT
// Required fields:None
// Access type:public

app.put("/update",(req,resp)=>{
    resp.send("create request-method PUT")
})

// API url:http://127.0.0.1:8080/delete
// Method types:PUT
// Required fields:None
// Access type:public

app.delete("/delete",(req,resp)=>{
    resp.send("create request-method DELETE")
})


app.listen(8080,'127.0.0.1',(err)=>{
    if(err ) throw err
    console.log(`Server running on http://127.0.0.1:8080`);
    
})