// ==,===,!=,!== :- here double equal is used when data type is not imp === is used when we 
// have to compare based on data type too
let a = 8;
let b = 2;
let c = "8";
console.log("a==b", a == b) //false
console.log("a===c", a === c) // false
// ternary operator : cond?true:false;
let age = 19;
console.log(age > 18 ? "Eligible" : "Not Eligible");

// switch case
dOfWeek = "wow";
switch (dOfWeek) {
    case "Monday":
        console.log("hello Monday")
        break;
    case "Sunday":
        console.log("Hello Holiday");
        break;
    default:
        console.log("Work");
}