// 3) Read users.json file and write male and female users into two  different file
// import fs from 'fs'
// fs.readFile('users.json','utf-8',(err,data)=>{
//     if(err){
//         clg(`Unable to read-:${err.message}`)
//     }else{
//         // console.log(typeof data);
//         let users=JSON.parse(data)
//         // console.log(typeof users);
//         // console.log(users.length);
//         let male_users=users.filter(user=>user.gender==="Male")
//         let female_users=users.filter(user=>user.gender==="Female")
//         let other_users=users.filter(user=>user.gender!=="Male" && user.gender!=="Female")
//         // console.log(male_users.length);
//         // console.log(female_users.length);
//         // console.log(other_users.length);
//         fs.writeFile('male.json',JSON.stringify(male_users),(err)=>{
//             if(err) throw err
//             console.log("Male data created");
//         })
//         fs.writeFile('female.json',JSON.stringify(female_users),(err)=>{
//             if(err) throw err
//                 console.log("Female data created");
//         })      
//     }

// })
import fs from 'fs'
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err
    let users=JSON.parse(data)
    let male_users=users.filter(user=>user.gender==="Male")
    fs.writeFile('male.json',JSON.stringify(male_users),(err)=>{
        if(err) throw err
        console.log("Succesfully created male.json file");
        
    })
    let female_users=users.filter(user=>user.gender==="Female")
    fs.writeFile('female.json',JSON.stringify(female_users),(err)=>{
        if(err) throw err
        console.log("Succesfully created female.json file");
        
    })

})
