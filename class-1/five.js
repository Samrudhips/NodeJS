// fs.readFile(filePath,encoding,callback)
// import fs from 'fs'
// fs.readFile('abc.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data);
//     fs.writeFile("rajni.txt",data,(err)=>{
//         if(err) throw err

//         console.log("File created and returned sucessfully");
        
//     })
    
// })
import fs from 'fs'
fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data);
    fs.writeFile('new.txt',data,(err)=>{
        if(err) throw err
        console.log("Data written  succesfully");
        
    })
    
})