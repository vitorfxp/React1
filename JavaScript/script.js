// 1- var, let e const 

var x = 10
var y = 15

if  ( y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if  ( b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for (let i = 0; i < 5; i++){
    console.log(i)
}

console.log(i)

// 2 - arrow functions 

const sum = function sum (a,b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

console.log

// const user = {
//     name: "theo",
//     sayUserName(){
//         setTimeout(() => {
//             console.log(this)
//             console.log("Username: "+ this.name)
//         }, 500)
//     },
// // }

// user.sayUserName()

// 3 - Método Filter 
const arr = [1,2,3,4,5]

console.log(arr)

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "Matheus", available: false},
    {name: "Pedro", available: true},
    {name: "João", available: false},
    {name: "Gustavo", available: true},
]

const availableUsers = users.filter ((user) => user.available)
const notavailableUsers = users.filter ((user) => !user.available)


console.log(availableUsers)
console.log(notavailableUsers)