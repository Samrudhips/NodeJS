const path = require('path')
const fs = require('fs')
fs.readFile(path.join(__dirname,"data","users","users.json"),'utf-8',(err,data)=>{
    if(err){
        console.log(`Unable to Read  - : ${err.message} `)
    }else{
       
        let users = JSON.parse(data)
        let male_Users=users.filter(user=>user.gender ==="Male")
        let female_Users=users.filter(user=>user.gender ==="Female")
        let other_Users=users.filter(user=>user.gender !=="Female" && user.gender !=="Male" )
        fs.writeFile(path.join(__dirname,"emp_Data","male","male.json"),JSON.stringify(male_Users),(err)=>{
            if(err) throw err

            console.log("New file - male.json - created")
        })
        fs.writeFile(path.join(__dirname,"emp_Data","female","female.json"),JSON.stringify(female_Users),(err)=>{
            if(err) throw err 

            console.log("New file - female.json - created")
        })       
    }
})