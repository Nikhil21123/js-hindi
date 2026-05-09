// Reduce()
// const mynums = [1,2,3]
// const mytotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc ${acc} Currval ${currval}`);
    
//     return acc + currval
// }, 0)
// console.log(mytotal);

const mynums = [1,2,3]
const mytotal = mynums.reduce((acc, currval)=> {
    // console.log(`acc ${acc} Currval ${currval}`);
    
    return acc + currval
}, 0)
// console.log(mytotal);


const shoppincart = [
    {
        itemname: "js cource", price: 2999
    },
    {
        itemname: "Mobile Dev", price: 5999
    },
    {
        itemname: "Data Science cource", price: 12999
    },
    {
        itemname: "py cource", price: 3999
    },
    {
        itemname: "CCC cource", price: 1999
    },
]

const total = shoppincart.reduce((acc, item)=>acc + item.itemname ,  0)
console.log(total);
