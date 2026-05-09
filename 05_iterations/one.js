// for

for (let i = 0; i<=10; i++){
    if(i === "5"){
        console.log("this is 5");
    }
    // console.log(i);
}
const array = [1,2,3]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(array)
}

for(let i=1; i<=10; i++){
    // console.log(`outer loop ${i}`)
    for(let j=1; j<=10;j++){
        // console.log(`inner loop ${j} and inner loop ${i}`)
        // console.log(i + '*' + j + ' = ' + i*j);
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

const arr = ["nikhil", "ronak", "karan"]
// console.log(arr.length)
for(let i=0; i<arr.length; i++){
    const ar = arr[i]
    // console.log(ar);
}

// keywords break; continue;

for(let i =1; i<=20;i++)
{
    if(i==5){
        break;
    }
    console.log(`value of i is: ${i}`)
}

for(let i =1; i<=20;i++)
{
    if(i==5){
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is: ${i}`)
}

