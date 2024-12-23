import bcrypt from 'bcrypt'
let user ={
    email:"rahul@gmail.com",
    password:'ILI',
    CC:'123412341111222',
    CVV:'123'
}
let salt= bcrypt.genSaltSync(10)
let new_psw=bcrypt.hashSync(user.password,salt)
user={...user,password:new_psw}

let flag=bcrypt.compareSync("ILI",user.password)
if(flag){
    console.log("login successful");
    
}else{
    console.log("login failed");
    
}