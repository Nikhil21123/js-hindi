// let a = 10;
// if(true){
//     let a = 100;
//     console.log("inner is: ",a);
// }
// console.log(a);

// ******************************************************************

function a (){
    const name = "nikhil";
    function b (){
        const price = 100;
        console.log(name);
    }
    // console.log(price)
    b()
}
// a()

// ****************************************************************

if(true){
    const name = "nikhil"
    if(name === "nikhil"){
        const price = 100
        // console.log(name);
    }
// console.log(price)
}

// ****************************************************************
// console.log(addone(5))
function addone (num){
    return num + 1;
    
}

// ***************************expression****************************
const addtwo = function(num){
    return num + 2;
}
// console.log(addtwo(4));

