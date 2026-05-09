const mynum = [1,2,3,4,5,6,7,8,9,10]
// const num = mynum.map((num)=>{
// return num+10;
// })

// chaining
const num=mynum
        .map((num)=> num * 10 )
        .map((num)=> num * 1)
        .filter((num)=>{return num>50 && num<80})
console.log(num);

