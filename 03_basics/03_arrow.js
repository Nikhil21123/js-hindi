const user ={
    username: "nikhil",
    price: 999,

    welcome : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcome()
// user.username="same"
// user.welcome()
// console.log(this)

// function chai (){
//     let username= "nikhil"
//     console.log(username);
// }
// // console.log(this);

// chai()

const chai = () =>{
let cha = "nikhil"
console.log(this)
}

// chai()

// **************** arrow function *************************
// syntax: () => {}

// const add1 = (num1, num2) => {
// return num1 + num2
// }

// const c = add1(1,2)
// console.log(c);

// ******************** implecit return ***********************
// const add1 = (num1, num2) =>num1 + num2
// const addtwo = (num1, num2) => ({username: "nikhil"})
// const c = addtwo(1,2)
// console.log(c);

// Immediately Invoked Function Expression (IIFE)
(function chaii (){
    console.log(`DB CONNECTED`)
})();

(  (name)  =>{
console.log(`hi $(name)`)
} )("nikhil")

