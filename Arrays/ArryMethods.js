// Push - Push the Item to Last and return the new length of Array
let fruits  = ["Banana","Mango","Apple"]
// console.log(fruits)
// console.log("Length before Adding Guava",fruits.length);
console.log(fruits.push("Guava"))
console.log(fruits)
// pop = delete the Item from last And Give deleted item
console.log(fruits.pop())
console.log(fruits)
// toString() = to string gives back the string and also converts the items to  string don't change the original array
let fruitsItems  = fruits.toString();
// console.log(fruitsItems.replaceAll(',',' '))

// concat = concatinating multiple array's
let dc_hero = ["SuperMan","Batman"];
let marvel_hero = ["SiperMan","IronMan"]
let indian_hero = ["Krish","Saktiman"]
let heros = dc_hero.concat(marvel_hero,indian_hero)
// console.log(heros)
// shift and unshift similar to pop and push but for starting element
// console.log(dc_hero.unshift("thor"))
// console.log(dc_hero)
// console.log(dc_hero.shift())
// console.log(dc_hero)

// slice doesn't change original array  starting - inclusive ending not inclusive
console.log(fruits.slice(0,2));
// console.log(fruits.slice(1)); //1(index) se leke end tak

// splice - change in the original array splice(startind,delelmentcount,newElement)
let marks = [25,34,64,23]
console.log(marks)
marks.splice(1,1,45);
console.log(marks)
// If pass only one element than marks.splice(2) return the deleted element from 2 

