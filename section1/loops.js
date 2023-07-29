for(let i=0;i<9;i++)
{
    console.log(i);
}

let num=7;
let prime=true;
for(let i=2;i<num;i++)
{
    if(num%i===0){
        console.log('not prime')
        prime=false;
        break;
    }
}
if(prime) console.log('prime');

