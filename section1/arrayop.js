//map
const nums= [6852,696,521,9622,2,684];
const newnums = [];
for(let i of nums)
{
    console.log(i**2);
    newnums.push(i**2);
}
console.log(newnums);

const result = nums.map( (n) => {return n**2} );
console.log(result)

const price = [651, 98,20,666,999]
//const result1 = price.map((p)=>{return 0.1*p}) 
//const result2 = price.map((p)=>{return p+0.1*p}) 
//console.log(result1)
//console.log(result2)

//use map to get discounted prices at 7.5%
const result3 = price.map((p)=>{return p-0.075*p}) 
console.log(result3)

const prices=['$67.89','$348.99','$29384.22','$4.102', '$1.241']
//use map to get the prices in integer format
const result4=prices.map((w)=>{return parseInt(w.slice(1))})
console.log(result4)

const names = ["jay raj", "ali khan", "bobby roy", "riya chudail"];

const namesInUpperCase = names.map((name) => name.toUpperCase());

console.log(namesInUpperCase);

const numsat=[2,4,6,8]
const resultnew = numsat.map( (n) => {return n**2} );
console.log(resultnew)

const numbers = [144, 625, 25, 49, 121];

const squareRoots = numbers.map((number) => Math.sqrt(number));

console.log(squareRoots);

//use map function to extract first names from the array of full names
console.log(names.map((name)=>{return name.split(' ')[0]}))