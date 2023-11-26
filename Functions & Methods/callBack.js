let arr = ["Farid", "Fahad", "Zaid"];
// for (let a of arr){

//     console.log(a.toUpperCase());
// }
// This is the CallBack function used to Access Each Element
// arr.forEach((val,idx,arr) => {
//     console.log(val.toLowerCase(),idx,arr);
// });

// It Has three value:- The Element,index and the third array itself

// Map():- similar to forEach But Used to Create a New Array
// let weight = [34,23,14];
// let newWeight = weight.map((val)=>{
//     return val * 2;
// });
// console.log(weight)
// console.log(newWeight)

// Filter():- Filter the array and return new array based on certain condition
let num = [83, 48, 33, 98];
// let's filter out the number divided by two
let num2 = num.filter((val) => {
  return val % 2 === 0;
});

console.log(num);
console.log(num2);
