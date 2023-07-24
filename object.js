user = { name: 'shreoshi' , email : 'shreoshi@gmail.com', password : '768'};
console.log(user.name)
console.log(user.email)
console.log(user['email'])
user.address = 'lucknow'
user.clg = 'srm'
console.log(user)
let customkey = 'password'
console.log(user[customkey])
let smartphone ={
    brand : 'samsung',
    model : 's21',
    color : 'black',
    price : '30000'
};
smartphone.color = [ 'blue','red','grey']
smartphone.color.push('silver')
console.log(smartphone.color[2])
console.log(smartphone.color)