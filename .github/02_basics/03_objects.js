// two types object
// 1)literal 2)constructor
// singleton make with constructor
// object literals

// ******************Object*****************

const jsuser = {
    // [mysymbol]: "mykey1",
    "name": "Nikhil",
    "fullname": "siddhapura",
    age: 22,
    location: "upleta",
    email: "nik@gmail.com",
    isLoggedIn: "false",
    lastLoginDays: ["monday","saturday"]
}

// print object
// console.log(jsuser)
// console.log(jsuser["name"],jsuser["age"],jsuser["location"],jsuser["email"],jsuser["isLoggedIn"],jsuser["lastLoginDays"])
// console.log(jsuser.name)
// jsuser.name="namah";
// console.log(jsuser.name)
// console.log(jsuser.fullname);

// freeze object (no changes after freeze the object)
// Object.freeze(jsuser)
// console.log(jsuser["name"])
// jsuser.name="naren"
// console.log(jsuser["name"])

// add function in object
jsuser.greeting = function(){
    console.log("hi how are you?")
}

jsuser.greetingtwo = function(){
    console.log(`hi how are you?,${this.name},${this.age}`)
}
console.log(jsuser.greetingtwo());


// **************** Symbol **********************

// make ine sumbor and use in object and print this symbol
// const mysymbol = Symbol("key1")
// const jsuser1 = {
//     [mysymbol]: "mykey1",
//     name: "Rani"
// }
// console.log(jsuser1)
// console.log(jsuser1[mysymbol])

// typeof symbol
// console.log(typeof jsuser1.mysymbol)
// string
// console.log(typeof(mysymbol))
// symbol
// console.log(typeof(jsuser1[mysymbol]))
// undefined

