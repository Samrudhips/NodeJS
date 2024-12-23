import jwt from 'jsonwebtoken'
let payload={
    'ename':"Rahul Gandhi",
    'password':"ILI"
}
let token=jwt.sign(payload,"BLNT")
console.log(token);

let new_payload=jwt.verify(token,"BLNT")
console.log(new_payload);
