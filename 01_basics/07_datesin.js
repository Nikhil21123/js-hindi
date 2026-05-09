// ******************** Dates ***********************************

// let date =new Date()
// console.log("toString", "\n", date.toString())
// console.log("toDateString", "\n", date.toDateString())
// console.log("toISOString", "\n",date.toISOString())
// console.log("toJSON", "\n", date.toJSON())
// console.log("toLocaleDateString", "\n", date.toLocaleDateString())
// console.log("toLocaleString", "\n",date.toLocaleString());
// console.log("toLocaleTimeString", "\n", date.toLocaleTimeString())
// console.log(typeof date)

// let mydate = new Date(2023, 0, 23, 5, 3)
// let mydate = new Date("2023-01-14")
// let mydate = new Date("2-25-2021")
// console.log(mydate.toLocaleString())

// let mytimestamp = Date.now()
// console.log(mytimestamp)

// console.log(Math.floor(Date.now()/1000))

// specific type
let date = new Date()
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getHours())

date.toLocaleString('default', {
    weekday: "long",
    calendar: "date"
})
console.log(date)