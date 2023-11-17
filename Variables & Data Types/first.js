// to Print anything on screen use console.log
console.log("hello world")
// let/var and const

// let: block scope variable can be updated and can be just left udeclared

{
    let age = 24
    age = 34
    let name;
    name = "Farid Khan"
}
let age = 15;

// var: global scope and old school used *recommended not to use while writing the code*

var isUsed = true //before 2015
var isUsed = false //after 2015

// const: block scope variable one's assigned(can't be *just* declare) cannot be changed

const PI = 3.14
// PI = 3.12 ERROR can't be changed

// Data types 
let num = 34
let programming = null;
let bigInt = BigInt("9734")
let symbol = Symbol("hello!")
let address = "Mumbai"
let php;
let isJs = true;

// Js is case-Sensitive
console.log(typeof num) //number
console.log(typeof programming) //object 
console.log(typeof bigInt) //bigInt: rarely used
console.log(typeof symbol) // Symbol: rarely used
console.log(typeof address) // String
console.log(typeof php) // undefined
console.log(typeof isJs) //boolean

// object:- Collect of variable means data generally used cosnt key value pairs
const student = {
    name: "Bhupendra jogi",
    class: 10,
    isSmart: true,
}
// acsses the key
console.log(student.name)
console.log(student["name"])

//you can change the key while using the constant 
student.isSmart = false
student["isSmart"] = false

console.log(student.isSmart)


















