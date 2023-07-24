user = { name: 'shreoshi' , email : 'shreoshi@gmail.com', password : '768'};
console.log(user.name)
console.log(user.email)
console.log(user['email'])
user.address = 'lucknow'
console.log(user)
let customkey = 'password'
console.log(user[customkey])