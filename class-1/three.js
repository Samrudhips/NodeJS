//Synchronous program
import fs from 'fs'
let data=fs.readFileSync('abc.txt','utf-8')
console.log(data);

//Asynchronous
// import { log } from 'console'
// import fs from 'fs'
// let data=fs.readFile('abc.txt','utf-8',(err,data)=>{
//     if (err) throw err
//     console.log(data);
    
// })
// console.log(data);

