let game = "Fahad"
console.log(game.length);
// String Interpolation
// To create strings by doing substitution of placeholders
// `string text ${expression} string text`
// Escape Characters 
// \n = new line \t - tab space while counting the lenght it will consider as a single character
let mam = "Alfiya\nMulla"
console.log(mam.length)
// length = property variable
// let len = 0;
// for (let i of mam)
// {
//     console.log(i)
//     len++
// }
// console.log(len)
let str = "Farid Khan"
let str2 = "Mehrid"
// let hello = prompt("Enter your name");
    // console.log(hello.toLowerCase())
    // console.log(hello.toUpperCase())
    // console.log(hello.trim()) // Starting  and ending space (---Abc---)
console.log(str.slice(0,3)) //start - inclusive and  3 - Exclusive
// console.log(str.concat(str2))
console.log(str.replace("Khan","Shaikh")) // Case Sensitive
console.log(str.charAt(0))