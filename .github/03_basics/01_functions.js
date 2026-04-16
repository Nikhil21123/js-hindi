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

console.log(login("nikhil"));
