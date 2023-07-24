const prices=[2300, 499, 233, 199, 450, 3400, 1800];
const filteredprice1 = prices.filter((p)=>{return p<500});
console.log(filteredprice1);

const names = ['bheem','oggy','tom','jerry','kaliya']
const newnames = names.filter((names)=>{return names.length>5})
console.log(newnames)