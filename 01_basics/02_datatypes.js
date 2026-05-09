"use strict"; //treat all js code as newer version

// alert("HI"); //we are using node js, not browser

//console.log(3 + 3);
//console.log("Nikhil");

// let name="Nikhil"       //string use in ' ' or " "
// let age=18              //number range = 2 to pow 53
// let isLoggedin = true   //boolean true or false
// let state;              //undefined not define a value
// let symbol              //unique
// let a=null              // standalone value
//bigint
//object

// console.table([name,age,isLoggedin,state,symbol,a])
// console.log(typeof "nikhil")
// console.log(typeof name)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof age, age)

// *************1 primitive data type (call by value)**************
// String
// Number
// Boolean
// null
// undefined
// symbol
// bigint

// **********2 non-primitive data type (call by reference)**********
// Array
// objects
// functions

const score = 100
const score1 = 100.3
const isLoggedin = false
const temp = null
let useremail

const id = Symbol("123")
const id1 = Symbol("123")
console.log(id === id1)