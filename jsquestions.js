//print all numbers divisible by 7 and 11 from 100 to 300
for(let i=100;i<=300;i++)
{
    if(i%7===0&&i%11===0){
        console.log(i);
    }
}

//fabonacci series upto 100
let num1=0;
let num2=1;
let next;
console.log(num1); 
console.log(num2);
next = num1+num2;
while(next<=100){
    console.log(next);
    num1=num2;
    num2=next;
    next= num1+num2;
} 


//fabonacci series of 10 numbers
let numb1=0;
let numb2=1;
let nextnow;
for(let i=2;i<10;i++)
{
    nextnow= numb1+numb2;
    console.log(nextnow);
    numb1=numb2;
    numb2=nextnow;
}

