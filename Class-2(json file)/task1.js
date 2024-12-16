//read json file and print all the usernames
//To work with file we use fs module
import fs from 'fs'
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err)throw err
    console.log(typeof data)
    let users=JSON.parse(data)
    console.log(typeof users);
    for(let user of users){
        console.log(user.name);   
    }   
})
