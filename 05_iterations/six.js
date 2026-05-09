const codding = ["python", "jacascript", "html", "css", "java"]
const value = codding.forEach((item)=>{
//    console.log(item);  
//    return item
})
// console.log(value);

// const mynum = [1,2,3,4,5,6]
// const num = mynum.filter( (num) => num >4)
// console.log(num);

// const mynum = [1,2,3,4,5,6]
// const num = mynum.filter( (num) => {
//     // num > 4
//     return num > 4
// })
// console.log(num);

// const newnums = [1,2,3,4,5]
// newnums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);

const arr = [
    {
        title: "Book One", genre: "History", publish: 1995
    },
    {
        title: "Book Two", genre: "Science", publish: 1998
    },
    {
        title: "Book Three", genre: "Non-Fiction", publish: 1997
    },
    {
        title: "Book Four", genre: "Non-Fiction", publish: 1992
    },
    {
        title: "Book Five", genre: "History", publish: 1992
    },
    {
        title: "Book Six", genre: "Non-Fiction", publish: 2021
    },
    {
        title: "Book Seven", genre: "History", publish: 2025
    },
    {
        title: "Book Eight", genre: "History", publish: 2021
    },
    {
        title: "Book Nine", genre: "Science", publish: 2023
    },
    {
        title: "Book Ten", genre: "Science", publish: 1999
    }
]

// const userbook = arr.filter((bk)=>
// bk.genre === "History"
// )
const userbook = arr.filter((bk)=>{return bk.publish >= 2000 && bk.genre === "History"})
console.log(userbook);
