// Create an array of names and Use the filter method with startsWith to get names starting with 's'
const names = ['John', 'Sara', 'Mich', 'Saman', 'David', 'Sophi','sana','shreoshi'];

const namesStartingWithS = names.filter(name => name.startsWith('S')||name.startsWith('s'));

console.log(namesStartingWithS); 



// Create an array of numbers and  Use the filter method to get perfect square numbers
const numbers = [1, 3, 4, 7, 19, 116, 25, 36, 409, 64];

const perfectSquare = numbers.filter(number => {
  const sqrt = Math.sqrt(number);
  return parseInt(sqrt) === sqrt; 
});

console.log(perfectSquare); 




 // Create an array of numbers and Use the filter method to get prime numbers
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  const num = [0, 1, 2, 3, 4, 5, 6, 19, 11, 13, -15, 33, 66, -99];
  const prime = num.filter(isPrime);
  console.log(prime); 
  
 
