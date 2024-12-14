//Writing into new file
// import fs from 'fs'
// let data=fs.readFileSync('abc.txt','utf-8')
// fs.writeFileSync('xyz.txt',data)
// console.log("Written Successfully");

import fs from 'fs'
let data=fs.readFileSync('abc.txt','utf-8')
fs.writeFileSync('xyz.txt',data)
console.log("Data written into new file succesfully");
