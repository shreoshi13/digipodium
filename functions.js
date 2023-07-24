//type1
function addnums(a,b){
 var c=a+b
console.log(c)
};
addnums(2,4)


//type2
const getpercent = function(m1,m2,m3,m4,m5=90){
    console.log(m1,m2,m3,m4,m5)
    let percentage = (m1+m2+m3+m4+m5)/5;
    return percentage
    //console.log(percentage);
};
const res = getpercent(56,68,77,72);
getpercent(56,68,77,72,56);
console.log(res)

//type3
const getfactorial = (n)=>{
    let f=1;
    for(let i=2;i<=n;i++){
        f=f*i;
    }
    return f;
};
const ans = getfactorial(5);
console.log(ans);