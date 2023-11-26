let num = [12, 34, 56, 78, 90];
// const avg = num.reduce((prev,curr) => {
//     return prev + curr;
// })
// console.log(avg / num.length)

// find the largest number from the given array
let largestNo = 0;
const lar = num.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(lar);
