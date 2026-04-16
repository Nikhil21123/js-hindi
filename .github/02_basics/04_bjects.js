// object singleton (constructor)

// const jsuser ={}

const jsuser = new Object()
jsuser.id=1;
jsuser.name="samay"
jsuser.isLoggedIn="false"

// // console.log(jsuser)

// const user = {
//     email:"samay@gmail.com",
//     fullname: {
//         username :{
//             name:"nikhil",
//             lastname:"siddhapura"
//         }
//     }
// }

// console.log(user.fullname.username.lastname)

//***********************************************************************

// combine objects use assign method
// const obj1 = {
//     1: "a",
//     2: "b"
// }
// const obj2={
//     3 : "a",
//     4 : "b"
// }
// const obj3 = {
//     obj1, obj2
// }
// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// ***************************************************************************

// 
const user1=[
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "n@gmail.com"
    },{
        id : 1,
        email : "j@gmail.com"
    } 
]
console.log(user1[0].email)
console.log(jsuser);

// show a keys or values for object
// console.log(Object.keys(jsuser));
// console.log(Object.values(jsuser));
// console.log(Object.entries(jsuser));

// to find a propert in available in object or Not.

console.log(jsuser.hasOwnProperty("isLoggedIn"));