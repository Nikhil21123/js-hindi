// for of
const arr= [1,2,3,4,5]
for (const num of arr) {
    // console.log(`${num}`)
}

const arr2 = "nik hil"

for (const nm of arr2) {
    // console.log(`${nm}`)
}

// Maps

const map=new Map()
map.set("in", "India")
map.set("USA", "Unites States of America")
map.set("fr", "France")
map.set("in", "India")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-' ,value);
}

const myobj =new{
    "game1": "NFS",
    "game2": "Spiderman",
}

for (const [key, value] of myobj) {
    // console.log(key, ":-", value)
}