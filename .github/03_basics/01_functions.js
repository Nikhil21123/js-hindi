function nik(){
console.log("n");
console.log("i");
console.log("k");
console.log("h");
console.log("i");
console.log("l");
}

// nik()

// **********************************************************

// parameters
function addtwonumbers (num1 , num2){
    // let result = num1+num2
    // return result
    return num1 + num2
}
// const result = addtwonumbers(4,4)
// console.log("Result ", result)


function login (username = "sam"){
    if(!username){
        console.log("please enter a user name")
        return 
    }
    return `${username} just logged in`
}
// console.log(login("nikhil"));

// console.log(login("nikhil"));

// rest
function calculatecartpeice(...num1){
return num1;
}
// console.log(calculatecartpeice(200,150))

// object use in function
const user = {
    name: "nikhil",
    price: 199
}

function handlobj (obj){
console.log(`username is: ${obj.name} and price is ${obj.price}`)
}

// handlobj(user);
handlobj({
    name: "nik",
    price: 74
})
 const arr = [100,200,300]
 function reeturnsecondvalue(getarray) {
    return getarray[1]
 }
//  console.log(reeturnsecondvalue(arr));
 console.log(reeturnsecondvalue([52,52,52]));