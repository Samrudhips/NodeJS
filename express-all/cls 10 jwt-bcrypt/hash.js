import bcrypt from 'bcrypt'
let user={
    'email':'rahul@gmail.com',
    'cc':'12345678',
    'cvv':'142'
}
let salt=bcrypt.genSaltSync(10);
let new_cc=bcrypt.hashSync(user.cc,salt)
let new_cvv=bcrypt.hashSync(user.cvv,salt)
// console.log(user.cc);
// console.log(new_cc);
// console.log(user.cvv);
// console.log(new_cvv);
// console.log(user);
user={
    ...user,cc:new_cc,cvv:new_cvv
}
console.log(user);

