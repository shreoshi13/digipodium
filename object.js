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

const smartphonelist = [
    { brand : 'samsung', model: 's21', price: '70000', color : ['yellow','red']},
    { brand : 'Samsung', model: 's23', price: '86000', color : ['yellow','red']},
    { brand : 'apple', model: 'f11', price: '80000', color : ['yellow','red','white']},
    { brand : 'oneplus', model: '9pro', price: '60000', color : ['blue','white']},
    { brand : 'oneplus', model: 'nord', price: '35000', color : ['blue','white']},
    { brand : 'mi11', model: 'a2', price: '70000', color : ['gold','black']},
];
//syntax to access price of oneplus 9pro
console.log(smartphonelist[2].price)
console.log(smartphonelist[2].color[1])
//syntax to add blue color to mi11
smartphonelist[3].color.push('blue')
console.log(smartphonelist)

//remove two colors from apple
smartphonelist[1].color.splice(1,2);
console.log(smartphonelist)

//use filter to get all phones with price less than 70000
const res = smartphonelist.filter((phone)=>{return phone.price<70000})
console.log(res)

//use filter to find samsung
const res1 = smartphonelist.filter((phones)=>{return phones.brand.toLowerCase()==='samsung'.toLowerCase()})
const res2 = smartphonelist.filter((phones)=>{return phones.brand.toLowerCase().includes('sasun'.toLowerCase())})
console.log(res1)
console.log(res2)

//use filter to find phones with color blue
const res3 = smartphonelist.filter((phones)=>{return phones.color.includes('blue')})
console.log(res3)

//use filter to get all phones with color blue and price <70000
const res4 = smartphonelist.filter((phones)=>{return phones.color.includes('blue')&phones.price<70000})
console.log(res4)

