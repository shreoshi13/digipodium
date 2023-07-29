const arr1 = [345, 'hello', false, console.log]
console.log(arr1);
console.log(typeof arr1);
console.log(arr1.at(-4));
//slicing
arr1.slice();
console.log(arr1.slice(1,4));
console.log(arr1.slice(1,-1));
console.log(arr1.slice(1,100));
console.log(arr1.slice(2));
console.log(arr1.slice(14));

//adding elements in array
arr1.push('flash');
arr1.unshift('pathan');
console.log(arr1);

//removing elements from array
arr1.pop();
arr1.shift();
console.log(arr1);

arr1.splice(2, 2);
console.log(arr1);
//adding elemnts
console.log(...arr1);
console.log(...arr1.slice(0,2),'new', ...arr1.slice(2));
console.log(...arr1,'batman');


